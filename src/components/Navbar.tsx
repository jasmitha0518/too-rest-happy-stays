import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAppStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient">TooRest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/my-bookings" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                My Bookings
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{user?.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="hero" onClick={() => navigate('/auth')}>
                Login / Sign Up
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {isAuthenticated && (
                <Link
                  to="/my-bookings"
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Bookings
                </Link>
              )}
              {isAuthenticated ? (
                <div className="flex flex-col gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <Button variant="outline" onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button variant="hero" onClick={() => { navigate('/auth'); setIsMenuOpen(false); }}>
                  Login / Sign Up
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
