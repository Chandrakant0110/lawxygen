
import React from "react";
import { Button } from "@/components/ui/button";
import { Apple, Linkedin } from "lucide-react";

interface SocialLoginButtonsProps {
  isLoading: boolean;
  onSocialLogin: (provider: 'google' | 'apple' | 'linkedin_oidc') => Promise<void>;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ 
  isLoading, 
  onSocialLogin 
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        disabled={isLoading}
        onClick={() => onSocialLogin('google')}
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
        onClick={() => onSocialLogin('apple')}
      >
        <Apple className="h-4 w-4" />
        Continue with Apple
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        disabled={isLoading}
        onClick={() => onSocialLogin('linkedin_oidc')}
      >
        <Linkedin className="h-4 w-4" />
        Continue with LinkedIn
      </Button>
    </div>
  );
};

export default SocialLoginButtons;
