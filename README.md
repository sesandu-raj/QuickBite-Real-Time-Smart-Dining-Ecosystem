# 🍽️ QuickBite: Real-Time Smart Dining Ecosystem

QuickBite is a **contactless, QR-powered web application** designed to streamline the restaurant ordering process. Built on a **serverless NoSQL architecture**, it connects customers and kitchen staff in real time—eliminating manual order taking, reducing wait times, and minimizing human error.

---

## 🚀 Live Demo
👉 **[View Live Project](#)**  
*(Hosted via Firebase Hosting or GitHub Pages)*

---

## 📖 Project Overview

In traditional dining, communication gaps between customers and the kitchen often lead to delays and order mistakes. **QuickBite** solves this problem by providing a dynamic, multi-page web ecosystem:

- Customers scan a **table-specific QR code**
- Access a **live-synced digital menu**
- Place orders instantly
- Track order progress in real time
- Kitchen staff receive and manage orders via a **Kitchen Dashboard**

---

## ✨ Key Technical Achievements

- **🔄 Real-Time Synchronization**  
  Uses Firebase Firestore `onSnapshot` listeners to update UI across devices without page refreshes.

- **📄 Dynamic Data Rendering**  
  A single `details.html` page dynamically renders food data (ingredients, allergens, price) based on the selected item object.

- **💾 Session Persistence**  
  Uses the Web Storage API (`localStorage`) to persist user identity and table assignments across a **10-page architecture**.

- **📊 Composite Querying**  
  Implements advanced Firestore composite queries and indexing to support multiple active orders per table.

---

## 🛠 Tech Stack

**Frontend**
- HTML5  
- CSS3 (Flexbox & Grid)  
- Vanilla JavaScript  

**Backend / Database**
- Firebase Firestore (Real-time NoSQL)

**Session Management**
- Web Storage API (`localStorage`)

**Security**
- Firebase Security Rules  
- Geolocation verification  

---

## 📂 Project Structure & Pages

| Page | Description |
|-----|------------|
| `index.html` | Homepage: User name input & table ID validation |
| `menu.html` | Main menu hub for category navigation |
| `appetizers.html` | Starters category |
| `main_course.html` | Primary meals category |
| `drinks.html` | Beverage menu |
| `deserts.html` | Desserts menu |
| `offers.html` | Promotions, discounts, and combo deals |
| `details.html` | Dynamic item view (ingredients, allergens, etc.) |
| `my_orders.html` | Live order tracker with real-time progress bars |
| `kitchen.html` | Kitchen dashboard for order management |

---

## 🏗 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sesandu-raj/QuickBite-Real-Time-Smart-Dining-Ecosystem.git