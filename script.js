let tableNumber = null;

function initializeQuickBite() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableNumber = urlParams.get("table");
  const userName = localStorage.getItem("customerName");
  const navContainer = document.getElementById("nav-actions");

  // Only proceed if a table number exists in the URL
  if (tableNumber) {
    localStorage.setItem("assignedTable", tableNumber);

    if (!userName) {
      // 1. Show the custom glass modal
      const overlay = document.getElementById("custom-prompt-overlay");
      const tableDisplay = document.getElementById("prompt-table-display");
      const confirmBtn = document.getElementById("confirm-name-btn");

      if (overlay && tableDisplay) {
        tableDisplay.innerText = `Table ${tableNumber}`;
        overlay.style.display = "flex"; // Reveal the professional glass modal
      }

      // 2. Handle the "Start Dining" button click
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
      // User is already "logged in", update UI immediately
      updateNavbarProfile(userName);
      showPersonalizedGreeting(userName, tableNumber);
    }
  } else {
    // Normal visit: ensure the navbar is in its default state
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
    <div class="nav-profile-circle" 
         data-name="${name}" 
         onclick="location.href='my_orders.html'">
      ${initial}
    </div>
  `;
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

// Run on page load
window.onload = initializeQuickBite;
