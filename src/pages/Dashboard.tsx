
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, CreditCard, FileText, MessageSquare, Package, Plus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useAuth();
  
  const userProfile = {
    name: user?.user_metadata?.name || user?.email?.split('@')[0] || "New User",
    email: user?.email || "user@example.com",
    avatar: user?.user_metadata?.avatar_url,
    memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-apple-gray-50 py-8 px-4">
        <div className="container-custom max-w-7xl">
          {/* Dashboard Header - Apple-style */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <Avatar className="h-16 w-16 rounded-xl">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="bg-apple-blue/10 text-apple-blue">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold text-apple-gray-900">{userProfile.name}</h1>
                  <p className="text-apple-gray-500">{userProfile.email}</p>
                  <p className="text-sm text-apple-gray-400">Member since {userProfile.memberSince}</p>
                </div>
              </div>
              <Button className="bg-apple-blue hover:bg-apple-darkblue rounded-lg">Edit Profile</Button>
            </div>
          </div>
          
          {/* Dashboard Tabs - Apple-style */}
          <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-white p-2 rounded-xl mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Services</TabsTrigger>
              <TabsTrigger value="messages" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Messages</TabsTrigger>
              <TabsTrigger value="payments" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Payments</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Settings</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab - Empty State with Apple styling */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Active Services Card - Empty State */}
                <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-apple-gray-800">
                      <Package className="h-5 w-5 text-apple-blue" />
                      Active Services
                    </CardTitle>
                    <CardDescription className="text-apple-gray-500">Your current active services and their status</CardDescription>
                  </CardHeader>
                  <CardContent className="py-10">
                    <div className="text-center">
                      <div className="mx-auto bg-apple-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                        <Package className="h-8 w-8 text-apple-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-apple-gray-800 mb-2">No active services</h3>
                      <p className="text-apple-gray-500 mb-6">You don't have any active services at the moment</p>
                      <Button className="bg-apple-blue hover:bg-apple-darkblue rounded-lg">
                        <Plus className="h-4 w-4 mr-2" />
                        Browse Services
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Messages Card - Empty State */}
                <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-apple-gray-800">
                      <MessageSquare className="h-5 w-5 text-apple-blue" />
                      Recent Messages
                    </CardTitle>
                    <CardDescription className="text-apple-gray-500">Latest communications from your service providers</CardDescription>
                  </CardHeader>
                  <CardContent className="py-10">
                    <div className="text-center">
                      <div className="mx-auto bg-apple-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                        <MessageSquare className="h-8 w-8 text-apple-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-apple-gray-800 mb-2">No messages yet</h3>
                      <p className="text-apple-gray-500 mb-4">Your messages will appear here when you start communicating with service providers</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Payments Card - Empty State */}
                <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-apple-gray-800">
                      <CreditCard className="h-5 w-5 text-apple-blue" />
                      Recent Payments
                    </CardTitle>
                    <CardDescription className="text-apple-gray-500">Your recent payment history</CardDescription>
                  </CardHeader>
                  <CardContent className="py-10">
                    <div className="text-center">
                      <div className="mx-auto bg-apple-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                        <CreditCard className="h-8 w-8 text-apple-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-apple-gray-800 mb-2">No payment history</h3>
                      <p className="text-apple-gray-500 mb-4">Your payment history will be displayed here once you make a purchase</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Completed Services Card - Empty State */}
                <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-apple-gray-800">
                      <FileText className="h-5 w-5 text-apple-blue" />
                      Completed Services
                    </CardTitle>
                    <CardDescription className="text-apple-gray-500">Services you've completed recently</CardDescription>
                  </CardHeader>
                  <CardContent className="py-10">
                    <div className="text-center">
                      <div className="mx-auto bg-apple-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                        <FileText className="h-8 w-8 text-apple-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-apple-gray-800 mb-2">No completed services</h3>
                      <p className="text-apple-gray-500 mb-4">Your completed services will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Other tabs with empty states */}
            <TabsContent value="services">
              <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-apple-gray-800">Services</CardTitle>
                  <CardDescription className="text-apple-gray-500">Manage your active and completed services</CardDescription>
                </CardHeader>
                <CardContent className="py-16">
                  <div className="text-center">
                    <div className="mx-auto bg-apple-gray-100 rounded-full h-24 w-24 flex items-center justify-center mb-6">
                      <Package className="h-10 w-10 text-apple-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-apple-gray-800 mb-3">No services yet</h3>
                    <p className="text-apple-gray-500 mb-6 max-w-md mx-auto">
                      You haven't purchased any services yet. Browse our services to get started with legal assistance.
                    </p>
                    <Button className="bg-apple-blue hover:bg-apple-darkblue rounded-lg">
                      <Plus className="h-4 w-4 mr-2" />
                      Browse Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages">
              <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-apple-gray-800">Messages</CardTitle>
                  <CardDescription className="text-apple-gray-500">Your conversations with service providers</CardDescription>
                </CardHeader>
                <CardContent className="py-16">
                  <div className="text-center">
                    <div className="mx-auto bg-apple-gray-100 rounded-full h-24 w-24 flex items-center justify-center mb-6">
                      <MessageSquare className="h-10 w-10 text-apple-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-apple-gray-800 mb-3">No messages yet</h3>
                    <p className="text-apple-gray-500 mb-6 max-w-md mx-auto">
                      Your messages will appear here once you start communicating with service providers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-apple-gray-800">Payments</CardTitle>
                  <CardDescription className="text-apple-gray-500">Your payment history and billing information</CardDescription>
                </CardHeader>
                <CardContent className="py-16">
                  <div className="text-center">
                    <div className="mx-auto bg-apple-gray-100 rounded-full h-24 w-24 flex items-center justify-center mb-6">
                      <CreditCard className="h-10 w-10 text-apple-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-apple-gray-800 mb-3">No payment history</h3>
                    <p className="text-apple-gray-500 mb-6 max-w-md mx-auto">
                      Your payment history will be displayed here once you make a purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="rounded-xl border-apple-gray-200 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-apple-gray-800">Settings</CardTitle>
                  <CardDescription className="text-apple-gray-500">Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3 text-apple-gray-800">Profile Information</h3>
                      <p className="text-sm text-apple-gray-500 mb-4">Update your account profile information</p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="border-apple-gray-200 text-apple-gray-700 hover:bg-apple-gray-100">Edit Profile</Button>
                        <Button variant="outline" className="border-apple-gray-200 text-apple-gray-700 hover:bg-apple-gray-100">Change Password</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3 text-apple-gray-800">Notification Preferences</h3>
                      <p className="text-sm text-apple-gray-500 mb-4">Manage how you receive notifications</p>
                      <Button variant="outline" className="border-apple-gray-200 text-apple-gray-700 hover:bg-apple-gray-100">Manage Notifications</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
