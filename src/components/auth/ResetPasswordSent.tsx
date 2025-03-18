
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResetPasswordSentProps {
  onBack: () => void;
}

const ResetPasswordSent: React.FC<ResetPasswordSentProps> = ({ onBack }) => {
  return (
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
        onClick={onBack}
        className="w-full"
      >
        Back to Sign In
      </Button>
    </div>
  );
};

export default ResetPasswordSent;
