
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Lock, Mail, User, ArrowRight, AlertCircle, Apple, Linkedin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Form schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const signupSchema = loginSchema.extend({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  confirmPassword: z.string().min(6, { message: "Confirm password must be at least 6 characters." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup" | "reset">("signin");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Signup form
  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Reset password form
  const resetForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Reset error when switching tabs
  useEffect(() => {
    setAuthError(null);
    setResetEmailSent(false);
  }, [activeTab]);

  // Handle login
  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setAuthError(error.message);
        toast.error(error.message);
        return;
      }

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during login");
      toast.error(error.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup
  const handleSignup = async (values: z.infer<typeof signupSchema>) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            first_name: values.firstName,
            last_name: values.lastName,
          },
        },
      });

      if (error) {
        setAuthError(error.message);
        toast.error(error.message);
        return;
      }

      toast.success("Registration successful! Please verify your email.");
      setActiveTab("signin");
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during signup");
      toast.error(error.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async (values: z.infer<typeof resetPasswordSchema>) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setAuthError(error.message);
        toast.error(error.message);
        return;
      }

      setResetEmailSent(true);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (error: any) {
      setAuthError(error.message || "An error occurred while sending reset email");
      toast.error(error.message || "An error occurred while sending reset email");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = async (provider: 'google' | 'apple' | 'linkedin_oidc') => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        setAuthError(error.message);
        toast.error(error.message);
      }
    } catch (error: any) {
      setAuthError(error.message || `An error occurred during ${provider} login`);
      toast.error(error.message || `An error occurred during ${provider} login`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to LawXygen
              </h1>
              <p className="text-gray-600">
                {activeTab === "signin" && "Sign in to access your account"}
                {activeTab === "signup" && "Create an account to get started"}
                {activeTab === "reset" && "Reset your password"}
              </p>
            </div>

            {authError && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "signin" | "signup" | "reset")}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="reset">Reset</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isLoading}
                      onClick={() => handleSocialLogin('google')}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H8.00005V9.08946H12.2618C12.1793 9.82936 11.7344 10.9026 10.7172 11.6125L10.6911 11.7689L12.9234 13.4963L13.0775 13.5115C14.5411 12.1608 15.4001 10.3152 15.4001 8.116Z" fill="#4285F4"/>
                        <path d="M8.00005 15.5999C10.1143 15.5999 11.9143 14.9115 13.0775 13.5114L10.7172 11.6125C10.0527 12.079 9.17611 12.4021 8.00005 12.4021C5.9343 12.4021 4.17611 11.0615 3.57873 9.19946L3.42902 9.20675L1.0909 11.0012L1.05835 11.1428C2.21396 13.7755 4.8717 15.5999 8.00005 15.5999Z" fill="#34A853"/>
                        <path d="M3.57868 9.19951C3.42639 8.72294 3.33896 8.21746 3.33896 7.70003C3.33896 7.18226 3.42639 6.67712 3.57085 6.20055L3.56423 6.03421L1.19879 4.21185L1.05829 4.25699C0.670543 5.33734 0.4436 6.4955 0.4436 7.70003C0.4436 8.90457 0.670543 10.0626 1.05829 11.1428L3.57868 9.19951Z" fill="#FBBC05"/>
                        <path d="M8.00005 3.00589C9.47178 3.00589 10.4527 3.6289 11.0255 4.16332L13.1289 2.16175C11.9071 1.0391 10.1144 0.399902 8.00005 0.399902C4.8717 0.399902 2.21396 2.2243 1.05835 4.85692L3.57091 6.80048C4.17612 4.93853 5.93431 3.00589 8.00005 3.00589Z" fill="#EB4335"/>
                      </svg>
                      Continue with Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isLoading}
                      onClick={() => handleSocialLogin('apple')}
                    >
                      <Apple className="h-4 w-4" />
                      Continue with Apple
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isLoading}
                      onClick={() => handleSocialLogin('linkedin_oidc')}
                    >
                      <Linkedin className="h-4 w-4" />
                      Continue with LinkedIn
                    </Button>
                  </div>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-sm text-gray-500">or continue with email</span>
                    </div>
                  </div>

                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <Input
                                  placeholder="email@example.com"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <Input
                                  type="password"
                                  placeholder="******"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-gray-800"
                        disabled={isLoading}
                      >
                        {isLoading ? "Logging in..." : "Sign In"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <Form {...signupForm}>
                  <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={signupForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <Input
                                  placeholder="John"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signupForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <Input
                                placeholder="email@example.com"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <Input
                                type="password"
                                placeholder="******"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signupForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              <Input
                                type="password"
                                placeholder="******"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="reset">
                {resetEmailSent ? (
                  <div className="text-center py-4">
                    <div className="mb-4">
                      <Mail className="mx-auto h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Check your inbox</h3>
                    <p className="text-gray-600 mb-4">
                      We've sent a password reset link to your email address.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setActiveTab("signin")}
                      className="w-full"
                    >
                      Back to Sign In
                    </Button>
                  </div>
                ) : (
                  <Form {...resetForm}>
                    <form onSubmit={resetForm.handleSubmit(handleResetPassword)} className="space-y-4">
                      <FormField
                        control={resetForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <Input
                                  placeholder="email@example.com"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-gray-800"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Reset Link"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
