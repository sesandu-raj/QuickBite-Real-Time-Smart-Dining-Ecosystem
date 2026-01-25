let tableNumber = null;

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

// Run on page load
window.onload = function () {
  initializeQuickBite();
  initScrollAnimations();
};
