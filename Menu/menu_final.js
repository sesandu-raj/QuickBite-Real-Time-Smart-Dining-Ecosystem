function initMenuNav() {
  const name = localStorage.getItem("customerName");
  const table = localStorage.getItem("assignedTable");

  // If a name exists in storage, update the UI
  if (name) {
    updateNavbarProfile(name, table);
  }
}

function updateNavbarProfile(name, table) {
  const navContainer = document.getElementById("nav-actions");
  const profileSlot = document.getElementById("nav-profile-slot");
  
  if (navContainer && profileSlot) {
    // 1. Add the flex/glass styling class
    navContainer.classList.add("has-user");
    
    // 2. Get the first letter of the name
    const initial = name.charAt(0).toUpperCase();

    // 3. Inject the circular profile icon and switch button
    profileSlot.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <div class="nav-profile-circle" title="${name} (Table ${table || '?'})">
          ${initial}
        </div>
        <button class="btn-change-name" onclick="changeName()" title="Switch User">
          <span class="material-symbols-outlined">sync_alt</span>
        </button>
      </div>
    `;
  }
}

function changeName() {
  // Only remove the name so the user can re-prompt without losing table info
  localStorage.removeItem("customerName");
  
  // Redirect to index.html so the name prompt modal can appear again
  const table = localStorage.getItem("assignedTable");
  if (table) {
    window.location.href = `../index.html?table=${table}`;
  } else {
    window.location.href = `../index.html`;
  }
}

// Ensure the function runs when the page is ready
window.addEventListener('DOMContentLoaded', initMenuNav);