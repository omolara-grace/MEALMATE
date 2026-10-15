import React, { useState, useEffect } from 'react';
import { Download, X, HelpCircle, Smartphone, Check, Sparkles } from 'lucide-react';
import './InstallPrompt.css';

export default function InstallPrompt({ forceShowModal = false, onCloseModal }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    // 1. Detect standalone mode
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true;
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();
    window.matchMedia('(display-mode: standalone)').addEventListener('change', checkStandalone);

    // 2. Check dismiss time
    const dismissedTime = localStorage.getItem('mealmate_pwa_dismissed');
    if (dismissedTime) {
      const hoursSince = (Date.now() - parseInt(dismissedTime, 10)) / (1000 * 60 * 60);
      if (hoursSince < 72) {
        setIsDismissed(true);
      }
    }

    // 3. Listen for beforeinstallprompt
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.deferredMealMatePrompt = e;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    const prompt = deferredPrompt || window.deferredMealMatePrompt;
    if (!prompt) {
      setShowHelpModal(true);
      return;
    }

    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      window.deferredMealMatePrompt = null;
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('mealmate_pwa_dismissed', Date.now().toString());
  };

  const isModalOpen = forceShowModal || showHelpModal;

  return (
    <>
      {/* Floating Bottom Prompt (Shown if installable, not standalone, and not dismissed) */}
      {!isStandalone && !isDismissed && (deferredPrompt || true) && !forceShowModal && (
        <aside className="install-prompt-banner" aria-label="Install MealMate Application">
          <div className="install-prompt-content">
            <div className="install-app-icon-wrap">
              <img src="/pwa-192x192.png" alt="MealMate App Icon" className="install-app-icon" />
            </div>
            <div className="install-prompt-text">
              <strong>Install MealMate</strong>
              <p>Add to home screen for offline access & faster meal planning.</p>
            </div>
          </div>

          <div className="install-prompt-actions">
            <button
              onClick={handleInstallClick}
              className="btn-install-confirm"
              aria-label="Install MealMate"
            >
              <Download size={15} />
              <span>Install</span>
            </button>
            
            <button
              onClick={() => setShowHelpModal(true)}
              className="btn-install-info"
              title="How to install"
              aria-label="Installation guide"
            >
              <HelpCircle size={15} />
            </button>

            <button
              onClick={handleDismiss}
              className="btn-install-dismiss"
              title="Dismiss prompt"
              aria-label="Dismiss prompt"
            >
              <X size={15} />
            </button>
          </div>
        </aside>
      )}

      {/* Guided Help Modal */}
      {isModalOpen && (
        <div 
          className="install-modal-overlay" 
          onClick={() => {
            setShowHelpModal(false);
            if (onCloseModal) onCloseModal();
          }}
        >
          <div className="install-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="install-modal-header">
              <div className="flex items-center gap-2">
                <Smartphone size={22} className="text-terracotta" />
                <h3>How to Install MealMate</h3>
              </div>
              <button
                className="close-modal-btn"
                onClick={() => {
                  setShowHelpModal(false);
                  if (onCloseModal) onCloseModal();
                }}
                aria-label="Close installation guide"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="install-modal-body">
              <p className="install-modal-intro">
                MealMate is a high-performance Progressive Web App (PWA). You can install it on your device to plan meals without internet connection, view offline recipes, and launch it directly from your home screen or dock.
              </p>

              <div className="platform-guide-list">
                <div className="platform-guide-block">
                  <h4>Android & Chrome / Edge:</h4>
                  <p>
                    Tap the <strong>"Install"</strong> button above, or click the browser menu (three dots <strong>⋮</strong>) and select <strong>"Add to Home Screen"</strong> / <strong>"Install MealMate"</strong>.
                  </p>
                </div>

                <div className="platform-guide-block">
                  <h4>iPhone & iPad (Safari):</h4>
                  <p>
                    Tap the <strong>Share button</strong> <span className="action-hint">⎋</span> at the bottom of Safari, scroll down, and tap <strong>"Add to Home Screen"</strong>.
                  </p>
                </div>

                <div className="platform-guide-block">
                  <h4>Desktop (Mac, Windows, Linux):</h4>
                  <p>
                    Look for the <strong>Install icon</strong> in your browser's address bar (right side) and click <strong>"Install"</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="install-modal-footer">
              <button
                className="btn-modal-done"
                onClick={() => {
                  setShowHelpModal(false);
                  if (onCloseModal) onCloseModal();
                }}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
