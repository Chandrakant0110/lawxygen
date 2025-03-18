
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

  // Render social login buttons with separator
  const renderSocialLoginWithSeparator = () => (
    <>
      <SocialLoginButtons 
        isLoading={isLoading} 
        onSocialLogin={handleSocialLogin} 
      />
      
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
    </>
  );

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
                <div className="space-y-4">
                  {renderSocialLoginWithSeparator()}
                  <LoginForm 
                    onSubmit={handleLogin} 
                    isLoading={isLoading} 
                  />
                </div>
              </TabsContent>

              <TabsContent value="signup">
                {renderSocialLoginWithSeparator()}
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
