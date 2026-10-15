import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Heart, Sparkles, Compass, Calendar, ShoppingCart, Activity } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        <div className="footer-col branding-col">
          <div className="footer-logo">
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#C66B4E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(198, 107, 78, 0.25)'
            }}>
              <i className="bi bi-cup-hot" style={{ fontSize: '1.2rem', color: '#FAF5EF', lineHeight: 1 }}></i>
            </div>
            <span className="footer-logo-text">MealMate</span>
          </div>
          <p className="footer-bio">
            An artisan, production-quality meal planning and recipe discovery platform designed for nourishing living, campus vitality, and mindful budgets.
          </p>
          <div className="footer-pwa-pill">
            <Wifi size={14} className="text-terracotta" />
            <span>PWA Enabled • Offline Ready</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Discover Recipes</Link></li>
            <li><Link to="/planner">Meal Calendar</Link></li>
            <li><Link to="/grocery">Shopping Checklist</Link></li>
            <li><Link to="/health">Weight & Health</Link></li>
            <li><Link to="/student">Student Mode</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Curated Focus</h4>
          <ul className="footer-links">
            <li><Link to="/student?tab=brain-focus">Brain & Focus Fuel</Link></li>
            <li><Link to="/student?tab=energy-alertness">Energy & Alertness</Link></li>
            <li><Link to="/student?tab=budget-meals">Naira Budget Meals</Link></li>
            <li><Link to="/student?tab=hostel-kitchen">Hostel Kitchen Mode</Link></li>
            <li><Link to="/student?tab=exam-week">Exam Week Survival</Link></li>
          </ul>
        </div>

        <div className="footer-col disclaimer-col">
          <h4>Culinary & Health Note</h4>
          <p className="disclaimer-text">
            MealMate provides balanced culinary suggestions, estimated budget ranges, and practical meal schedules. Nutritional notes are general health information and not intended as medical prescriptions.
          </p>
          <div className="copyright-note">
            © {new Date().getFullYear()} MealMate. Handcrafted for balanced, nourished living.
          </div>
        </div>
      </div>
    </footer>
  );
}
