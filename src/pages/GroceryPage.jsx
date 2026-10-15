import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Trash2, 
  Check, 
  RotateCcw, 
  CheckCircle2, 
  Circle,
  HardDrive,
  ShoppingBag
} from 'lucide-react';
import './GroceryPage.css';

export default function GroceryPage({
  shoppingList,
  onUpdateShoppingList
}) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');

  const handleToggleCheck = (itemId) => {
    const updated = shoppingList.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    onUpdateShoppingList(updated);
  };

  const handleRemoveItem = (itemId) => {
    const updated = shoppingList.filter((item) => item.id !== itemId);
    onUpdateShoppingList(updated);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem = {
      id: 'custom-' + Date.now(),
      name: newItemName.trim(),
      amount: newItemQty.trim() || '1 item',
      unit: '',
      checked: false,
      sourceRecipe: 'Pantry Staple'
    };

    onUpdateShoppingList([newItem, ...shoppingList]);
    setNewItemName('');
    setNewItemQty('');
  };

  const handleClearCompleted = () => {
    const remaining = shoppingList.filter((item) => !item.checked);
    onUpdateShoppingList(remaining);
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all items from your shopping list?')) {
      onUpdateShoppingList([]);
    }
  };

  const completedCount = shoppingList.filter((item) => item.checked).length;
  const remainingCount = shoppingList.length - completedCount;

  return (
    <div className="grocery-page-container">
      <div className="grocery-header-bar">
        <div>
          <div className="badge-pill badge-terracotta mb-2">
            <ShoppingCart size={14} />
            <span>Smart Culinary Checklist</span>
          </div>
          <h1 className="grocery-title">Shopping List</h1>
          <p className="grocery-subtitle">
            Collects ingredients directly from your planned meals and custom pantry items. Fully accessible and editable offline.
          </p>
        </div>

        <div className="grocery-stats-bar">
          <div className="stat-pill-terracotta">
            <span>To Buy:</span>
            <strong>{remainingCount}</strong>
          </div>
          <div className="stat-pill-terracotta success">
            <span>Bought:</span>
            <strong>{completedCount}</strong>
          </div>
        </div>
      </div>

      {/* Add Custom Item Form */}
      <form onSubmit={handleAddItem} className="add-grocery-form">
        <input
          type="text"
          placeholder="Add pantry item (e.g. Eggs, Peanut Butter, Sweet Potato)..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="add-name-input"
          aria-label="New grocery item name"
        />
        <input
          type="text"
          placeholder="Qty (e.g. 1 crate, 2 cups)"
          value={newItemQty}
          onChange={(e) => setNewItemQty(e.target.value)}
          className="add-qty-input"
          aria-label="New grocery item quantity"
        />
        <button type="submit" className="btn-add-item">
          <Plus size={16} />
          <span>Add</span>
        </button>
      </form>

      {/* List controls */}
      <div className="list-controls-row">
        <span className="items-count-label">
          {shoppingList.length} total pantry items
        </span>

        <div className="list-btn-actions">
          {completedCount > 0 && (
            <button
              onClick={handleClearCompleted}
              className="btn-clear-completed"
            >
              Clear {completedCount} Bought
            </button>
          )}
          {shoppingList.length > 0 && (
            <button
              onClick={handleClearAll}
              className="btn-clear-all"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Items List */}
      {shoppingList.length === 0 ? (
        <div className="empty-grocery-card">
          <ShoppingBag size={52} className="empty-cart-icon text-terracotta" />
          <h3>Your shopping list is clear</h3>
          <p>
            Schedule dishes in your <strong>Meal Calendar</strong> and click "Generate Shopping List", or type ingredients above.
          </p>
        </div>
      ) : (
        <div className="grocery-items-grid">
          {shoppingList.map((item) => (
            <div
              key={item.id}
              className={`grocery-item-row ${item.checked ? 'completed' : ''}`}
              onClick={() => handleToggleCheck(item.id)}
            >
              <button
                type="button"
                className={`check-circle-btn ${item.checked ? 'checked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleCheck(item.id);
                }}
                aria-label={`Mark ${item.name}`}
              >
                {item.checked ? <Check size={14} /> : <Circle size={14} />}
              </button>

              <div className="item-text-info">
                <span className="item-name">{item.name}</span>
                {item.sourceRecipe && (
                  <span className="item-source">for {item.sourceRecipe}</span>
                )}
              </div>

              <div className="item-amount-badge">
                {item.amount} {item.unit || ''}
              </div>

              <button
                type="button"
                className="btn-delete-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveItem(item.id);
                }}
                aria-label={`Remove ${item.name}`}
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
