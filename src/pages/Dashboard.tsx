
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, CreditCard, FileText, MessageSquare, Package, Star, User } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for the dashboard
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    memberSince: "January 2023",
  };
  
  const activeServices = [
    {
      id: "s1",
      title: "Legal Contract Review",
      provider: "Sarah Johnson, Esq.",
      providerAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
      status: "In Progress",
      deadline: "May 30, 2023",
      price: 299,
      progress: 60,
    },
    {
      id: "s2",
      title: "Tax Planning Consultation",
      provider: "Michael Chen, CPA",
      providerAvatar: "https://randomuser.me/api/portraits/men/55.jpg",
      status: "Scheduled",
      deadline: "June 5, 2023",
      price: 199,
      progress: 20,
    },
  ];
  
  const completedServices = [
    {
      id: "s3",
      title: "Trademark Registration",
      provider: "Melissa Rodriguez, Esq.",
      providerAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
      completionDate: "April 15, 2023",
      price: 499,
      rating: 5,
    },
    {
      id: "s4",
      title: "Business Entity Formation",
      provider: "David Wilson, Esq.",
      providerAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
      completionDate: "March 10, 2023",
      price: 349,
      rating: 4,
    },
  ];
  
  const messages = [
    {
      id: "m1",
      from: "Sarah Johnson, Esq.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      preview: "I've reviewed the initial draft of your contract and have some suggestions...",
      time: "Yesterday",
      unread: true,
    },
    {
      id: "m2",
      from: "Michael Chen, CPA",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      preview: "Looking forward to our tax planning session next week. Please bring your...",
      time: "2 days ago",
      unread: false,
    },
  ];
  
  const invoices = [
    {
      id: "i1",
      service: "Legal Contract Review",
      date: "May 15, 2023",
      amount: 299,
      status: "Paid",
    },
    {
      id: "i2",
      service: "Trademark Registration",
      date: "April 12, 2023",
      amount: 499,
      status: "Paid",
    },
    {
      id: "i3",
      service: "Tax Planning Consultation",
      date: "June 1, 2023",
      amount: 199,
      status: "Pending",
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container-custom max-w-7xl">
          {/* Dashboard Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback>{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                  <p className="text-gray-600">{userProfile.email}</p>
                  <p className="text-sm text-gray-500">Member since {userProfile.memberSince}</p>
                </div>
              </div>
              <Button className="bg-lawpurple-600 hover:bg-lawpurple-700">Edit Profile</Button>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-white p-2 rounded-lg mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="messages">
                Messages
                {messages.some(m => m.unread) && (
                  <Badge className="ml-1.5 bg-red-500 text-white">
                    {messages.filter(m => m.unread).length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Active Services Card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-lawpurple-600" />
                      Active Services
                    </CardTitle>
                    <CardDescription>Your current active services and their status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeServices.length > 0 ? (
                      activeServices.map((service) => (
                        <div key={service.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium">{service.title}</h3>
                            <Badge className={service.status === "In Progress" ? "bg-amber-500" : "bg-blue-500"}>
                              {service.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={service.providerAvatar} alt={service.provider} />
                              <AvatarFallback>{service.provider[0]}</AvatarFallback>
                            </Avatar>
                            <span>{service.provider}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Due: {service.deadline}</span>
                            </div>
                            <span>${service.price}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-4">No active services</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Services</Button>
                  </CardFooter>
                </Card>
                
                {/* Recent Messages Card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-lawpurple-600" />
                      Recent Messages
                    </CardTitle>
                    <CardDescription>Latest communications from your service providers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {messages.length > 0 ? (
                      messages.map((message) => (
                        <div key={message.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={message.avatar} alt={message.from} />
                              <AvatarFallback>{message.from[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium">{message.from}</h3>
                                <span className="text-xs text-gray-500">{message.time}</span>
                              </div>
                              <p className="text-sm text-gray-600 truncate">
                                {message.unread && (
                                  <Badge className="mr-1.5 h-2 w-2 p-0 rounded-full bg-red-500" />
                                )}
                                {message.preview}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-4">No messages</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Go to Messages</Button>
                  </CardFooter>
                </Card>
                
                {/* Recent Payments Card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-lawpurple-600" />
                      Recent Payments
                    </CardTitle>
                    <CardDescription>Your recent payment history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {invoices.slice(0, 3).map((invoice) => (
                        <div key={invoice.id} className="flex justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{invoice.service}</p>
                            <p className="text-sm text-gray-500">{invoice.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${invoice.amount}</p>
                            <Badge className={invoice.status === "Paid" ? "bg-green-500" : "bg-amber-500"}>
                              {invoice.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Payment History</Button>
                  </CardFooter>
                </Card>
                
                {/* Completed Services Card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-lawpurple-600" />
                      Completed Services
                    </CardTitle>
                    <CardDescription>Services you've completed recently</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {completedServices.slice(0, 2).map((service) => (
                      <div key={service.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">{service.title}</h3>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < service.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={service.providerAvatar} alt={service.provider} />
                            <AvatarFallback>{service.provider[0]}</AvatarFallback>
                          </Avatar>
                          <span>{service.provider}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Completed: {service.completionDate}</span>
                          <span>${service.price}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Service History</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            {/* Placeholder content for other tabs */}
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Services</CardTitle>
                  <CardDescription>Manage your active and completed services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Services content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Your conversations with service providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Messages content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payments</CardTitle>
                  <CardDescription>Your payment history and billing information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Payments content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Settings content will be displayed here.</p>
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
