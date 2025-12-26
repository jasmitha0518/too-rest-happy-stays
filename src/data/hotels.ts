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
    name: 'The Leela Palace',
    location: 'Old Airport Road, Kodihalli',
    city: 'Bangalore',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 18500,
    rating: 4.9,
    reviews: 3245,
    type: 'Luxury',
    description: 'Experience royal luxury at The Leela Palace Bangalore, a stunning blend of contemporary design and traditional Indian architecture. Located in the heart of the city, enjoy world-class amenities, exquisite dining, and impeccable service.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar', 'Room Service', 'Parking', 'Business Center'],
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
    id: '2',
    name: 'Taj Kumarakom Resort & Spa',
    location: 'Kumarakom, Kottayam',
    city: 'Kerala',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 32000,
    rating: 4.9,
    reviews: 2156,
    type: 'Resort',
    description: 'Nestled on the banks of Vembanad Lake, Taj Kumarakom offers an authentic Kerala experience with meandering canals, lush paddy fields, and traditional houseboats. A perfect escape to experience God\'s Own Country.',
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
    id: '3',
    name: 'ITC Kohenur',
    location: 'HITEC City, Madhapur',
    city: 'Hyderabad',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 15500,
    rating: 4.8,
    reviews: 2890,
    type: 'Luxury',
    description: 'ITC Kohenur is a stunning architectural marvel inspired by the legendary Kohinoor diamond. Located in the IT corridor of Hyderabad, it offers luxury accommodations with breathtaking views of Durgam Cheruvu lake.',
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
    id: '4',
    name: 'Rambagh Palace',
    location: 'Bhawani Singh Road',
    city: 'Jaipur',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 55000,
    rating: 4.9,
    reviews: 1854,
    type: 'Luxury',
    description: 'Once the residence of the Maharaja of Jaipur, Rambagh Palace is a stunning heritage property offering royal luxury. Experience the grandeur of Rajasthan with magnificent gardens, ornate interiors, and legendary hospitality.',
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
    id: '5',
    name: 'The Taj Mahal Palace',
    location: 'Apollo Bunder, Colaba',
    city: 'Mumbai',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 28000,
    rating: 4.9,
    reviews: 5621,
    type: 'Luxury',
    description: 'An iconic landmark overlooking the Gateway of India, The Taj Mahal Palace has been the epitome of hospitality since 1903. Experience legendary service, timeless elegance, and the spirit of Mumbai.',
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
    id: '6',
    name: 'Treebo Trend Lavender',
    location: 'Koramangala, 5th Block',
    city: 'Bangalore',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 2800,
    rating: 4.1,
    reviews: 3245,
    type: 'Budget',
    description: 'A comfortable and affordable stay in the heart of Koramangala. Perfect for business travelers and tourists looking for clean, convenient accommodations near IT parks and shopping areas.',
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
  {
    id: '7',
    name: 'Marari Beach Resort',
    location: 'Mararikulam, Alappuzha',
    city: 'Kerala',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 12500,
    rating: 4.6,
    reviews: 1876,
    type: 'Resort',
    description: 'A serene beachfront resort offering traditional Kerala cottages amid coconut groves. Experience authentic village life, Ayurvedic treatments, and pristine beach sunsets.',
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
  {
    id: '8',
    name: 'Novotel Hyderabad',
    location: 'Hitech City, Kondapur',
    city: 'Hyderabad',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 6500,
    rating: 4.4,
    reviews: 2134,
    type: 'Budget',
    description: 'Modern comfort meets affordability at Novotel Hyderabad. Ideally located in the IT hub, enjoy contemporary rooms, excellent dining, and easy access to business and entertainment districts.',
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
  {
    id: '9',
    name: 'Hotel Narain Niwas Palace',
    location: 'Kanota Bagh, Narain Singh Road',
    city: 'Jaipur',
    image: hotel1,
    images: [hotel1, hotel2, hotel3, hotel4],
    pricePerNight: 8500,
    rating: 4.5,
    reviews: 1654,
    type: 'Budget',
    description: 'A heritage hotel offering royal Rajasthani hospitality at affordable prices. Built in 1928, this palace hotel features traditional architecture, beautiful gardens, and authentic local cuisine.',
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
  {
    id: '10',
    name: 'JW Marriott Mumbai Juhu',
    location: 'Juhu Tara Road, Juhu',
    city: 'Mumbai',
    image: hotel2,
    images: [hotel2, hotel1, hotel3, hotel4],
    pricePerNight: 19500,
    rating: 4.7,
    reviews: 3892,
    type: 'Luxury',
    description: 'Overlooking the Arabian Sea and Juhu Beach, JW Marriott Mumbai offers luxurious accommodations with stunning ocean views. Experience world-class dining, rejuvenating spa treatments, and Mumbai\'s vibrant energy.',
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
  {
    id: '11',
    name: 'Zostel Bangalore',
    location: 'Indiranagar, 12th Main',
    city: 'Bangalore',
    image: hotel3,
    images: [hotel3, hotel1, hotel2, hotel4],
    pricePerNight: 1200,
    rating: 4.2,
    reviews: 4521,
    type: 'Budget',
    description: 'A vibrant backpacker hostel in the happening Indiranagar neighborhood. Meet fellow travelers, enjoy rooftop hangouts, and explore Bangalore\'s best cafes and pubs.',
    amenities: ['Free WiFi', 'Common Kitchen', 'Rooftop', 'Lockers', 'Cafe', 'Travel Desk'],
    policies: {
      checkIn: '1:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
    },
    rooms: [
      { type: 'Single', price: 1200, capacity: 1, available: 15 },
      { type: 'Double', price: 2200, capacity: 2, available: 8 },
      { type: 'Suite', price: 4000, capacity: 4, available: 3 },
    ],
  },
  {
    id: '12',
    name: 'Oberoi Udaivilas',
    location: 'Haridasji Ki Magri, Udaipur',
    city: 'Jaipur',
    image: hotel4,
    images: [hotel4, hotel1, hotel2, hotel3],
    pricePerNight: 68000,
    rating: 4.9,
    reviews: 2134,
    type: 'Resort',
    description: 'Set on the banks of Lake Pichola, Oberoi Udaivilas is one of the world\'s finest hotels. Experience unparalleled luxury with private pools, royal suites, and breathtaking views of the City of Lakes.',
    amenities: ['Private Pool', 'Spa', 'Fine Dining', 'Boat Rides', 'Butler Service', 'Wildlife Safari', 'Cultural Tours'],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 7 days before check-in',
    },
    rooms: [
      { type: 'Single', price: 68000, capacity: 1, available: 2 },
      { type: 'Double', price: 85000, capacity: 2, available: 4 },
      { type: 'Suite', price: 180000, capacity: 4, available: 2 },
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
