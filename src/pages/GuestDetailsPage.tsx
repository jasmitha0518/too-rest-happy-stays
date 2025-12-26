import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAppStore } from '@/store/useAppStore';
import Navbar from '@/components/Navbar';
import { User, Phone, Mail, ArrowRight } from 'lucide-react';

const GuestDetailsPage = () => {
  const navigate = useNavigate();
  const { currentBooking, updateCurrentBooking, isAuthenticated, user } = useAppStore();
  const [guestDetails, setGuestDetails] = useState({
    name: user?.name || '',
    age: '',
    gender: '',
    mobile: '',
    email: user?.email || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isAuthenticated || !currentBooking?.hotelId) {
      navigate('/');
    }
  }, [isAuthenticated, currentBooking, navigate]);

  if (!currentBooking) {
    return null;
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!guestDetails.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!guestDetails.age || parseInt(guestDetails.age) < 18) {
      newErrors.age = 'Age must be 18 or above';
    }
    if (!guestDetails.gender) {
      newErrors.gender = 'Please select gender';
    }
    if (!guestDetails.mobile || !/^\d{10}$/.test(guestDetails.mobile)) {
      newErrors.mobile = 'Valid 10-digit mobile number required';
    }
    if (!guestDetails.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestDetails.email)) {
      newErrors.email = 'Valid email required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateForm()) return;

    updateCurrentBooking({
      guestDetails: {
        name: guestDetails.name,
        age: parseInt(guestDetails.age),
        gender: guestDetails.gender,
        mobile: guestDetails.mobile,
        email: guestDetails.email,
      },
    });

    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">Guest Details</h1>
            <p className="text-muted-foreground">Please provide the primary guest information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Guest Form */}
            <div className="lg:col-span-3">
              <Card className="animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Primary Guest Information</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Enter full name"
                          value={guestDetails.name}
                          onChange={(e) => setGuestDetails({ ...guestDetails, name: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Age"
                          min="18"
                          value={guestDetails.age}
                          onChange={(e) => setGuestDetails({ ...guestDetails, age: e.target.value })}
                        />
                        {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <div className="flex gap-2">
                          {['Male', 'Female', 'Other'].map((gender) => (
                            <button
                              key={gender}
                              type="button"
                              onClick={() => setGuestDetails({ ...guestDetails, gender })}
                              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                guestDetails.gender === gender
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                              }`}
                            >
                              {gender}
                            </button>
                          ))}
                        </div>
                        {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={guestDetails.mobile}
                          onChange={(e) => setGuestDetails({ ...guestDetails, mobile: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                      {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={guestDetails.email}
                          onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-2">
              <Card className="sticky top-24 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Booking Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold text-foreground">{currentBooking.hotelName}</p>
                      <p className="text-muted-foreground text-sm">{currentBooking.hotelAddress}</p>
                    </div>
                    
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between text-foreground">
                        <span>Room Type</span>
                        <span>{currentBooking.roomType}</span>
                      </div>
                      <div className="flex justify-between text-foreground">
                        <span>Check-in</span>
                        <span>{currentBooking.checkIn}</span>
                      </div>
                      <div className="flex justify-between text-foreground">
                        <span>Check-out</span>
                        <span>{currentBooking.checkOut}</span>
                      </div>
                      <div className="flex justify-between text-foreground">
                        <span>Rooms</span>
                        <span>{currentBooking.rooms}</span>
                      </div>
                      <div className="flex justify-between text-foreground">
                        <span>Guests</span>
                        <span>{currentBooking.guests}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 -mx-6 px-6 py-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-display text-xl font-semibold text-foreground">Total</span>
                      <span className="text-3xl font-bold text-primary">₹{currentBooking.totalAmount?.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full"
                    size="lg"
                    onClick={handleContinue}
                  >
                    Continue to Payment
                    <ArrowRight className="w-5 h-5" />
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

export default GuestDetailsPage;
