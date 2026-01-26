// 1. Safety Check: Use window object to prevent "Identifier already declared" errors
if (typeof firebaseConfig === 'undefined') {
    window.firebaseConfig = {
        apiKey: "AIzaSyBxES9tk3bAFUu64JhDPLgHzPs5hUKLNvM",
        authDomain: "resturant-cb358.firebaseapp.com",
        projectId: "resturant-cb358",
        storageBucket: "resturant-cb358.firebasestorage.app",
        messagingSenderId: "806584741054",
        appId: "1:806584741054:web:314fb1c462eba54c2cc2ef",
    };
}

// 2. Initialize Firebase only if it hasn't been initialized
if (!firebase.apps.length) {
    firebase.initializeApp(window.firebaseConfig);
}

// 3. Set global db variable safely
if (typeof db === 'undefined') {
    window.db = firebase.firestore();
}

/**
 * Main function to track active orders for the current table
 */
function startOrderTracking() {
    const tableNum = localStorage.getItem("assignedTable");
    const container = document.getElementById("orders-container");

    if (!tableNum) {
        if (container) container.innerHTML = `
            <div class="glass-card" style="padding: 40px; text-align: center;">
                <p class="text-muted">No table assigned. Please scan a QR code to view orders.</p>
            </div>`;
        return;
    }

    // 4. Real-time listener for this table
    // Matches the "Delivered" status from your kitchen.js logic
    db.collection("orders")
        .where("table", "==", String(tableNum))
        .where("status", "!=", "Delivered") 
        .onSnapshot((snapshot) => {
            let runningTotal = 0;
            
            if (snapshot.empty) {
                if (container) container.innerHTML = `
                    <div class="glass-card" style="padding: 60px; text-align: center;">
                        <p class="text-muted">No active orders found for Table ${tableNum}.</p>
                    </div>`;
                document.getElementById("table-total-display").innerText = "0";
                return;
            }

            if (container) container.innerHTML = ""; // Clear existing cards

            snapshot.forEach((doc) => {
                const order = doc.data();
                const status = order.status || "Pending";
                runningTotal += order.totalPrice || 0;

                // 5. Handle the item object structure to prevent [object Object]
                const itemDetails = order.items && Array.isArray(order.items)
                    ? order.items.map(item => {
                        return typeof item === 'object' 
                            ? `${item.quantity}x ${item.name}` 
                            : item; // Fallback for old string-only data
                      }).join(", ")
                    : "Items not listed";

                // 6. Create the professional order card
                const orderCard = document.createElement("div");
                orderCard.className = "order-card glass";
                
                // Status Badge Logic
                let statusBadge = `<div class="badge-preparing" style="background: rgba(255,255,255,0.1)">PENDING</div>`;
                if (status === "Preparing") statusBadge = `<div class="badge-preparing">COOKING</div>`;
                if (status === "Ready") statusBadge = `<div class="badge-ready"><span class="material-symbols-outlined">check_circle</span> READY</div>`;

                orderCard.innerHTML = `
                    <div style="flex-grow: 1">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <p style="color: var(--primary); font-size: 0.7rem; font-weight: 800; margin-bottom: 5px;">
                                    ORDER #${doc.id.substring(0,5).toUpperCase()}
                                </p>
                                <h3>Table Service</h3>
                                <p style="color: var(--text-muted); font-size: 0.8rem;">Table ${order.table} • ${order.customer || 'Guest'}</p>
                            </div>
                            ${statusBadge}
                        </div>
                        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
                            <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 70%;">${itemDetails}</p>
                            <div class="total-section">
                                <p class="total-label">BILL</p>
                                <p class="total-amount">Rs. ${order.totalPrice.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(orderCard);
            });

            // Update the running total display for the whole table
            const totalDisplay = document.getElementById("table-total-display");
            if (totalDisplay) totalDisplay.innerText = runningTotal.toLocaleString();
        }, (error) => {
            console.error("Firebase Tracking Error:", error);
            // This usually happens if the Composite Index is missing
            if (container) container.innerHTML = `<p style="color:red; padding:20px;">Tracking Error: Check console for Index Link.</p>`;
        });
}

// Start tracking once the DOM is fully loaded
window.addEventListener('DOMContentLoaded', startOrderTracking);