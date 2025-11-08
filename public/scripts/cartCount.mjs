// cartCount.js
import { Cart } from '/scripts/cart.mjs';

function updateCartCount() {
  const countElement = document.querySelector('#cart-count');
  if (!countElement) return;
  const totalItems = Cart.items.reduce((sum, item) => sum + item.qty, 0);
  countElement.textContent = totalItems;
}

// Update immediately on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// Update whenever cart changes
window.addEventListener('cart-updated', updateCartCount);
