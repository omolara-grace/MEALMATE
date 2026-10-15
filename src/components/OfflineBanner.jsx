import React from 'react';
import { WifiOff, ShieldCheck } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import './OfflineBanner.css';

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="offline-banner" role="status" aria-live="polite">
      <div className="offline-banner-inner">
        <div className="offline-status-pill">
          <WifiOff size={14} className="offline-pulse" />
          <span>Offline Active</span>
        </div>
        <p className="offline-message">
          You're offline. Your saved recipes, meal calendar, and shopping lists remain available to view and edit locally.
        </p>
        <span className="offline-db-badge">
          <ShieldCheck size={14} />
          Local storage active
        </span>
      </div>
    </div>
  );
}
