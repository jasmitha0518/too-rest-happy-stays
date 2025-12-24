import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Booking {
  id: string;
  hotelId: string;
  hotelName: string;
  hotelAddress: string;
  hotelImage: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
  totalAmount: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  guestDetails: {
    name: string;
    age: number;
    gender: string;
    mobile: string;
    email: string;
  };
  paymentMethod: string;
  createdAt: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  bookings: Booking[];
  currentBooking: Partial<Booking> | null;
  searchParams: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
  } | null;
  login: (user: User) => void;
  logout: () => void;
  setSearchParams: (params: AppState['searchParams']) => void;
  setCurrentBooking: (booking: Partial<Booking> | null) => void;
  updateCurrentBooking: (data: Partial<Booking>) => void;
  addBooking: (booking: Booking) => void;
  cancelBooking: (bookingId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      bookings: [],
      currentBooking: null,
      searchParams: null,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      setSearchParams: (params) => set({ searchParams: params }),
      setCurrentBooking: (booking) => set({ currentBooking: booking }),
      updateCurrentBooking: (data) =>
        set((state) => ({
          currentBooking: { ...state.currentBooking, ...data },
        })),
      addBooking: (booking) =>
        set((state) => ({
          bookings: [...state.bookings, booking],
          currentBooking: null,
        })),
      cancelBooking: (bookingId) =>
        set((state) => ({
          bookings: state.bookings.map((b) =>
            b.id === bookingId ? { ...b, status: 'cancelled' } : b
          ),
        })),
    }),
    {
      name: 'toorest-storage',
    }
  )
);
