// Take the element we want to show
let navbar = document.querySelector('.navbar');

// Assign the onclick method to the button to display the navbar
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
};

// Take the element we want to show
let searchForm = document.querySelector('.search-form');

// Assign the onclick method to the button to display the search form
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
};

// Take the element we want to show
let cartItem = document.querySelector('.cart-items-container');

// Assign the onclick method to the button to display the cart
document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
};
