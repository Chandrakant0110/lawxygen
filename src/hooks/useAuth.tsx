
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  signOut: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  refreshProfile: () => Promise<void>;
};

interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  signOut: async () => {},
  loading: true,
  isAuthenticated: false,
  userProfile: null,
  refreshProfile: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // Only use navigate when inside Router context
  const navigate = useNavigate();

  // Fetch user profile data - memoized to prevent unnecessary recreations
  const fetchUserProfile = useCallback(async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error);
        return null;
      }

      return data as UserProfile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  }, []);

  // Refresh user profile data - memoized
  const refreshProfile = useCallback(async () => {
    if (user?.id) {
      const profile = await fetchUserProfile(user.id);
      if (profile) {
        setUserProfile(profile);
      }
    }
  }, [user?.id, fetchUserProfile]);

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!error) {
        setSession(data.session);
        setUser(data.session?.user || null);
        
        // Fetch user profile if user exists
        if (data.session?.user) {
          const profile = await fetchUserProfile(data.session.user.id);
          setUserProfile(profile);
        }
      }
      setLoading(false);
    };

    getSession();

    // Set up auth listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log("Auth state change:", event);
        setSession(currentSession);
        setUser(currentSession?.user || null);
        
        // Fetch user profile when auth state changes
        if (currentSession?.user) {
          const profile = await fetchUserProfile(currentSession.user.id);
          setUserProfile(profile);
        } else {
          setUserProfile(null);
        }
        
        setLoading(false);

        // Handle auth events
        if (event === 'SIGNED_IN') {
          toast.success("Successfully signed in");
          navigate('/dashboard');
        } else if (event === 'SIGNED_OUT') {
          toast.info("You've been signed out");
          navigate('/');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [fetchUserProfile, navigate]);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
      console.error("Error signing out:", error);
    } else {
      setSession(null);
      setUser(null);
      setUserProfile(null);
    }
  }, []);

  // Memoize the context value to prevent unnecessary rerenders
  const value = {
    session,
    user,
    signOut,
    loading,
    isAuthenticated: !!user,
    userProfile,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Protected route component with performance optimizations
export const ProtectedRoute = ({ 
  children,
  redirectTo = "/auth"
}: { 
  children: React.ReactNode,
  redirectTo?: string
}) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error("You must be logged in to access this page");
      navigate(redirectTo);
    }
  }, [isAuthenticated, loading, navigate, redirectTo]);
  
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-apple-blue"></div>
    </div>;
  }
  
  return isAuthenticated ? <>{children}</> : null;
};
