import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Compass, 
  Calendar, 
  ShoppingCart, 
  Activity, 
  GraduationCap, 
  Download, 
  Menu, 
  X,
  HardDriveDownload,
  Bookmark,
  Sparkles
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ 
  offlineCount = 0, 
  onOpenOfflineModal,
  onTriggerInstall,
  isInstalled = false,
  favoritesCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const PotSteamingIcon = ({ size = 16, className = '' }) => (
    <i className={`bi bi-cup-hot ${className}`} style={{ fontSize: `${size}px`, lineHeight: 1 }}></i>
  );

  const navLinks = [
    { path: '/', label: 'Discover', icon: Compass },
    { path: '/planner', label: 'Meal Calendar', icon: PotSteamingIcon },
    { path: '/grocery', label: 'Shopping List', icon: ShoppingCart },
    { path: '/health', label: 'Weight & Health', icon: Activity },
    { 
      path: '/student', 
      label: 'Student Mode', 
      icon: GraduationCap, 
      highlight: true,
      badge: 'Fuel' 
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Identity */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-emblem">
            <i className="bi bi-cup-hot" style={{ fontSize: '1.4rem', color: '#FAF5EF', lineHeight: 1 }}></i>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">MealMate</span>
            <span className="brand-tagline">Artisan Meal Planning</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${active ? 'active' : ''} ${link.highlight ? 'student-nav-pill' : ''}`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
                {link.badge && <span className="nav-highlight-badge">{link.badge}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions-group">
          {/* Visible PWA Install Link */}
          {!isInstalled && (
            <button
              onClick={onTriggerInstall}
              className="btn-visible-install"
              title="Install MealMate as desktop or mobile app"
              aria-label="Install MealMate App"
            >
              <Download size={15} />
              <span className="install-text">Install App</span>
            </button>
          )}

          {/* Saved Offline Counter Button */}
          {offlineCount > 0 && (
            <button
              onClick={onOpenOfflineModal}
              className="btn-offline-indicator"
              title={`${offlineCount} recipes saved offline in IndexedDB`}
              aria-label={`View ${offlineCount} offline recipes`}
            >
              <HardDriveDownload size={15} />
              <span className="offline-count-bubble">{offlineCount}</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-item ${active ? 'active' : ''} ${link.highlight ? 'student-nav-pill' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                  {link.badge && <span className="nav-highlight-badge">{link.badge}</span>}
                </Link>
              );
            })}
            
            {!isInstalled && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTriggerInstall();
                }}
                className="mobile-install-cta"
              >
                <Download size={18} />
                <span>Install MealMate to Device</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
