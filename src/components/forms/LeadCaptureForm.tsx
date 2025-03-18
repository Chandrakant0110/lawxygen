
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Schema for form validation
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().optional(),
});

// List of services for the dropdown - expanded list
const services = [
  { id: "private-limited-company", label: "Private Limited Company Registration" },
  { id: "llp-registration", label: "Limited Liability Partnership Registration" },
  { id: "one-person-company", label: "One Person Company Registration" },
  { id: "sole-proprietorship", label: "Sole Proprietorship Registration" },
  { id: "partnership-firm", label: "Partnership Firm Registration" },
  { id: "section-8-company", label: "Section 8 Company Registration" },
  { id: "nidhi-company", label: "Nidhi Company Registration" },
  { id: "producer-company", label: "Producer Company Registration" },
  { id: "gst-registration", label: "GST Registration" },
  { id: "gst-filing", label: "GST Filing" },
  { id: "income-tax-filing", label: "Income Tax Return Filing" },
  { id: "company-annual-filing", label: "Company Annual Filing" },
  { id: "trademark-registration", label: "Trademark Registration" },
  { id: "copyright-registration", label: "Copyright Registration" },
  { id: "patent-filing", label: "Patent Filing" },
  { id: "legal-documentation", label: "Legal Documentation" },
  { id: "nda-agreement", label: "Non-Disclosure Agreement Drafting" },
  { id: "founders-agreement", label: "Founders Agreement Drafting" },
  { id: "hr-compliance", label: "HR & Payroll Compliance" },
  { id: "government-registrations", label: "Government Registrations & Licensing" },
];

interface LeadCaptureFormProps {
  defaultService?: string;
  variant?: "sidebar" | "inline" | "popup";
  className?: string;
  title?: string;
  subtitle?: string;
  onSubmitSuccess?: () => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  defaultService,
  variant = "inline",
  className = "",
  title = "Get a Free Consultation",
  subtitle = "Fill out this form, and our legal experts will get back to you within 24 hours.",
  onSubmitSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Form initialization
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: defaultService || "",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Insert the lead into Supabase
      const { error } = await supabase.from("leads").insert({
        full_name: values.fullName,
        email: values.email,
        phone: values.phone || null,
        company: values.company || null,
        service: values.service,
        message: values.message || null,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Consultation Request Submitted!",
        description: "Thank you for reaching out. Our legal expert will contact you within 24 hours.",
      });

      form.reset();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
      console.error("Lead submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Determine form styling based on variant
  const formStyles = {
    sidebar: "bg-indigo-50 p-5 rounded-lg border border-indigo-100 shadow-sm",
    inline: "bg-white p-6 rounded-xl border border-slate-200 shadow-md",
    popup: "bg-white p-6 rounded-xl border border-slate-200 shadow-lg",
  };

  return (
    <div className={`${formStyles[variant]} ${className}`}>
      <h3 className="text-xl font-bold text-indigo-800 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 mb-6">
        {subtitle}
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address*</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (123) 456-7890" {...field} />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC Corp" {...field} />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Interested In*</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your specific requirements..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            variant="primary" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
          
          <p className="text-xs text-slate-500 text-center pt-2">
            By submitting, you agree to our 
            <a href="/privacy" className="text-indigo-600 hover:underline"> Privacy Policy</a>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LeadCaptureForm;
