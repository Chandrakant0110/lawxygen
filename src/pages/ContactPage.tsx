import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 py-16 text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
            <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you navigate your legal journey.
            </p>
          </div>
        </div>

        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer all your questions.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-violet-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email Us</h3>
                    <p className="text-slate-600">info@lawxygen.com</p>
                    <p className="text-slate-600">support@lawxygen.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-violet-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Call Us</h3>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-600">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-violet-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Visit Us</h3>
                    <p className="text-slate-600">
                      123 Legal Street, Business District,
                      <br />
                      New Delhi, 110001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                {/* Social media icons */}
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-slate-100 p-3 rounded-full hover:bg-violet-100 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-violet-600 mask mask-{social}"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Let us know how we can help you..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-violet-600 hover:bg-violet-700"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="w-full h-[400px] bg-slate-200">
            {/* Replace with actual Google Maps or other map integration */}
            <div className="w-full h-full flex items-center justify-center bg-slate-300">
              <p className="text-slate-600">Map Placeholder</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
