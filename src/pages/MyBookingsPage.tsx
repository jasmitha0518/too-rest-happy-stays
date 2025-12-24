import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/store/useAppStore';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { MapPin, Calendar, XCircle, History, Hotel } from 'lucide-react';

const MyBookingsPage = () => {
  const navigate = useNavigate();
  const { bookings, cancelBooking, isAuthenticated } = useAppStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  const activeBookings = bookings.filter((b) => b.status === 'confirmed');
  const pastBookings = bookings.filter((b) => b.status !== 'confirmed');

  const handleCancelBooking = (bookingId: string) => {
    cancelBooking(bookingId);
    toast.success('Booking cancelled successfully');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/10 text-success';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive';
      case 'completed':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">My Bookings</h1>
            <p className="text-muted-foreground">View and manage your hotel reservations</p>
          </div>

          {bookings.length === 0 ? (
            <Card className="animate-fade-in-up">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-6">
                  <Hotel className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">No Bookings Yet</h3>
                <p className="text-muted-foreground mb-6">Start exploring hotels and make your first booking!</p>
                <Button variant="hero" onClick={() => navigate('/hotels')}>
                  Explore Hotels
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Active Bookings */}
              {activeBookings.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Upcoming Stays
                  </h2>
                  <div className="space-y-4">
                    {activeBookings.map((booking) => (
                      <Card key={booking.id} className="overflow-hidden hover-lift animate-fade-in-up">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <img
                              src={booking.hotelImage}
                              alt={booking.hotelName}
                              className="w-full sm:w-48 h-40 object-cover"
                            />
                            <div className="flex-1 p-6">
                              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                                    {booking.hotelName}
                                  </h3>
                                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {booking.hotelAddress}
                                  </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-6 mb-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Booking ID</p>
                                  <p className="font-mono font-semibold text-foreground">{booking.id}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Check-in</p>
                                  <p className="font-semibold text-foreground">{booking.checkIn}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Check-out</p>
                                  <p className="font-semibold text-foreground">{booking.checkOut}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Total</p>
                                  <p className="font-bold text-primary">${booking.totalAmount.toFixed(2)}</p>
                                </div>
                              </div>

                              <div className="flex gap-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => navigate(`/booking-confirmation/${booking.id}`)}
                                >
                                  View Details
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                  onClick={() => handleCancelBooking(booking.id)}
                                >
                                  <XCircle className="w-4 h-4 mr-1" />
                                  Cancel Booking
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Past Bookings */}
              {pastBookings.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <History className="w-6 h-6 text-muted-foreground" />
                    Booking History
                  </h2>
                  <div className="space-y-4">
                    {pastBookings.map((booking) => (
                      <Card key={booking.id} className="overflow-hidden opacity-80 animate-fade-in-up">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <img
                              src={booking.hotelImage}
                              alt={booking.hotelName}
                              className="w-full sm:w-40 h-32 object-cover grayscale"
                            />
                            <div className="flex-1 p-5">
                              <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                                    {booking.hotelName}
                                  </h3>
                                  <p className="text-muted-foreground text-sm">
                                    {booking.checkIn} - {booking.checkOut}
                                  </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
