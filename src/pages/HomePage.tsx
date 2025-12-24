import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/store/useAppStore';
import { hotels } from '@/data/hotels';
import Navbar from '@/components/Navbar';
import heroBg from '@/assets/hero-bg.jpg';
import { MapPin, Calendar, Users, Search, Star, Percent, ChevronRight, Building2, Waves, Mountain } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setSearchParams } = useAppStore();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
  });

  const handleSearch = () => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    setSearchParams(searchData);
    navigate('/hotels');
  };

  const offers = [
    { title: 'Early Bird Special', discount: '25% OFF', description: 'Book 30 days in advance', icon: Calendar },
    { title: 'Weekend Getaway', discount: '20% OFF', description: 'Fri-Sun stays', icon: Percent },
    { title: 'Family Package', discount: '15% OFF', description: '4+ guests discount', icon: Users },
  ];

  const destinations = [
    { name: 'Miami', hotels: 12, icon: Waves },
    { name: 'London', hotels: 8, icon: Building2 },
    { name: 'Swiss Alps', hotels: 6, icon: Mountain },
    { name: 'Maldives', hotels: 10, icon: Waves },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Find Your Perfect
            <span className="block text-gradient bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent">
              Stay
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover amazing hotels worldwide with exclusive deals and unforgettable experiences
          </p>

          {/* Search Card */}
          <Card className="max-w-5xl mx-auto glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location / City
                  </label>
                  <Input
                    placeholder="Where are you going?"
                    value={searchData.location}
                    onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Check-in
                  </label>
                  <Input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Check-out
                  </label>
                  <Input
                    type="date"
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4" /> Guests / Rooms
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      min="1"
                      placeholder="Guests"
                      value={searchData.guests}
                      onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) || 1 })}
                      className="w-1/2"
                    />
                    <Input
                      type="number"
                      min="1"
                      placeholder="Rooms"
                      value={searchData.rooms}
                      onChange={(e) => setSearchData({ ...searchData, rooms: parseInt(e.target.value) || 1 })}
                      className="w-1/2"
                    />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button variant="hero" size="xl" className="w-full" onClick={handleSearch}>
                    <Search className="w-5 h-5" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Exclusive Offers</h2>
            <p className="text-lg text-muted-foreground">Save big on your next adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="hover-lift overflow-hidden group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <offer.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">{offer.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{offer.description}</p>
                      <span className="inline-block px-3 py-1 bg-gold/20 text-gold-foreground rounded-full text-sm font-bold">
                        {offer.discount}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">Popular Destinations</h2>
              <p className="text-lg text-muted-foreground">Explore trending locations</p>
            </div>
            <Button variant="outline" onClick={() => { setSearchParams(null); navigate('/hotels'); }}>
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest, index) => (
              <Card
                key={index}
                className="hover-lift cursor-pointer group overflow-hidden"
                onClick={() => {
                  setSearchParams({ location: dest.name, checkIn: '', checkOut: '', guests: 2, rooms: 1 });
                  navigate('/hotels');
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <dest.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{dest.name}</h3>
                  <p className="text-muted-foreground text-sm">{dest.hotels} Hotels</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Featured Hotels</h2>
            <p className="text-lg text-muted-foreground">Handpicked for exceptional experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.slice(0, 3).map((hotel) => (
              <Card
                key={hotel.id}
                className="overflow-hidden hover-lift cursor-pointer group"
                onClick={() => navigate(`/hotel/${hotel.id}`)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      hotel.type === 'Luxury' ? 'bg-gold text-gold-foreground' :
                      hotel.type === 'Resort' ? 'bg-primary text-primary-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      {hotel.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${hotel.pricePerNight}</span>
                      <span className="text-muted-foreground text-sm">/night</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">TooRest</h3>
              <p className="text-primary-foreground/70">Your trusted partner for unforgettable hotel experiences worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>support@toorest.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/50">
            <p>&copy; 2024 TooRest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
