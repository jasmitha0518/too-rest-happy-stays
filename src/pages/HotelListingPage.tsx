import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/store/useAppStore';
import { hotels, searchHotels } from '@/data/hotels';
import Navbar from '@/components/Navbar';
import { MapPin, Star, Filter, X } from 'lucide-react';

const HotelListingPage = () => {
  const navigate = useNavigate();
  const { searchParams, isAuthenticated } = useAppStore();
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredHotels = useMemo(() => {
    let result = searchParams?.location
      ? searchHotels(searchParams.location)
      : hotels;

    if (filters.type) {
      result = result.filter((h) => h.type === filters.type);
    }
    if (filters.minPrice) {
      result = result.filter((h) => h.pricePerNight >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((h) => h.pricePerNight <= parseInt(filters.maxPrice));
    }
    if (filters.minRating) {
      result = result.filter((h) => h.rating >= parseFloat(filters.minRating));
    }

    return result;
  }, [searchParams, filters]);

  const handleViewDetails = (hotelId: string) => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    navigate(`/hotel/${hotelId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-display font-bold text-foreground mb-2">
                {searchParams?.location
                  ? `Hotels in ${searchParams.location}`
                  : 'All Hotels'}
              </h1>
              <p className="text-muted-foreground">
                {filteredHotels.length} hotels found
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`
                fixed md:relative inset-0 z-40 md:z-auto bg-background md:bg-transparent
                w-full md:w-72 shrink-0 p-4 md:p-0
                transform transition-transform duration-300
                ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              `}
            >
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-xl font-semibold">Filters</h3>
                    <button
                      className="md:hidden"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Hotel Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['Budget', 'Luxury', 'Resort'].map((type) => (
                          <button
                            key={type}
                            onClick={() =>
                              setFilters({ ...filters, type: filters.type === type ? '' : type })
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              filters.type === type
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Price Range
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={filters.minPrice}
                          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                        />
                        <Input
                          type="number"
                          placeholder="Max"
                          value={filters.maxPrice}
                          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Minimum Rating
                      </label>
                      <div className="flex gap-2">
                        {[4, 4.5, 4.8].map((rating) => (
                          <button
                            key={rating}
                            onClick={() =>
                              setFilters({
                                ...filters,
                                minRating: filters.minRating === rating.toString() ? '' : rating.toString(),
                              })
                            }
                            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              filters.minRating === rating.toString()
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                            }`}
                          >
                            <Star className="w-3 h-3 fill-current" />
                            {rating}+
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setFilters({ type: '', minPrice: '', maxPrice: '', minRating: '' })}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Hotel Grid */}
            <main className="flex-1">
              {filteredHotels.length === 0 ? (
                <Card className="p-12 text-center">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    No hotels found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters({ type: '', minPrice: '', maxPrice: '', minRating: '' })}
                  >
                    Clear Filters
                  </Button>
                </Card>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredHotels.map((hotel) => (
                    <Card
                      key={hotel.id}
                      className="overflow-hidden hover-lift cursor-pointer group"
                      onClick={() => handleViewDetails(hotel.id)}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                hotel.type === 'Luxury'
                                  ? 'bg-gold text-gold-foreground'
                                  : hotel.type === 'Resort'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-secondary text-secondary-foreground'
                              }`}
                            >
                              {hotel.type}
                            </span>
                          </div>
                        </div>
                        <CardContent className="flex-1 p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {hotel.name}
                            </h3>
                            <div className="flex items-center gap-1 text-gold shrink-0">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="font-semibold">{hotel.rating}</span>
                              <span className="text-muted-foreground text-sm">
                                ({hotel.reviews})
                              </span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {hotel.location}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.slice(0, 3).map((amenity) => (
                              <span
                                key={amenity}
                                className="px-2 py-1 bg-secondary rounded text-xs text-secondary-foreground"
                              >
                                {amenity}
                              </span>
                            ))}
                            {hotel.amenities.length > 3 && (
                              <span className="px-2 py-1 bg-secondary rounded text-xs text-secondary-foreground">
                                +{hotel.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-primary">
                                ${hotel.pricePerNight}
                              </span>
                              <span className="text-muted-foreground text-sm">/night</span>
                            </div>
                            <Button variant="hero" size="sm">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Overlay for mobile filters */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-foreground/50 z-30 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}
    </div>
  );
};

export default HotelListingPage;
