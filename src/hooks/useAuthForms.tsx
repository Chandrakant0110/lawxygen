
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type AuthTabType = "signin" | "signup" | "reset";

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

export interface ResetPasswordFormValues {
  email: string;
}

export const useAuthForms = () => {
  const [activeTab, setActiveTab] = useState<AuthTabType>("signin");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Reset error when switching tabs
  const handleTabChange = (tab: AuthTabType) => {
    setAuthError(null);
    setResetEmailSent(false);
    setActiveTab(tab);
  };

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
      setActiveTab("signin");
    } catch (error: any) {
      setAuthError(error.message || "An error occurred during signup");
      toast.error(error.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async (values: ResetPasswordFormValues) => {
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

  return {
    activeTab,
    isLoading,
    authError,
    resetEmailSent,
    setActiveTab: handleTabChange,
    handleLogin,
    handleSignup,
    handleResetPassword,
    handleSocialLogin
  };
};
