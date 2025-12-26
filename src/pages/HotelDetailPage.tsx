import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/store/useAppStore';
import { getHotelById } from '@/data/hotels';
import Navbar from '@/components/Navbar';
import { MapPin, Star, Clock, XCircle, Check, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const HotelDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, searchParams, setCurrentBooking } = useAppStore();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hotel = getHotelById(id || '');

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Hotel Not Found</h1>
          <Button variant="hero" onClick={() => navigate('/hotels')}>
            Back to Hotels
          </Button>
        </div>
      </div>
    );
  }

  const handleSelectRoom = (roomType: string, price: number) => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    setCurrentBooking({
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelAddress: hotel.location,
      hotelImage: hotel.image,
      roomType,
      checkIn: searchParams?.checkIn || '',
      checkOut: searchParams?.checkOut || '',
      guests: searchParams?.guests || 2,
      rooms: 1,
    });

    navigate('/room-selection');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Image Gallery */}
        <div className="relative h-[60vh] min-h-[400px] bg-muted overflow-hidden">
          <img
            src={hotel.images[activeImageIndex]}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay opacity-30" />
          
          {/* Navigation arrows */}
          <button
            onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : hotel.images.length - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveImageIndex((prev) => (prev < hotel.images.length - 1 ? prev + 1 : 0))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {hotel.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIndex === index ? 'border-primary scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hotel Info Card */}
              <Card className="animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                        hotel.type === 'Luxury' ? 'bg-gold text-gold-foreground' :
                        hotel.type === 'Resort' ? 'bg-primary text-primary-foreground' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {hotel.type}
                      </span>
                      <h1 className="text-4xl font-display font-bold text-foreground mb-2">{hotel.name}</h1>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {hotel.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-xl">
                      <Star className="w-6 h-6 text-gold fill-current" />
                      <span className="text-2xl font-bold text-foreground">{hotel.rating}</span>
                      <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 text-lg leading-relaxed mb-8">{hotel.description}</p>

                  {/* Amenities */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">Amenities</h3>
                    <div className="flex flex-wrap gap-3">
                      {hotel.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-foreground rounded-lg"
                        >
                          <Check className="w-4 h-4 text-success" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Room Types */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Available Rooms</h3>
                  <div className="space-y-4">
                    {hotel.rooms.map((room) => (
                      <div
                        key={room.type}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-secondary/50 rounded-xl gap-4"
                      >
                        <div>
                          <h4 className="font-display text-xl font-semibold text-foreground mb-1">{room.type} Room</h4>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Up to {room.capacity} guests • {room.available} available
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-2xl font-bold text-primary">₹{room.price}</span>
                            <span className="text-muted-foreground">/night</span>
                          </div>
                          <Button
                            variant="hero"
                            onClick={() => handleSelectRoom(room.type, room.price)}
                            disabled={room.available === 0}
                          >
                            Select Room
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Guest Reviews</h3>
                  <div className="space-y-6">
                    {[
                      { name: 'John D.', rating: 5, comment: 'Amazing experience! The service was impeccable and the views were breathtaking.' },
                      { name: 'Sarah M.', rating: 4, comment: 'Great location and comfortable rooms. Would definitely recommend to friends and family.' },
                      { name: 'Michael K.', rating: 5, comment: 'Perfect getaway. The staff went above and beyond to make our stay memorable.' },
                    ].map((review, index) => (
                      <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="font-semibold text-primary">{review.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{review.name}</p>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-current' : 'text-muted'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground/80">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Policies Card */}
              <Card className="sticky top-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Hotel Policies</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Check-in Time</p>
                        <p className="text-muted-foreground">{hotel.policies.checkIn}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Check-out Time</p>
                        <p className="text-muted-foreground">{hotel.policies.checkOut}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Cancellation</p>
                        <p className="text-muted-foreground">{hotel.policies.cancellation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Summary */}
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Starting From</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-primary">₹{hotel.pricePerNight}</span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                  <Button variant="hero" className="w-full" size="lg" onClick={() => handleSelectRoom(hotel.rooms[0].type, hotel.rooms[0].price)}>
                    Book Now
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

export default HotelDetailPage;
