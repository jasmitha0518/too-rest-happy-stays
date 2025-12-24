import hotel1 from '@/assets/hotel-1.jpg';
import hotel2 from '@/assets/hotel-2.jpg';
import hotel3 from '@/assets/hotel-3.jpg';
import hotel4 from '@/assets/hotel-4.jpg';

export interface Hotel {
  id: string;
  name: string;
  location: string;
  city: string;
  image: string;
  images: string[];
  pricePerNight: number;
  rating: number;
  reviews: number;
  type: 'Budget' | 'Luxury' | 'Resort';
  description: string;
  amenities: string[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
  };
  rooms: {
    type: string;
    price: number;
    capacity: number;
    available: number;
  }[];
}

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'The Grand Palace Hotel',
    location: '123 Ocean Drive, Miami Beach',
    city: 'Miami',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 299,
    rating: 4.8,
    reviews: 2453,
    type: 'Luxury',
    description: 'Experience unparalleled luxury at The Grand Palace Hotel, where modern elegance meets timeless sophistication. Nestled along the pristine shores of Miami Beach, our hotel offers breathtaking ocean views, world-class dining, and exceptional service that will make your stay truly unforgettable.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar', 'Room Service', 'Parking', 'Beach Access'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 299, capacity: 1, available: 5 },
      { type: 'Double', price: 399, capacity: 2, available: 8 },
      { type: 'Suite', price: 699, capacity: 4, available: 3 },
    ],
  },
  {
    id: '2',
    name: 'Tropical Paradise Resort',
    location: '456 Palm Avenue, Maldives',
    city: 'Maldives',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 599,
    rating: 4.9,
    reviews: 1892,
    type: 'Resort',
    description: 'Escape to paradise at our exclusive overwater resort. Crystal-clear waters, private villas, and world-class amenities await you in this tropical haven. Perfect for romantic getaways and unforgettable family vacations.',
    amenities: ['Private Pool', 'Spa', 'Diving', 'Snorkeling', 'Fine Dining', 'Butler Service', 'Water Sports'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    rooms: [
      { type: 'Single', price: 599, capacity: 1, available: 2 },
      { type: 'Double', price: 799, capacity: 2, available: 5 },
      { type: 'Suite', price: 1299, capacity: 4, available: 2 },
    ],
  },
  {
    id: '3',
    name: 'Royal Heritage Inn',
    location: '789 Royal Street, London',
    city: 'London',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 449,
    rating: 4.7,
    reviews: 3156,
    type: 'Luxury',
    description: 'Step into a world of timeless elegance at Royal Heritage Inn. Located in the heart of London, our historic property combines classic British charm with modern luxury. Explore the city\'s iconic landmarks while enjoying our exceptional hospitality.',
    amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Concierge', 'Laundry', 'Business Center', 'Afternoon Tea'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 449, capacity: 1, available: 4 },
      { type: 'Double', price: 599, capacity: 2, available: 6 },
      { type: 'Suite', price: 899, capacity: 3, available: 2 },
    ],
  },
  {
    id: '4',
    name: 'Alpine Mountain Lodge',
    location: '321 Snow Peak Road, Swiss Alps',
    city: 'Swiss Alps',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 349,
    rating: 4.6,
    reviews: 1654,
    type: 'Resort',
    description: 'Discover the magic of the Swiss Alps at our cozy mountain lodge. Whether you\'re here for skiing, hiking, or simply to unwind, our warm hospitality and stunning alpine views will make your stay memorable.',
    amenities: ['Ski-in/Ski-out', 'Spa', 'Fireplace', 'Restaurant', 'Hot Tub', 'Ski Storage', 'Mountain Views'],
    policies: {
      checkIn: '4:00 PM',
      checkOut: '10:00 AM',
      cancellation: 'Free cancellation up to 72 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 349, capacity: 1, available: 3 },
      { type: 'Double', price: 449, capacity: 2, available: 7 },
      { type: 'Suite', price: 749, capacity: 4, available: 2 },
    ],
  },
  {
    id: '5',
    name: 'Budget Stay Express',
    location: '555 Downtown Ave, New York',
    city: 'New York',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 129,
    rating: 4.2,
    reviews: 4521,
    type: 'Budget',
    description: 'Affordable comfort in the heart of New York City. Perfect for business travelers and tourists looking for a clean, convenient, and budget-friendly accommodation option.',
    amenities: ['Free WiFi', 'Breakfast', 'Parking', '24/7 Reception', 'Laundry'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 129, capacity: 1, available: 10 },
      { type: 'Double', price: 179, capacity: 2, available: 15 },
      { type: 'Suite', price: 299, capacity: 3, available: 5 },
    ],
  },
  {
    id: '6',
    name: 'Seaside Budget Inn',
    location: '888 Coastal Road, Goa',
    city: 'Goa',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 79,
    rating: 4.0,
    reviews: 2134,
    type: 'Budget',
    description: 'Enjoy the beautiful beaches of Goa without breaking the bank. Our budget-friendly inn offers clean rooms, friendly service, and easy beach access.',
    amenities: ['Free WiFi', 'Beach Access', 'Restaurant', 'Parking', 'Tour Desk'],
    policies: {
      checkIn: '1:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 79, capacity: 1, available: 8 },
      { type: 'Double', price: 99, capacity: 2, available: 12 },
      { type: 'Suite', price: 149, capacity: 3, available: 4 },
    ],
  },
];

export const getHotelById = (id: string): Hotel | undefined => {
  return hotels.find((hotel) => hotel.id === id);
};

export const searchHotels = (city: string): Hotel[] => {
  if (!city) return hotels;
  return hotels.filter((hotel) =>
    hotel.city.toLowerCase().includes(city.toLowerCase()) ||
    hotel.location.toLowerCase().includes(city.toLowerCase())
  );
};
