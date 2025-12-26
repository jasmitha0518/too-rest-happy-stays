import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAppStore } from '@/store/useAppStore';
import { getHotelById } from '@/data/hotels';
import Navbar from '@/components/Navbar';
import { Calendar, Minus, Plus, ArrowRight } from 'lucide-react';

const RoomSelectionPage = () => {
  const navigate = useNavigate();
  const { currentBooking, updateCurrentBooking, isAuthenticated } = useAppStore();
  const [rooms, setRooms] = useState(currentBooking?.rooms || 1);
  const [checkIn, setCheckIn] = useState(currentBooking?.checkIn || '');
  const [checkOut, setCheckOut] = useState(currentBooking?.checkOut || '');

  const hotel = getHotelById(currentBooking?.hotelId || '');
  const room = hotel?.rooms.find((r) => r.type === currentBooking?.roomType);

  useEffect(() => {
    if (!isAuthenticated || !currentBooking?.hotelId) {
      navigate('/');
    }
  }, [isAuthenticated, currentBooking, navigate]);

  if (!hotel || !room || !currentBooking) {
    return null;
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const pricePerRoom = room.price * nights;
  const totalPrice = pricePerRoom * rooms;
  const tax = totalPrice * 0.12;
  const grandTotal = totalPrice + tax;

  const handleContinue = () => {
    if (!checkIn || !checkOut || nights === 0) {
      return;
    }

    updateCurrentBooking({
      checkIn,
      checkOut,
      rooms,
      totalAmount: grandTotal,
    });

    navigate('/guest-details');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">Select Your Room</h1>
            <p className="text-muted-foreground">Configure your stay at {hotel.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Room Configuration */}
            <div className="lg:col-span-3 space-y-6">
              {/* Hotel Summary */}
              <Card className="animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{hotel.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{hotel.location}</p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {currentBooking.roomType} Room
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dates */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Select Dates</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Check-in Date
                      </Label>
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Check-out Date
                      </Label>
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  {nights > 0 && (
                    <p className="mt-4 text-center text-muted-foreground">
                      {nights} night{nights !== 1 ? 's' : ''} stay
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Room Count */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Number of Rooms</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{currentBooking.roomType} Room</p>
                      <p className="text-muted-foreground text-sm">₹{room.price}/night per room</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        disabled={rooms <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-2xl font-bold text-foreground w-8 text-center">{rooms}</span>
                      <button
                        onClick={() => setRooms(Math.min(room.available, rooms + 1))}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        disabled={rooms >= room.available}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-right">
                    {room.available} rooms available
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-2">
              <Card className="sticky top-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Price Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-foreground">
                      <span>Room ({currentBooking.roomType})</span>
                      <span>₹{room.price}/night</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Nights</span>
                      <span>{nights || '-'}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Rooms</span>
                      <span>× {rooms}</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax (12%)</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-primary/10 -mx-6 px-6 py-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-display text-xl font-semibold text-foreground">Total</span>
                      <span className="text-3xl font-bold text-primary">₹{grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full"
                    size="lg"
                    onClick={handleContinue}
                    disabled={nights === 0}
                  >
                    Continue Booking
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  {nights === 0 && (
                    <p className="text-sm text-destructive mt-4 text-center">
                      Please select valid check-in and check-out dates
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelectionPage;
