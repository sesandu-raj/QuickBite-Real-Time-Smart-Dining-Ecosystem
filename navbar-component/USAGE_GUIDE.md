# QuickBite Reusable Navbar Component

## 📌 Overview

This navbar component includes:

- ✅ Responsive navigation bar with logo and links
- ✅ QR code table detection (`?table=6`)
- ✅ User name prompt modal
- ✅ Profile circle with user initial
- ✅ Order button with styling
- ✅ All JavaScript functionality from `script.js`

---

## 📝 How to Use (Step-by-Step)

### Step 1: Copy the Required Files

Make sure your project has:

- `style.css` (main stylesheet)
- `script.js` (JavaScript functions)

### Step 2: Copy the Navbar Code

1. Open `NAVBAR_CODE.html` in this folder
2. Copy the **entire navbar markup** (between the comments)
3. Paste it into your HTML file

### Step 3: Update the Paths

**IMPORTANT!** Adjust the file paths based on YOUR file location:

#### If your page is in the ROOT folder:

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

<a href="index.html" class="logo" ...>
  <li><a href="index.html">Home</a></li>
  <li><a href="Menu/manu_final.html">Menu</a></li>
  <li><a href="My_Orders/my_orders.html">My Orders</a></li></a
>
```

#### If your page is in the /Menu folder:

```html
<link rel="stylesheet" href="../style.css" />
<script src="../script.js"></script>

<a href="../index.html" class="logo" ...>
  <li><a href="../index.html">Home</a></li>
  <li><a href="manu_final.html">Menu</a></li>
  <li><a href="../My_Orders/my_orders.html">My Orders</a></li></a
>
```

#### If your page is in the /My_Orders folder:

```html
<link rel="stylesheet" href="../style.css" />
<script src="../script.js"></script>

<a href="../index.html" class="logo" ...>
  <li><a href="../index.html">Home</a></li>
  <li><a href="../Menu/manu_final.html">Menu</a></li>
  <li><a href="my_orders.html">My Orders</a></li></a
>
```

---

## 🎯 Complete HTML Template Example

Here's a basic template for your page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Your Page Title | QuickBite</title>

    <!-- Navbar Stylesheets -->
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- COPY-PASTE THE NAVBAR CODE HERE -->
    <!-- (See NAVBAR_CODE.html for the full code) -->

    <main>
      <!-- YOUR PAGE CONTENT GOES HERE -->
    </main>

    <!-- Navigation Scripts -->
    <script src="script.js"></script>
  </body>
</html>
```

---

## 🔧 Navbar Features Explained

### Logo & Navigation

- Clickable logo links to home page
- 3 nav links: Home, Menu, My Orders
- Active state styling for current page

### Order Button

- `btn-order` class with hover effects
- Positioned in the navbar right section

### User Profile

- `nav-profile-slot` displays user's initial when logged in
- Profile circle appears after QR code scan
- Shows greeting with user's name

### QR Code Integration

- Scan QR code with `?table=6` parameter
- Automatically shows name prompt modal
- Saves name to localStorage
- Updates profile and greeting

---

## 📱 Responsive Behavior

The navbar automatically adapts to:

- ✅ Desktop (full navbar)
- ✅ Tablet (compact spacing)
- ✅ Mobile (stacked layout)

All styling is handled by `style.css`

---

## 🚀 Testing Your Implementation

1. **Test Navigation**: Click links to verify they go to the right pages
2. **Test QR Code**: Visit `yourpage.html?table=6`
3. **Test Profile**: Enter name in modal, verify it appears in navbar
4. **Test Persistence**: Refresh page, verify name stays
5. **Test Links**: Logo should navigate to home

---

## ❓ Troubleshooting

| Issue               | Solution                                         |
| ------------------- | ------------------------------------------------ |
| Navbar not styled   | Check `style.css` link path is correct           |
| Buttons not working | Check `script.js` link path is correct           |
| Profile not showing | Make sure `nav-profile-slot` div is in your HTML |
| Links 404           | Update href paths for your folder location       |
| Modal not appearing | Check browser console for errors                 |

---

## 📞 Need Help?

If something breaks:

1. Check the console (F12 → Console tab) for errors
2. Verify all file paths are correct
3. Make sure you copied the ENTIRE navbar section
4. Compare your HTML with the template examples above

---

**Created for QuickBite Group Project** ✨
