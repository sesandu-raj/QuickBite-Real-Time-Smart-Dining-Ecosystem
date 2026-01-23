let tableNumber = null;
function initializeQuickBite() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableNumber = urlParams.get("table");
  const dynamicArea = document.getElementById("dynamic-greeting");
  const liveStatus = document.getElementById("live-status");

  // Scenario: User scanned a QR code (Table parameter exists)
  if (tableNumber) {
    let userName = localStorage.getItem("customerName");

    // If we don't know their name yet, ask for it
    if (!userName) {
      userName = prompt(
        `${getGreeting()}! Welcome to Table ${tableNumber}. Please enter your name:`,
      );

      // Default to "Guest" if they cancel or leave it empty
      if (!userName || userName.trim() === "") {
        userName = "Guest";
      }

      localStorage.setItem("customerName", userName);
    }

    // Now that we have a name, show the personalized greeting
    showPersonalizedGreeting(userName, tableNumber);
  }
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
