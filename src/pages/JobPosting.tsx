
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle2, Info, FileQuestion, FileSignature, Clock, DollarSign } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  category: z.string().min(1, { message: "Please select a category." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  skills: z.string().min(1, { message: "Please enter at least one skill." }),
  budget: z.string().min(1, { message: "Please enter your budget." }),
  timeframe: z.string().min(1, { message: "Please select a timeframe." }),
  termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms." }),
});

const JobPosting = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      skills: "",
      budget: "",
      timeframe: "",
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-white border-b">
          <div className="container-custom py-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 md:text-3xl">Post a Legal Job</h1>
            <p className="mt-2 text-center text-gray-600">
              Find the perfect legal professional for your specific needs
            </p>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="order-2 lg:order-1 lg:col-span-2">
              {isSubmitted ? (
                <Card>
                  <CardContent className="flex flex-col items-center pt-10 pb-10">
                    <div className="w-16 h-16 mb-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="mb-2 text-2xl font-semibold text-center">Job Posted Successfully!</h2>
                    <p className="mb-6 text-center text-gray-600">
                      Your job has been posted and is now visible to our network of legal professionals.
                    </p>
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                      <Button asChild variant="outline">
                        <Link to="/job-posting">Post Another Job</Link>
                      </Button>
                      <Button asChild>
                        <Link to="/dashboard">Go to Dashboard</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Contract Review for Business Partnership" {...field} />
                              </FormControl>
                              <FormDescription>
                                A clear title helps professionals understand your needs.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a legal category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="corporate">Corporate Law</SelectItem>
                                  <SelectItem value="litigation">Litigation</SelectItem>
                                  <SelectItem value="realestate">Real Estate</SelectItem>
                                  <SelectItem value="family">Family Law</SelectItem>
                                  <SelectItem value="ip">Intellectual Property</SelectItem>
                                  <SelectItem value="tax">Tax Law</SelectItem>
                                  <SelectItem value="immigration">Immigration</SelectItem>
                                  <SelectItem value="employment">Employment Law</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Description</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe the legal service you need in detail..." 
                                  className="h-32" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                Include all relevant details about your requirements.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Required Skills/Expertise</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Contract Law, Negotiation, Due Diligence" {...field} />
                              </FormControl>
                              <FormDescription>
                                Separate multiple skills with commas.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under-500">Under $500</SelectItem>
                                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                                    <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                    <SelectItem value="10000-plus">$10,000+</SelectItem>
                                    <SelectItem value="hourly">Hourly Rate</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="timeframe"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Timeframe</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select timeframe" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="urgent">Less than 1 week</SelectItem>
                                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                                    <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                                    <SelectItem value="long-term">Long-term / Ongoing</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="termsAccepted"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Terms & Conditions</FormLabel>
                                <FormDescription>
                                  I accept the <Link to="#" className="text-lawpurple-600 hover:underline">terms and conditions</Link> for posting on Lawxygen.
                                </FormDescription>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full bg-lawpurple-600 hover:bg-lawpurple-700">
                          Post Job
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Posting Tips</h2>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <FileQuestion className="w-5 h-5 mr-3 text-lawpurple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Be Specific</h3>
                          <p className="text-sm text-gray-600">Clearly describe your legal needs to attract qualified professionals.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <FileSignature className="w-5 h-5 mr-3 text-lawpurple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Include Requirements</h3>
                          <p className="text-sm text-gray-600">Mention any specific qualifications or expertise needed.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <Clock className="w-5 h-5 mr-3 text-lawpurple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Set Clear Deadlines</h3>
                          <p className="text-sm text-gray-600">Be realistic about your timeframe expectations.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <DollarSign className="w-5 h-5 mr-3 text-lawpurple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Budget Appropriately</h3>
                          <p className="text-sm text-gray-600">Research typical rates for the legal services you need.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 mt-6 bg-blue-50 border border-blue-100 rounded-md">
                      <div className="flex">
                        <Info className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-blue-800">Need Help?</h3>
                          <p className="text-sm text-blue-700">Our team is available to assist you with your job posting.</p>
                          <Link to="#" className="text-sm font-medium text-blue-600 hover:underline">
                            Contact Support
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobPosting;
