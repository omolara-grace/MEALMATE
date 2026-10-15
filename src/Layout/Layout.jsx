import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OfflineBanner from '../components/OfflineBanner';
import InstallPrompt from '../components/InstallPrompt';
import UpdateNotification from '../components/UpdateNotification';
import { HardDriveDownload, X, Trash2, CalendarPlus } from 'lucide-react';
import './Layout.css';

export default function Layout({
  offlineRecipes = [],
  onRemoveOfflineRecipe,
  onSelectRecipe,
  onAssignMeal,
  favoritesCount = 0
}) {
  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [showInstallGuideModal, setShowInstallGuideModal] = useState(false);

  const handleTriggerInstall = () => {
    // If native prompt is available in global scope, trigger it; else show help guide modal
    if (window.deferredMealMatePrompt) {
      window.deferredMealMatePrompt.prompt();
      window.deferredMealMatePrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          window.deferredMealMatePrompt = null;
        }
      });
    } else {
      setShowInstallGuideModal(true);
    }
  };

  return (
    <div className="layout-shell">
      <UpdateNotification />
      <OfflineBanner />
      
      <Navbar
        offlineCount={offlineRecipes.length}
        onOpenOfflineModal={() => setShowOfflineModal(true)}
        onTriggerInstall={handleTriggerInstall}
        favoritesCount={favoritesCount}
      />

      <main className="layout-main-content">
        <Outlet />
      </main>

      <Footer />
      
      {/* PWA Floating Banner & Manual Guide Modal */}
      <InstallPrompt 
        forceShowModal={showInstallGuideModal}
        onCloseModal={() => setShowInstallGuideModal(false)}
      />

      {/* Offline Saved Recipes Manager Modal */}
      {showOfflineModal && (
        <div className="offline-manager-backdrop" onClick={() => setShowOfflineModal(false)}>
          <div className="offline-manager-modal" onClick={(e) => e.stopPropagation()}>
            <div className="offline-manager-header">
              <div className="flex items-center gap-2">
                <HardDriveDownload size={20} className="text-terracotta" />
                <h3>Saved Offline Recipes ({offlineRecipes.length})</h3>
              </div>
              <button
                className="btn-close-modal"
                onClick={() => setShowOfflineModal(false)}
                aria-label="Close offline modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="offline-manager-body">
              <p className="offline-info-intro">
                These recipes and their complete preparation guides are saved in your device's local database (IndexedDB) and remain accessible without an active internet connection.
              </p>

              {offlineRecipes.length === 0 ? (
                <div className="empty-offline-box">
                  <p>You haven't saved any recipes for offline access yet.</p>
                  <span>Click "Save Offline" on any recipe card to store it.</span>
                </div>
              ) : (
                <div className="offline-recipes-list">
                  {offlineRecipes.map((r) => (
                    <div key={r.id} className="offline-recipe-item">
                      <img
                        src={r.offlineImage || r.image || '/offline-fallback.svg'}
                        alt={r.name}
                        className="offline-item-thumb"
                        onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                      />
                      <div className="offline-item-info">
                        <h4
                          onClick={() => {
                            onSelectRecipe(r);
                            setShowOfflineModal(false);
                          }}
                        >
                          {r.name}
                        </h4>
                        <span className="offline-item-cat">{r.category} • {r.preparationTime || 10} min</span>
                      </div>

                      <div className="offline-item-actions">
                        <button
                          className="btn-item-plan"
                          onClick={() => {
                            onAssignMeal(r);
                            setShowOfflineModal(false);
                          }}
                          title="Add to calendar"
                        >
                          <CalendarPlus size={15} />
                        </button>
                        <button
                          className="btn-item-remove"
                          onClick={() => onRemoveOfflineRecipe(r.id)}
                          title="Remove from offline storage"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
