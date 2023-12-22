function addToCart(id, name, price) {
  const cartItems = document.getElementById('cart-items');
  const listItem = document.createElement('li');
  listItem.classList.add('cart-item');
  listItem.innerHTML = `
    <span>${name}</span>
    <span>$${price.toFixed(2)}</span>
  `;
  cartItems.appendChild(listItem);

  // Update total
  updateTotal();

  // Show notification
  showNotification();

  // Hide notification after 2 seconds
  setTimeout(hideNotification, 2000);
}

function toggleLike(likeBtn) {
  if (likeBtn.innerHTML === '🖤') {
    likeBtn.innerHTML = '❤️';
  } else {
    likeBtn.innerHTML = '🖤';
  }
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-item span:nth-child(2)');
  let total = 0;
  cartItems.forEach(item => {
    total += parseFloat(item.textContent.slice(1));
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function showNotification() {
  const notification = document.getElementById('notification');
  notification.style.opacity = 1;
}

function hideNotification() {
  const notification = document.getElementById('notification');
  notification.style.opacity = 0;
}