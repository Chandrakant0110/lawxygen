
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";
import { AuthTabType, useAuthForms } from "@/hooks/useAuthForms";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import ResetPasswordSent from "@/components/auth/ResetPasswordSent";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const {
    activeTab,
    isLoading,
    authError,
    resetEmailSent,
    setActiveTab,
    handleLogin,
    handleSignup,
    handleResetPassword,
    handleSocialLogin
  } = useAuthForms();
  
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Handle Google authentication
  const handleGoogleAuth = () => {
    handleSocialLogin('google');
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

            {/* Single Authentication Button at top */}
            <div className="mb-6">
              <Button 
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H8.00005V9.08946H12.2618C12.1793 9.82936 11.7344 10.9026 10.7172 11.6125L10.6911 11.7689L12.9234 13.4963L13.0775 13.5115C14.5411 12.1608 15.4001 10.3152 15.4001 8.116Z" fill="#ffffff"/>
                  <path d="M8.00005 15.5999C10.1143 15.5999 11.9143 14.9115 13.0775 13.5114L10.7172 11.6125C10.0527 12.079 9.17611 12.4021 8.00005 12.4021C5.9343 12.4021 4.17611 11.0615 3.57873 9.19946L3.42902 9.20675L1.0909 11.0012L1.05835 11.1428C2.21396 13.7755 4.8717 15.5999 8.00005 15.5999Z" fill="#ffffff"/>
                  <path d="M3.57868 9.19951C3.42639 8.72294 3.33896 8.21746 3.33896 7.70003C3.33896 7.18226 3.42639 6.67712 3.57085 6.20055L3.56423 6.03421L1.19879 4.21185L1.05829 4.25699C0.670543 5.33734 0.4436 6.4955 0.4436 7.70003C0.4436 8.90457 0.670543 10.0626 1.05829 11.1428L3.57868 9.19951Z" fill="#ffffff"/>
                  <path d="M8.00005 3.00589C9.47178 3.00589 10.4527 3.6289 11.0255 4.16332L13.1289 2.16175C11.9071 1.0391 10.1144 0.399902 8.00005 0.399902C4.8717 0.399902 2.21396 2.2243 1.05835 4.85692L3.57091 6.80048C4.17612 4.93853 5.93431 3.00589 8.00005 3.00589Z" fill="#ffffff"/>
                </svg>
                Sign in with Google
              </Button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">
                  or continue with email
                </span>
              </div>
            </div>

            {authError && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}

            <Tabs 
              value={activeTab} 
              onValueChange={(value) => setActiveTab(value as AuthTabType)}
            >
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="reset">Reset</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <LoginForm 
                  onSubmit={handleLogin} 
                  isLoading={isLoading} 
                />
              </TabsContent>

              <TabsContent value="signup">
                <SignupForm 
                  onSubmit={handleSignup} 
                  isLoading={isLoading} 
                />
              </TabsContent>

              <TabsContent value="reset">
                {resetEmailSent ? (
                  <ResetPasswordSent onBack={() => setActiveTab("signin")} />
                ) : (
                  <ResetPasswordForm 
                    onSubmit={handleResetPassword} 
                    isLoading={isLoading} 
                  />
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
