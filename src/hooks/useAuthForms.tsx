
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuthForms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Handle login
  const handleLogin = async (values: LoginFormValues) => {
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
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during login");
      toast.error(error.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup
  const handleSignup = async (values: SignupFormValues) => {
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
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during signup");
      toast.error(error.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login - only Google now
  const handleSocialLogin = async (provider: 'google') => {
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

  return {
    isLoading,
    authError,
    handleLogin,
    handleSignup,
    handleSocialLogin
  };
};
