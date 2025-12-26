import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/store/useAppStore';
import Navbar from '@/components/Navbar';
import { CheckCircle2, MapPin, Calendar, Users, Mail, Phone, Download, Home } from 'lucide-react';

const BookingConfirmationPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const { bookings, isAuthenticated } = useAppStore();

  const booking = bookings.find((b) => b.id === bookingId);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  if (!booking) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Booking Not Found</h1>
          <Button variant="hero" onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-14 h-14 text-success" />
            </div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your booking has been successfully confirmed
            </p>
            <p className="text-muted-foreground">
              A confirmation email has been sent to <span className="text-foreground font-medium">{booking.guestDetails.email}</span>
            </p>
          </div>

          {/* Booking Details Card */}
          <Card className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <img
                  src={booking.hotelImage}
                  alt={booking.hotelName}
                  className="w-full sm:w-40 h-32 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground mb-1">{booking.hotelName}</h2>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {booking.hotelAddress}
                      </p>
                    </div>
                    <span className="shrink-0 px-4 py-1.5 bg-success/10 text-success rounded-full text-sm font-semibold">
                      Confirmed
                    </span>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 inline-block">
                    <span className="text-sm text-muted-foreground">Booking ID: </span>
                    <span className="font-mono font-bold text-foreground">{booking.id}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Check-in</p>
                      <p className="font-semibold text-foreground">{booking.checkIn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Check-out</p>
                      <p className="font-semibold text-foreground">{booking.checkOut}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Room Details</p>
                      <p className="font-semibold text-foreground">{booking.roomType} × {booking.rooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Guests</p>
                      <p className="font-semibold text-foreground">{booking.guests} Guest(s)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Guest Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">{booking.guestDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age / Gender</p>
                    <p className="font-medium text-foreground">{booking.guestDetails.age} years, {booking.guestDetails.gender}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <p className="font-medium text-foreground">{booking.guestDetails.mobile}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <p className="font-medium text-foreground">{booking.guestDetails.email}</p>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-primary/5 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-foreground">Payment Status</span>
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-display text-xl font-semibold text-foreground">Total Amount</span>
                  <span className="text-3xl font-bold text-primary">₹{booking.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="outline" className="flex-1" size="lg">
              <Download className="w-5 h-5" />
              Download Invoice
            </Button>
            <Button variant="hero" className="flex-1" size="lg" asChild>
              <Link to="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Confirmation Notice */}
          <div className="mt-8 text-center text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              A confirmation email/SMS has been sent with your booking details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
