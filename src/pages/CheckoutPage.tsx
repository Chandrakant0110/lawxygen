
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Check, CreditCard, Info, Lock, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import EnhancedLoadingSpinner from "@/components/common/EnhancedLoadingSpinner";

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Add error state
  const [error, setError] = useState<string | null>(null);
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  
  // Mock service data based on the id parameter
  const service = {
    id: id || "default",
    title: "Legal Contract Review",
    provider: "Sarah Johnson, Esq.",
    providerAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
    basePrice: 299,
    description: "Professional review of your legal contract by an experienced attorney.",
    estimatedDelivery: "3-5 business days"
  };
  
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  
  // State for credit card form
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  
  // State for form validation
  const [formErrors, setFormErrors] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: ""
  });
  
  // State for additional options
  const [options, setOptions] = useState({
    expeditedDelivery: false,
    additionalRevision: false
  });
  
  const handleOptionChange = (option: string) => {
    setOptions({
      ...options,
      [option]: !options[option as keyof typeof options]
    });
  };
  
  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  };
  
  const calculateTotal = () => {
    let total = service.basePrice;
    if (options.expeditedDelivery) total += 99;
    if (options.additionalRevision) total += 49;
    return total;
  };
  
  const validateForm = () => {
    const errors = {
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      address: ""
    };
    let isValid = true;
    
    if (!cardInfo.cardNumber) {
      errors.cardNumber = "Card number is required";
      isValid = false;
    }
    
    if (!cardInfo.cardName) {
      errors.cardName = "Cardholder name is required";
      isValid = false;
    }
    
    if (!cardInfo.expiryDate) {
      errors.expiryDate = "Expiry date is required";
      isValid = false;
    }
    
    if (!cardInfo.cvv) {
      errors.cvv = "CVV is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setError("Please complete all required fields");
      return;
    }
    
    setError(null);
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment Successful", {
        description: "Your payment has been processed. You'll receive a confirmation email shortly.",
      });
      
      // Redirect to dashboard after successful payment
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 2000);
  };
  
  // Loading state while fetching service details
  if (isServiceLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <EnhancedLoadingSpinner size="large" message="Loading checkout details..." />
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Payment Details</CardTitle>
                  <CardDescription>Complete your payment to hire this service</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {/* Payment Method Selection */}
                    <div className="mb-6">
                      <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                      <RadioGroup 
                        value={paymentMethod} 
                        onValueChange={setPaymentMethod}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center">
                          <RadioGroupItem id="credit-card" value="credit-card" />
                          <Label htmlFor="credit-card" className="ml-2 flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                            Credit / Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center opacity-50">
                          <RadioGroupItem id="paypal" value="paypal" disabled />
                          <Label htmlFor="paypal" className="ml-2 flex items-center">
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                              <path d="M7.5 18H2L3 7.5L7 9L7.5 18Z" fill="#009EE3" />
                              <path d="M15.5 15.5H10L9.5 9H16L15.5 15.5Z" fill="#113984" />
                              <path d="M23 7.5H16L15.5 15.5L19 13.5L23 7.5Z" fill="#009EE3" />
                            </svg>
                            PayPal (Coming Soon)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    {/* Credit Card Form */}
                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            id="cardNumber"
                            name="cardNumber"
                            value={cardInfo.cardNumber}
                            onChange={handleCardInfoChange}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input 
                            id="cardName"
                            name="cardName"
                            value={cardInfo.cardName}
                            onChange={handleCardInfoChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input 
                              id="expiryDate"
                              name="expiryDate"
                              value={cardInfo.expiryDate}
                              onChange={handleCardInfoChange}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              id="cvv"
                              name="cvv"
                              value={cardInfo.cvv}
                              onChange={handleCardInfoChange}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Lock className="h-4 w-4 mr-1" />
                          <span>Your payment information is secured with 256-bit encryption</span>
                        </div>
                      </div>
                    )}
                    
                    <Separator className="my-6" />
                    
                    {/* Billing Address - Simplified for example */}
                    <div className="mb-6">
                      <Label className="text-base font-medium mb-3 block">Billing Address</Label>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="billingAddress">Address</Label>
                          <Input id="billingAddress" placeholder="123 Main St, Apt 4B" required />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="New York" required />
                          </div>
                          <div>
                            <Label htmlFor="zipCode">Zip Code</Label>
                            <Input id="zipCode" placeholder="10001" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-lawpurple-600 hover:bg-lawpurple-700" 
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      `Complete Payment: $${calculateTotal()}`
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Service Details */}
                    <div className="pb-4 border-b">
                      <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                      <div className="flex items-center mb-2">
                        <img 
                          src={service.providerAvatar} 
                          alt={service.provider} 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-600">{service.provider}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Estimated delivery: {service.estimatedDelivery}</span>
                      </div>
                    </div>
                    
                    {/* Additional Options */}
                    <div className="pb-4 border-b">
                      <h3 className="font-medium mb-3">Additional Options</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="expeditedDelivery"
                              checked={options.expeditedDelivery}
                              onChange={() => handleOptionChange('expeditedDelivery')}
                              className="h-4 w-4 rounded border-gray-300 text-lawpurple-600 focus:ring-lawpurple-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="expeditedDelivery" className="font-medium text-gray-700">
                              Expedited Delivery (+$99)
                            </label>
                            <p className="text-gray-500">Receive your document within 24 hours</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="additionalRevision"
                              checked={options.additionalRevision}
                              onChange={() => handleOptionChange('additionalRevision')}
                              className="h-4 w-4 rounded border-gray-300 text-lawpurple-600 focus:ring-lawpurple-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="additionalRevision" className="font-medium text-gray-700">
                              Additional Revision (+$49)
                            </label>
                            <p className="text-gray-500">Get an extra round of revisions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Breakdown */}
                    <div className="pb-4 border-b">
                      <h3 className="font-medium mb-3">Price Breakdown</h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Base Price</span>
                          <span>${service.basePrice}</span>
                        </div>
                        
                        {options.expeditedDelivery && (
                          <div className="flex justify-between">
                            <span>Expedited Delivery</span>
                            <span>$99</span>
                          </div>
                        )}
                        
                        {options.additionalRevision && (
                          <div className="flex justify-between">
                            <span>Additional Revision</span>
                            <span>$49</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between">
                          <span>Service Fee</span>
                          <span>Included</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div>
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 rounded-b-lg">
                  <div className="w-full text-sm text-gray-600 flex items-start">
                    <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      By completing this purchase, you agree to our <a href="#" className="text-lawpurple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-lawpurple-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
