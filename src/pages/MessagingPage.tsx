
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, PaperclipIcon, Send, MoreVertical, Phone, Video, Info, Calendar, Clock } from "lucide-react";

const MessagingPage = () => {
  const [selectedChat, setSelectedChat] = useState("chat1");
  const [newMessage, setNewMessage] = useState("");
  
  // Mock chat data
  const chatList = [
    {
      id: "chat1",
      participant: {
        name: "Sarah Johnson, Esq.",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        status: "online"
      },
      lastMessage: "I've reviewed the initial draft of your contract and have some suggestions for improving the liability clauses.",
      timestamp: "10:23 AM",
      unread: 2,
      service: "Legal Contract Review"
    },
    {
      id: "chat2",
      participant: {
        name: "Michael Chen, CPA",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        status: "offline"
      },
      lastMessage: "Looking forward to our tax planning session next week. Please bring your financial statements.",
      timestamp: "Yesterday",
      unread: 0,
      service: "Tax Planning Consultation"
    },
    {
      id: "chat3",
      participant: {
        name: "Melissa Rodriguez, Esq.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        status: "offline"
      },
      lastMessage: "Your trademark registration has been submitted. I'll keep you updated on its progress.",
      timestamp: "Apr 15",
      unread: 0,
      service: "Trademark Registration"
    }
  ];
  
  // Mock messages for the selected chat
  const getChatMessages = (chatId) => {
    if (chatId === "chat1") {
      return [
        {
          id: "msg1",
          sender: "Sarah Johnson, Esq.",
          content: "Hello John! I've received your contract and will start reviewing it right away.",
          timestamp: "April 20, 10:05 AM",
          isCurrentUser: false
        },
        {
          id: "msg2",
          sender: "You",
          content: "Thank you, Sarah! I'm particularly concerned about the liability section. Could you pay extra attention to that part?",
          timestamp: "April 20, 10:10 AM",
          isCurrentUser: true
        },
        {
          id: "msg3",
          sender: "Sarah Johnson, Esq.",
          content: "Of course, I'll focus on that section. Do you have any specific concerns about the liability clauses?",
          timestamp: "April 20, 10:15 AM",
          isCurrentUser: false
        },
        {
          id: "msg4",
          sender: "You",
          content: "Yes, I'm worried that the current language might expose my business to excessive risk. I'd like to make sure we're protected while still being fair to our clients.",
          timestamp: "April 20, 10:18 AM",
          isCurrentUser: true
        },
        {
          id: "msg5",
          sender: "Sarah Johnson, Esq.",
          content: "I understand your concern. I'll propose some alternative language that better balances protection for your business while maintaining client relationships. I'll also check if there are any industry-standard clauses that might be appropriate in your case.",
          timestamp: "April 20, 10:23 AM",
          isCurrentUser: false
        },
        {
          id: "msg6",
          sender: "Sarah Johnson, Esq.",
          content: "I've reviewed the initial draft of your contract and have some suggestions for improving the liability clauses. Would you like me to send you a marked-up version with my proposed changes?",
          timestamp: "Today, 10:23 AM",
          isCurrentUser: false
        }
      ];
    } else if (chatId === "chat2") {
      return [
        {
          id: "msg1",
          sender: "Michael Chen, CPA",
          content: "Hi John, I'm preparing for our tax planning session. I'll need your income statements and expense reports for the last fiscal year.",
          timestamp: "April 18, 2:30 PM",
          isCurrentUser: false
        },
        {
          id: "msg2",
          sender: "You",
          content: "Hello Michael, I'll gather those documents and send them to you before our meeting.",
          timestamp: "April 18, 3:15 PM",
          isCurrentUser: true
        },
        {
          id: "msg3",
          sender: "Michael Chen, CPA",
          content: "Great! Also, if you have any specific tax concerns or questions, please let me know in advance so I can prepare accordingly.",
          timestamp: "April 18, 3:20 PM",
          isCurrentUser: false
        },
        {
          id: "msg4",
          sender: "You",
          content: "I'm particularly interested in discussing potential deductions for my home office and recent business equipment purchases.",
          timestamp: "April 18, 4:05 PM",
          isCurrentUser: true
        },
        {
          id: "msg5",
          sender: "Michael Chen, CPA",
          content: "Looking forward to our tax planning session next week. Please bring your financial statements.",
          timestamp: "Yesterday, 11:45 AM",
          isCurrentUser: false
        }
      ];
    } else {
      return [
        {
          id: "msg1",
          sender: "Melissa Rodriguez, Esq.",
          content: "Hello John, I've received your trademark application materials. Everything looks in order to proceed with the registration.",
          timestamp: "April 12, 9:20 AM",
          isCurrentUser: false
        },
        {
          id: "msg2",
          sender: "You",
          content: "That's great news! How long do you expect the process to take?",
          timestamp: "April 12, 10:30 AM",
          isCurrentUser: true
        },
        {
          id: "msg3",
          sender: "Melissa Rodriguez, Esq.",
          content: "The trademark registration process typically takes 6-8 months from filing to registration, assuming there are no objections or office actions from the trademark office.",
          timestamp: "April 12, 11:15 AM",
          isCurrentUser: false
        },
        {
          id: "msg4",
          sender: "Melissa Rodriguez, Esq.",
          content: "Your trademark registration has been submitted. I'll keep you updated on its progress.",
          timestamp: "April 15, 3:30 PM",
          isCurrentUser: false
        }
      ];
    }
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    // In a real app, this would send the message to an API
    console.log("Sending message:", newMessage);
    
    // Clear the input
    setNewMessage("");
  };
  
  const currentChat = chatList.find(chat => chat.id === selectedChat);
  const messages = getChatMessages(selectedChat);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex">
        {/* Chat Layout */}
        <div className="w-full h-[calc(100vh-64px-64px)] flex">
          {/* Chat List Sidebar */}
          <div className="w-full sm:w-80 md:w-96 border-r bg-white">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold mb-2">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search messages" 
                  className="pl-9"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-73px)]">
              {chatList.map((chat) => (
                <div 
                  key={chat.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer border-b ${
                    selectedChat === chat.id ? "bg-gray-50" : ""
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={chat.participant.avatar} alt={chat.participant.name} />
                        <AvatarFallback>{chat.participant.name[0]}</AvatarFallback>
                      </Avatar>
                      <span 
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white ${
                          chat.participant.status === "online" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{chat.participant.name}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{chat.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-gray-500 mt-1">{chat.service}</p>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-lawpurple-600 text-white text-xs font-medium mt-1">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Content */}
          <div className="hidden sm:flex flex-col flex-1 bg-gray-50">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 bg-white border-b flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={currentChat.participant.avatar} alt={currentChat.participant.name} />
                      <AvatarFallback>{currentChat.participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{currentChat.participant.name}</h3>
                      <p className="text-xs text-gray-500">{currentChat.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start gap-3 max-w-[80%]">
                        {!message.isCurrentUser && (
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarImage src={currentChat.participant.avatar} alt={message.sender} />
                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div 
                            className={`p-3 rounded-lg ${
                              message.isCurrentUser 
                                ? "bg-lawpurple-600 text-white" 
                                : "bg-white text-gray-800"
                            }`}
                          >
                            <p>{message.content}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="p-4 bg-white border-t">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <Button type="button" variant="ghost" size="icon">
                      <PaperclipIcon className="h-5 w-5" />
                    </Button>
                    <Input 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..." 
                      className="flex-1"
                    />
                    <Button 
                      type="submit" 
                      className="bg-lawpurple-600 hover:bg-lawpurple-700"
                      disabled={!newMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center text-gray-500">
                <div>
                  <p className="mb-2">Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Service Details Sidebar - Hidden on smaller screens */}
          <div className="hidden lg:block w-80 border-l bg-white">
            {selectedChat && (
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-4">Service Details</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">PROFESSIONAL</h4>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={currentChat.participant.avatar} alt={currentChat.participant.name} />
                      <AvatarFallback>{currentChat.participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{currentChat.participant.name}</p>
                      <p className="text-sm text-gray-500">Response time: ~2 hours</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">SERVICE</h4>
                  <p className="font-medium mb-2">{currentChat.service}</p>
                  {currentChat.id === "chat1" && (
                    <div className="text-sm text-gray-600">
                      <p className="mb-1">Professional review of your legal contract by an experienced attorney.</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Started: April 20, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Due: April 27, 2023</span>
                      </div>
                    </div>
                  )}
                  {currentChat.id === "chat2" && (
                    <div className="text-sm text-gray-600">
                      <p className="mb-1">Professional tax planning guidance for individuals and small businesses.</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Scheduled: April 25, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>1:00 PM - 2:00 PM</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">ACTIONS</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9h18M3 15h18" />
                        <path d="M12 3v18" />
                      </svg>
                      View Order Details
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MessagingPage;
