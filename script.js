let cart = JSON.parse(localStorage.getItem("quickBiteCart")) || [];

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxES9tk3bAFUu64JhDPLgHzPs5hUKLNvM",
  authDomain: "resturant-cb358.firebaseapp.com",
  projectId: "resturant-cb358",
  storageBucket: "resturant-cb358.firebasestorage.app",
  messagingSenderId: "806584741054",
  appId: "1:806584741054:web:314fb1c462eba54c2cc2ef",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

async function sendOrderToKitchen() {
  const tableNo = localStorage.getItem("assignedTable") || "Walk-in";
  const customerName = localStorage.getItem("customerName") || "Guest";
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) return alert("Your cart is empty!");

  try {
    await db.collection("orders").add({
      table: tableNo,
      customer: customerName,
      items: cart,
      totalPrice: totalPrice,
      status: "Pending",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("Order sent to kitchen!");
    localStorage.removeItem("quickBiteCart"); // Clear local cart after success
    window.location.href = "../My_Orders/my_orders.html";
  } catch (error) {
    console.error("Firebase Error:", error);
    alert("Failed to send order. Please try again.");
  }
}

//==================================================

function initializeQuickBite() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableNumber = urlParams.get("table");
  const userName = localStorage.getItem("customerName");
  const navContainer = document.getElementById("nav-actions");

  // ALWAYS check if user has a saved name in localStorage
  if (userName) {
    // User has a name saved - show their profile circle on ANY page
    updateNavbarProfile(userName);

    // If on a table page with query param, also show greeting
    if (tableNumber) {
      localStorage.setItem("assignedTable", tableNumber);
      showPersonalizedGreeting(userName, tableNumber);
    }
  } else if (tableNumber) {
    // New QR code scan - show modal to get name
    localStorage.setItem("assignedTable", tableNumber);

    const overlay = document.getElementById("custom-prompt-overlay");
    const tableDisplay = document.getElementById("prompt-table-display");
    const confirmBtn = document.getElementById("confirm-name-btn");

    if (overlay && tableDisplay) {
      tableDisplay.innerText = `Table ${tableNumber}`;
      overlay.style.display = "flex";
    }

    // Handle the "Start Dining" button click
    confirmBtn.onclick = function () {
      const input = document.getElementById("custom-name-input");
      const enteredName = input.value.trim() || "Guest";

      // Save to storage and hide modal
      localStorage.setItem("customerName", enteredName);
      overlay.style.display = "none";

      // Trigger UI updates
      updateNavbarProfile(enteredName);
      showPersonalizedGreeting(enteredName, tableNumber);
    };
  } else {
    // No saved name and no query param - show default navbar
    if (navContainer) {
      navContainer.classList.remove("has-user");
    }
  }
}

function updateNavbarProfile(name) {
  const navContainer = document.getElementById("nav-actions");
  const profileSlot = document.getElementById("nav-profile-slot");

  if (!navContainer || !profileSlot) return;

  // 1. Add the "flex" and "border" styling class
  navContainer.classList.add("has-user");

  // Get the first letter of the user's name
  const initial = name.charAt(0).toUpperCase();

  // Inject the circular profile icon
  profileSlot.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      
      
      <div class="nav-profile-circle" onclick="location.href='my_orders.html'">
        ${initial}
      </div>

      <button class="btn-change-name" onclick="changeName()" title="Switch User">
        <span class="material-symbols-outlined">sync_alt</span>
      </button>
    </div>
  `;
}

// 2. The Reset Logic
function changeName() {
  // Remove only the name, NOT the table
  localStorage.removeItem("customerName");

  // Reload the page to trigger the initializeQuickBite() flow again
  // Since customerName is now gone, it will show the glass modal
  location.reload();
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";
  return "Good Night";
}

function showPersonalizedGreeting(name, table) {
  const dynamicArea = document.getElementById("dynamic-greeting");
  const hour = new Date().getHours();
  let greeting = "";

  // Determine time of day
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  dynamicArea.innerHTML = `
      <h1>${getGreeting()}, <br /><span class="gradient-text">${name}</span></h1>
      <p style="color: var(--text-white); font-weight: 600;">You are dining at Table ${table}</p>
      <p style="color: var(--text-muted); max-width: 600px; margin: 10px auto">
        Ready for your favorite study fuel? Your order will be delivered straight to your table.
      </p>
    `;

  // Update the live badge to show they are "Checked In"
  document.getElementById("live-status").innerHTML =
    `CHECKED IN @ TABLE ${table}`;
}

function saveName(table) {
  const name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    localStorage.setItem("customerName", name);
    // Refresh with name in storage to show greeting
    showPersonalizedGreeting(name, table);
    document.getElementById("hero-controls").style.display = "flex";
  } else {
    alert("Please enter a name to continue.");
  }
}

// Scroll Animation Handler
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all animate-on-scroll elements
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

//Cart Functions
// Global Cart State

// Function to handle the + and - buttons on the food cards
function changeQty(btn, delta) {
  const qtySpan = btn.parentElement.querySelector(".qty-count");
  let currentQty = parseInt(qtySpan.innerText);
  currentQty = Math.max(1, currentQty + delta); // Minimum quantity is 1
  qtySpan.innerText = currentQty;
}

// Add items to the persistent storage
function addToCart(name, price, btn) {
  const qtySpan = btn.parentElement.querySelector(".qty-count");
  const quantity = parseInt(qtySpan.innerText);

  // Check if item already exists in cart to update quantity
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  // Save to localStorage so it persists across pages
  localStorage.setItem("quickBiteCart", JSON.stringify(cart));

  // Visual feedback
  btn.innerText = "Added!";
  setTimeout(() => {
    btn.innerHTML = `<span class="material-symbols-outlined">add_shopping_cart</span>Add to Cart`;
  }, 1000);

  updateMobileCartUI();
}

// Update the Mobile Cart Bar at the bottom
function updateMobileCartUI() {
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const mobileCart = document.querySelector(".mobile-cart");
  if (mobileCart) {
    // Show/Hide based on content
    mobileCart.style.display = cartItemsCount > 0 ? "flex" : "none";

    // Update values
    const countDisplay = mobileCart.querySelector(".font-bold");
    const priceDisplay = mobileCart.querySelector("b");

    if (countDisplay) countDisplay.innerText = `${cartItemsCount} Items`;
    if (priceDisplay)
      priceDisplay.innerText = `Rs. ${cartTotalPrice.toLocaleString()}`;
  }
}

// Call this on every page load to restore the cart state
window.addEventListener("DOMContentLoaded", () => {
  updateMobileCartUI();
});

window.addEventListener("load", () => {
  initializeQuickBite();
  initScrollAnimations();
  updateMobileCartUI();
});
