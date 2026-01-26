const container = document.getElementById("orders-container");

// 1. Listen for data changes - REMOVED orderBy temporarily to ensure data shows up
db.collection("orders").onSnapshot(
  (snapshot) => {
    console.log(
      "Current data: ",
      snapshot.docs.map((doc) => doc.data()),
    ); // Check your console!

    if (snapshot.empty) {
      container.innerHTML = "<p>No orders found in database.</p>";
      return;
    }

    container.innerHTML = "";

    snapshot.forEach((doc) => {
      const order = doc.data();
      const id = doc.id;

      // ONLY create the card if the status is NOT 'Delivered'
      if (order.status !== "Delivered") {
        const itemList =
          order.items && Array.isArray(order.items)
            ? order.items
                .map((i) => {
                  // Check if it's the new object structure or old string structure
                  return typeof i === "object"
                    ? `<li>${i.quantity}x ${i.name}</li>`
                    : `<li>${i}</li>`;
                })
                .join("")
            : "No items";
        const card = document.createElement("div");
        card.className = `order-card ${order.status || "Pending"}`;

        card.innerHTML = `
            <h3>Table ${order.table || "Unknown"}</h3>
            <span class="customer-name">Ordered by: ${order.customer}</span>
            <ul>${itemList}</ul>
            <p>Status: <strong>${order.status || "Pending"}</strong></p>
            <div class="btn-group">
                <button class="prep-btn" onclick="updateStatus('${id}', 'Preparing')">Prepare</button>
                <button class="done-btn" onclick="updateStatus('${id}', 'Delivered')">Mark Delivered</button>
            </div>
        `;
        container.appendChild(card);
      }
    });
  },
  (error) => {
    // This will tell you EXACTLY why it's not working
    console.error("Firebase Subscription Error:", error);
    container.innerHTML = `<p style="color:red">Error: ${error.message}</p>`;
  },
);

function updateStatus(orderId, newStatus) {
  db.collection("orders")
    .doc(orderId)
    .update({
      status: newStatus,
    })
    .then(() => {
      console.log("Status updated to " + newStatus);
    })
    .catch((err) => console.error("Update failed:", err));
  // Function to delete an order from the database
  function deleteOrder(orderId) {
    if (confirm("Are you sure you want to remove this order?")) {
      db.collection("orders")
        .doc(orderId)
        .delete()
        .then(() => {
          console.log("Order deleted successfully!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }
  }
}
