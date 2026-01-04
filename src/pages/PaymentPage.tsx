import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAppStore } from '@/store/useAppStore';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { CreditCard, Smartphone, Lock, Shield } from 'lucide-react';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { currentBooking, addBooking, isAuthenticated } = useAppStore();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !currentBooking?.guestDetails) {
      navigate('/');
    }
  }, [isAuthenticated, currentBooking, navigate]);

  if (!currentBooking) {
    return null;
  }

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'gpay', label: 'Google Pay', icon: Smartphone },
    { id: 'phonepay', label: 'PhonePe', icon: Smartphone },
    { id: 'paytm', label: 'Paytm', icon: Smartphone },
  ];

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const booking = {
      id: `BK${Date.now()}`,
      hotelId: currentBooking.hotelId!,
      hotelName: currentBooking.hotelName!,
      hotelAddress: currentBooking.hotelAddress!,
      hotelImage: currentBooking.hotelImage!,
      checkIn: currentBooking.checkIn!,
      checkOut: currentBooking.checkOut!,
      guests: currentBooking.guests!,
      rooms: currentBooking.rooms!,
      roomType: currentBooking.roomType!,
      totalAmount: currentBooking.totalAmount!,
      status: 'confirmed' as const,
      guestDetails: currentBooking.guestDetails!,
      paymentMethod: paymentMethod,
      createdAt: new Date().toISOString(),
    };

    addBooking(booking);
    toast.success('Payment successful!');
    navigate(`/booking-confirmation/${booking.id}`);
  };

  const tax = (currentBooking.totalAmount || 0) * 0.12 / 1.12;
  const roomCost = (currentBooking.totalAmount || 0) - tax;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">Payment</h1>
            <p className="text-muted-foreground">Complete your booking with secure payment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              {/* Payment Method Selection */}
              <Card className="animate-fade-in-up">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Select Payment Method</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <method.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${paymentMethod === method.id ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`font-medium text-sm sm:text-base ${paymentMethod === method.id ? 'text-primary' : 'text-foreground'}`}>
                          {method.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Card Details Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={cardDetails.number}
                            onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <div className="relative">
                            <Input
                              id="cvv"
                              type="password"
                              placeholder="•••"
                              maxLength={4}
                              value={cardDetails.cvv}
                              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                            />
                            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                        />
                      </div>
                    </div>
                  )}

                  {/* UPI Payment */}
                  {paymentMethod !== 'card' && (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Smartphone className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                        Pay with {paymentMethods.find((m) => m.id === paymentMethod)?.label}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        You'll be redirected to complete the payment after clicking "Pay Now"
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Secure Payment</h4>
                      <p className="text-muted-foreground text-sm">
                        Your payment information is encrypted and secure. We never store your card details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-2">
              <Card className="sticky top-24 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Price Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold text-foreground">{currentBooking.hotelName}</p>
                      <p className="text-muted-foreground text-sm">{currentBooking.roomType} Room × {currentBooking.rooms}</p>
                    </div>
                    
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between text-foreground">
                        <span>Room Cost</span>
                        <span>₹{roomCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Taxes & Fees</span>
                        <span>₹{tax.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 -mx-6 px-6 py-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-display text-xl font-semibold text-foreground">Total Amount</span>
                      <span className="text-3xl font-bold text-primary">₹{currentBooking.totalAmount?.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full"
                    size="lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Pay Now
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
