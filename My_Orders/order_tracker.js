/**
 * Main function to track active orders for the current table
 */
function startOrderTracking() {
  const tableNum = localStorage.getItem("assignedTable");
  const customerName = localStorage.getItem("customerName") || "Guest";
  const container = document.getElementById("orders-container");

  // Update header display
  document.getElementById("table-id-display").innerText =
    tableNum || "Not Assigned";
  document.getElementById("user-greet").innerText = `${customerName}'s Orders`;

  if (!tableNum) {
    if (container)
      container.innerHTML = `
            <div class="glass-card" style="padding: 40px; text-align: center;">
                <p class="text-muted">Please scan a QR code to view your orders.</p>
            </div>`;
    return;
  }

  // Query WITHOUT orderBy to avoid requiring composite index
  // We'll sort in JavaScript instead
  db.collection("orders")
    .where("table", "==", String(tableNum))
    .onSnapshot(
      (snapshot) => {
        let runningTotal = 0;
        let allOrders = []; // Collect all orders first

        snapshot.forEach((doc) => {
          allOrders.push({ id: doc.id, ...doc.data() });
        });

        // Sort by timestamp descending (newest first)
        allOrders.sort((a, b) => {
          const timeA = a.timestamp ? a.timestamp.toMillis() : 0;
          const timeB = b.timestamp ? b.timestamp.toMillis() : 0;
          return timeB - timeA;
        });

        if (allOrders.length === 0) {
          if (container)
            container.innerHTML = `
                    <div class="glass-card" style="padding: 60px; text-align: center;">
                        <p class="text-muted">No orders placed yet for this table.</p>
                    </div>`;
          document.getElementById("table-total-display").innerText = "0";
          return;
        }

        if (container) container.innerHTML = ""; // Clear existing cards

        allOrders.forEach((order) => {
          const doc = { id: order.id, data: () => order };
          const status = order.status || "Pending";
          runningTotal += order.totalPrice || 0;

          // Handle the item object structure
          const itemDetails =
            order.items && Array.isArray(order.items)
              ? order.items
                  .map((item) => {
                    return typeof item === "object"
                      ? `${item.quantity}x ${item.name}`
                      : item;
                  })
                  .join(", ")
              : "Items not listed";

          // Create the order card
          const orderCard = document.createElement("div");
          orderCard.className = "order-card glass";

          // Status Badge
          let statusBadge = `<div class="badge-preparing" style="background: rgba(255,255,255,0.1); color: var(--primary);">PENDING</div>`;
          if (status === "Preparing")
            statusBadge = `<div class="badge-preparing">COOKING</div>`;
          if (status === "Ready")
            statusBadge = `<div class="badge-ready"><span class="material-symbols-outlined">check_circle</span> READY</div>`;
          if (status === "Delivered")
            statusBadge = `<div class="badge-ready" style="background: rgba(40,167,69,0.2); color: #28a745;">DELIVERED</div>`;

          orderCard.innerHTML = `
                    <div style="flex-grow: 1">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <p style="color: var(--primary); font-size: 0.7rem; font-weight: 800; margin-bottom: 5px;">
                                    ORDER #${doc.id.substring(0, 5).toUpperCase()}
                                </p>
                                <h3>Table Order</h3>
                                <p style="color: var(--text-muted); font-size: 0.8rem;">Table ${order.table}</p>
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

        // Update the total display
        const totalDisplay = document.getElementById("table-total-display");
        if (totalDisplay)
          totalDisplay.innerText = runningTotal.toLocaleString();
      },
      (error) => {
        console.error("Firebase Tracking Error:", error);
        if (container)
          container.innerHTML = `<p style="color:red; padding:20px;">Error loading orders. Please refresh the page.</p>`;
      },
    );
}

// Start tracking once the DOM is fully loaded
window.addEventListener("DOMContentLoaded", startOrderTracking);
