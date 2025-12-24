import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import HotelListingPage from "./pages/HotelListingPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import RoomSelectionPage from "./pages/RoomSelectionPage";
import GuestDetailsPage from "./pages/GuestDetailsPage";
import PaymentPage from "./pages/PaymentPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/hotels" element={<HotelListingPage />} />
          <Route path="/hotel/:id" element={<HotelDetailPage />} />
          <Route path="/room-selection" element={<RoomSelectionPage />} />
          <Route path="/guest-details" element={<GuestDetailsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/booking-confirmation/:bookingId" element={<BookingConfirmationPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
