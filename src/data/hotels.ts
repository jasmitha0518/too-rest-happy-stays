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
  // Miami
  {
    id: '1',
    name: 'The Grand Palace Hotel',
    location: '123 Ocean Drive, Miami Beach',
    city: 'Miami',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 25000,
    rating: 4.8,
    reviews: 2453,
    type: 'Luxury',
    description: 'Experience unparalleled luxury at The Grand Palace Hotel, where modern elegance meets timeless sophistication. Nestled along the pristine shores of Miami Beach, our hotel offers breathtaking ocean views and exceptional service.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar', 'Room Service', 'Beach Access'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 25000, capacity: 1, available: 5 },
      { type: 'Double', price: 35000, capacity: 2, available: 8 },
      { type: 'Suite', price: 65000, capacity: 4, available: 3 },
    ],
  },
  // Maldives
  {
    id: '2',
    name: 'Tropical Paradise Resort',
    location: 'North Malé Atoll',
    city: 'Maldives',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 85000,
    rating: 4.9,
    reviews: 1892,
    type: 'Resort',
    description: 'Escape to paradise at our exclusive overwater resort. Crystal-clear waters, private villas, and world-class amenities await you in this tropical haven. Perfect for romantic getaways.',
    amenities: ['Private Pool', 'Spa', 'Diving', 'Snorkeling', 'Fine Dining', 'Butler Service', 'Water Sports'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    rooms: [
      { type: 'Single', price: 85000, capacity: 1, available: 2 },
      { type: 'Double', price: 120000, capacity: 2, available: 5 },
      { type: 'Suite', price: 250000, capacity: 4, available: 2 },
    ],
  },
  // London
  {
    id: '3',
    name: 'Royal Heritage Inn',
    location: '789 Royal Street, Westminster',
    city: 'London',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 38000,
    rating: 4.7,
    reviews: 3156,
    type: 'Luxury',
    description: 'Step into a world of timeless elegance at Royal Heritage Inn. Located in the heart of London, our historic property combines classic British charm with modern luxury.',
    amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Concierge', 'Laundry', 'Business Center', 'Afternoon Tea'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 38000, capacity: 1, available: 4 },
      { type: 'Double', price: 52000, capacity: 2, available: 6 },
      { type: 'Suite', price: 95000, capacity: 3, available: 2 },
    ],
  },
  // Swiss Alps
  {
    id: '4',
    name: 'Alpine Mountain Lodge',
    location: '321 Snow Peak Road, Zermatt',
    city: 'Swiss Alps',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 45000,
    rating: 4.6,
    reviews: 1654,
    type: 'Resort',
    description: 'Discover the magic of the Swiss Alps at our cozy mountain lodge. Whether you\'re here for skiing, hiking, or simply to unwind, our warm hospitality and stunning alpine views await.',
    amenities: ['Ski-in/Ski-out', 'Spa', 'Fireplace', 'Restaurant', 'Hot Tub', 'Ski Storage', 'Mountain Views'],
    policies: {
      checkIn: '4:00 PM',
      checkOut: '10:00 AM',
      cancellation: 'Free cancellation up to 72 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 45000, capacity: 1, available: 3 },
      { type: 'Double', price: 62000, capacity: 2, available: 7 },
      { type: 'Suite', price: 110000, capacity: 4, available: 2 },
    ],
  },
  // Hyderabad
  {
    id: '5',
    name: 'ITC Kohenur',
    location: 'HITEC City, Madhapur',
    city: 'Hyderabad',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 15500,
    rating: 4.8,
    reviews: 2890,
    type: 'Luxury',
    description: 'ITC Kohenur is a stunning architectural marvel inspired by the legendary Kohinoor diamond. Located in the IT corridor, it offers luxury accommodations with breathtaking lake views.',
    amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Spa', 'Pool', 'Business Center', 'Concierge'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 15500, capacity: 1, available: 4 },
      { type: 'Double', price: 21000, capacity: 2, available: 6 },
      { type: 'Suite', price: 38000, capacity: 3, available: 2 },
    ],
  },
  {
    id: '6',
    name: 'Novotel Hyderabad',
    location: 'Hitech City, Kondapur',
    city: 'Hyderabad',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 6500,
    rating: 4.4,
    reviews: 2134,
    type: 'Budget',
    description: 'Modern comfort meets affordability at Novotel Hyderabad. Ideally located in the IT hub with contemporary rooms and excellent dining options.',
    amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Bar', 'Meeting Rooms', 'Parking'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 6500, capacity: 1, available: 8 },
      { type: 'Double', price: 8500, capacity: 2, available: 12 },
      { type: 'Suite', price: 15000, capacity: 3, available: 4 },
    ],
  },
  // Mumbai
  {
    id: '7',
    name: 'The Taj Mahal Palace',
    location: 'Apollo Bunder, Colaba',
    city: 'Mumbai',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 28000,
    rating: 4.9,
    reviews: 5621,
    type: 'Luxury',
    description: 'An iconic landmark overlooking the Gateway of India, The Taj Mahal Palace has been the epitome of hospitality since 1903. Experience legendary service and timeless elegance.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Multiple Restaurants', 'Bar', 'Sea View', 'Heritage Tours'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 28000, capacity: 1, available: 8 },
      { type: 'Double', price: 38000, capacity: 2, available: 12 },
      { type: 'Suite', price: 85000, capacity: 3, available: 4 },
    ],
  },
  {
    id: '8',
    name: 'JW Marriott Mumbai Juhu',
    location: 'Juhu Tara Road, Juhu',
    city: 'Mumbai',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 19500,
    rating: 4.7,
    reviews: 3892,
    type: 'Luxury',
    description: 'Overlooking the Arabian Sea and Juhu Beach, JW Marriott Mumbai offers luxurious accommodations with stunning ocean views and world-class dining.',
    amenities: ['Beach Access', 'Pool', 'Spa', 'Gym', 'Multiple Restaurants', 'Bar', 'Business Center'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 19500, capacity: 1, available: 6 },
      { type: 'Double', price: 26000, capacity: 2, available: 10 },
      { type: 'Suite', price: 55000, capacity: 3, available: 3 },
    ],
  },
  // Kerala
  {
    id: '9',
    name: 'Taj Kumarakom Resort & Spa',
    location: 'Kumarakom, Kottayam',
    city: 'Kerala',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 32000,
    rating: 4.9,
    reviews: 2156,
    type: 'Resort',
    description: 'Nestled on the banks of Vembanad Lake, Taj Kumarakom offers an authentic Kerala experience with meandering canals, lush paddy fields, and traditional houseboats.',
    amenities: ['Private Pool', 'Spa', 'Ayurveda', 'Backwater Tours', 'Fine Dining', 'Butler Service', 'Yoga'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    rooms: [
      { type: 'Single', price: 32000, capacity: 1, available: 2 },
      { type: 'Double', price: 42000, capacity: 2, available: 5 },
      { type: 'Suite', price: 75000, capacity: 4, available: 2 },
    ],
  },
  {
    id: '10',
    name: 'Marari Beach Resort',
    location: 'Mararikulam, Alappuzha',
    city: 'Kerala',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 12500,
    rating: 4.6,
    reviews: 1876,
    type: 'Resort',
    description: 'A serene beachfront resort offering traditional Kerala cottages amid coconut groves. Experience authentic village life and Ayurvedic treatments.',
    amenities: ['Beach Access', 'Ayurveda Spa', 'Pool', 'Yoga', 'Organic Restaurant', 'Cycling', 'Fishing'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 12500, capacity: 1, available: 6 },
      { type: 'Double', price: 16500, capacity: 2, available: 10 },
      { type: 'Suite', price: 28000, capacity: 4, available: 3 },
    ],
  },
  // Bangalore
  {
    id: '11',
    name: 'The Leela Palace',
    location: 'Old Airport Road, Kodihalli',
    city: 'Bangalore',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 18500,
    rating: 4.9,
    reviews: 3245,
    type: 'Luxury',
    description: 'Experience royal luxury at The Leela Palace Bangalore, a stunning blend of contemporary design and traditional Indian architecture with world-class amenities.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar', 'Room Service', 'Business Center'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 18500, capacity: 1, available: 5 },
      { type: 'Double', price: 24500, capacity: 2, available: 8 },
      { type: 'Suite', price: 45000, capacity: 4, available: 3 },
    ],
  },
  {
    id: '12',
    name: 'Treebo Trend Lavender',
    location: 'Koramangala, 5th Block',
    city: 'Bangalore',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 2800,
    rating: 4.1,
    reviews: 3245,
    type: 'Budget',
    description: 'A comfortable and affordable stay in the heart of Koramangala. Perfect for business travelers looking for clean, convenient accommodations.',
    amenities: ['Free WiFi', 'Breakfast', 'Parking', '24/7 Reception', 'AC Rooms'],
    policies: {
      checkIn: '12:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 2800, capacity: 1, available: 10 },
      { type: 'Double', price: 3500, capacity: 2, available: 15 },
      { type: 'Suite', price: 5500, capacity: 3, available: 5 },
    ],
  },
  // Jaipur
  {
    id: '13',
    name: 'Rambagh Palace',
    location: 'Bhawani Singh Road',
    city: 'Jaipur',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 55000,
    rating: 4.9,
    reviews: 1854,
    type: 'Luxury',
    description: 'Once the residence of the Maharaja of Jaipur, Rambagh Palace offers royal luxury with magnificent gardens, ornate interiors, and legendary hospitality.',
    amenities: ['Heritage Walk', 'Spa', 'Pool', 'Fine Dining', 'Polo', 'Croquet', 'Royal Butler'],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 72 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 55000, capacity: 1, available: 3 },
      { type: 'Double', price: 72000, capacity: 2, available: 5 },
      { type: 'Suite', price: 150000, capacity: 4, available: 2 },
    ],
  },
  {
    id: '14',
    name: 'Hotel Narain Niwas Palace',
    location: 'Kanota Bagh, Narain Singh Road',
    city: 'Jaipur',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 8500,
    rating: 4.5,
    reviews: 1654,
    type: 'Budget',
    description: 'A heritage hotel offering royal Rajasthani hospitality at affordable prices. Built in 1928, featuring traditional architecture and beautiful gardens.',
    amenities: ['Free WiFi', 'Restaurant', 'Garden', 'Heritage Walk', 'Parking', 'Cultural Programs'],
    policies: {
      checkIn: '1:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 8500, capacity: 1, available: 5 },
      { type: 'Double', price: 11000, capacity: 2, available: 8 },
      { type: 'Suite', price: 22000, capacity: 4, available: 2 },
    ],
  },
  // Chennai
  {
    id: '15',
    name: 'ITC Grand Chola',
    location: 'Guindy, Mount Road',
    city: 'Chennai',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 16000,
    rating: 4.8,
    reviews: 4521,
    type: 'Luxury',
    description: 'A tribute to the magnificent Chola dynasty, ITC Grand Chola is South India\'s largest hotel. Experience grandeur with its architectural splendor and world-class hospitality.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Multiple Restaurants', 'Bar', 'Business Center', 'Ballroom'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 16000, capacity: 1, available: 10 },
      { type: 'Double', price: 22000, capacity: 2, available: 15 },
      { type: 'Suite', price: 48000, capacity: 3, available: 5 },
    ],
  },
  {
    id: '16',
    name: 'Taj Fisherman\'s Cove',
    location: 'Covelong Beach, ECR',
    city: 'Chennai',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 14500,
    rating: 4.6,
    reviews: 2345,
    type: 'Resort',
    description: 'A stunning beachfront resort on the Bay of Bengal. Enjoy pristine beaches, water sports, and the perfect blend of relaxation and adventure.',
    amenities: ['Beach Access', 'Pool', 'Spa', 'Water Sports', 'Restaurant', 'Kids Club', 'Tennis'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 14500, capacity: 1, available: 6 },
      { type: 'Double', price: 19000, capacity: 2, available: 10 },
      { type: 'Suite', price: 35000, capacity: 4, available: 3 },
    ],
  },
  // Varanasi
  {
    id: '17',
    name: 'Taj Ganges',
    location: 'Nadesar Palace Grounds',
    city: 'Varanasi',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 12000,
    rating: 4.7,
    reviews: 1987,
    type: 'Luxury',
    description: 'Experience the spiritual essence of Varanasi at Taj Ganges. Set amidst lush gardens, enjoy authentic experiences including Ganga Aarti and heritage walks.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Garden', 'Cultural Programs', 'Temple Tours'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 12000, capacity: 1, available: 5 },
      { type: 'Double', price: 16000, capacity: 2, available: 8 },
      { type: 'Suite', price: 32000, capacity: 3, available: 3 },
    ],
  },
  {
    id: '18',
    name: 'BrijRama Palace',
    location: 'Darbhanga Ghat',
    city: 'Varanasi',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 22000,
    rating: 4.8,
    reviews: 1234,
    type: 'Luxury',
    description: 'A stunning 18th-century palace on the banks of the Ganges. Wake up to mesmerizing views of the ghats and experience the timeless spirituality of Kashi.',
    amenities: ['Ghat View', 'Spa', 'Restaurant', 'Boat Rides', 'Yoga', 'Heritage Tours', 'Aarti Experience'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 22000, capacity: 1, available: 4 },
      { type: 'Double', price: 28000, capacity: 2, available: 6 },
      { type: 'Suite', price: 52000, capacity: 3, available: 2 },
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
