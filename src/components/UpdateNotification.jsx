import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X, Sparkles } from 'lucide-react';

export default function UpdateNotification() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ', r);
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!needRefresh && !offlineReady) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1100,
        background: '#FAF8F5',
        border: '1px solid #D8E2DC',
        borderLeft: '4px solid #2D5A37',
        borderRadius: '12px',
        padding: '12px 18px',
        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
        maxWidth: '380px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
      role="alert"
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
          <Sparkles size={16} color="#2D5A37" />
          <strong style={{ fontSize: '0.9rem', color: '#1E3E26' }}>
            {needRefresh ? 'Update Available' : 'Offline Ready'}
          </strong>
        </div>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#4A5568', lineHeight: 1.3 }}>
          {needRefresh
            ? 'A new version of MealMate is ready. Refresh whenever you are ready.'
            : 'MealMate is now cached and ready for offline use.'}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {needRefresh && (
          <button
            onClick={() => updateServiceWorker(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: '#2D5A37',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={13} />
            Refresh
          </button>
        )}
        <button
          onClick={close}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#718096',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
