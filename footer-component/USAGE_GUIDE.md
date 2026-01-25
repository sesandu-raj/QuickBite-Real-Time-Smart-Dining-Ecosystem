# 🔗 QuickBite Reusable Footer Component

## Overview

This folder contains **reusable footer components** in 3 variants:

- **Standard** - Full-featured, balanced design
- **Minimal** - Compact, essential info only
- **Extended** - Comprehensive with more sections

All footers are **styled consistently** and can be **copied and pasted** into any page!

---

## 📦 Files in This Folder

| File                   | Purpose                            |
| ---------------------- | ---------------------------------- |
| `FOOTER_CODE.html`     | Standard footer (copy-paste)       |
| `FOOTER_MINIMAL.html`  | Compact minimal footer             |
| `FOOTER_EXTENDED.html` | Full-featured extended footer      |
| `EXAMPLE_FOOTER.html`  | Complete page with standard footer |

---

## 🚀 Quick Start (3 Steps)

### Step 1: Choose Your Footer Type

- **Standard** (Most common) → Use `FOOTER_CODE.html`
- **Minimal** (Compact pages) → Use `FOOTER_MINIMAL.html`
- **Extended** (Info-heavy pages) → Use `FOOTER_EXTENDED.html`

### Step 2: Copy the Code

Open the file and copy the entire `<footer>` section

### Step 3: Customize

- Update company name
- Change addresses/contact info
- Update links and social media
- Modify description text

---

## 📋 Footer Variants Explained

### 1️⃣ Standard Footer (RECOMMENDED)

```html
<footer>
  <div class="footer-grid">
    <!-- Brand column -->
    <!-- Quick Links column -->
    <!-- Contact Info column -->
  </div>
  <div class="footer-bottom">
    <!-- Copyright & Legal Links -->
  </div>
</footer>
```

**Features:**

- 3-column layout
- Brand description + social links
- Quick navigation links
- Contact/location info
- Copyright & legal links

**Best for:** Most pages (home, menu, etc.)

### 2️⃣ Minimal Footer

```html
<footer>
  <div class="footer-grid">
    <!-- Single brand -->
    <!-- Short quick links -->
    <!-- Basic contact -->
  </div>
  <div class="footer-bottom">
    <!-- Simplified copyright -->
  </div>
</footer>
```

**Features:**

- Compact 3-column layout
- Minimal description
- Essential links only
- Basic contact info
- Simple copyright

**Best for:** Simple pages, mobile optimization

### 3️⃣ Extended Footer

```html
<footer>
  <div class="footer-grid">
    <!-- Brand column -->
    <!-- Multiple link sections -->
    <!-- Support section -->
    <!-- Full contact info -->
  </div>
  <div class="footer-bottom">
    <!-- Detailed legal links -->
  </div>
</footer>
```

**Features:**

- 4-column layout
- Brand with full description
- Multiple link categories
- Support section
- Phone & email links
- Extended legal links

**Best for:** Large sites, help/support pages

---

## 🔧 Key Elements to Customize

### 1. Company Info

```html
<div class="logo">
  <span class="material-symbols-outlined">all_inclusive</span>
  <h2>QuickBite</h2>
</div>
<p>Your description here</p>
```

### 2. Social Links

```html
<div class="social-links">
  <a href="YOUR_INSTAGRAM_URL" class="social-icon">
    <span class="material-symbols-outlined">share</span>
  </a>
</div>
```

### 3. Navigation Links

```html
<ul class="footer-links">
  <li><a href="your-page.html">Link Name</a></li>
</ul>
```

### 4. Contact Info

```html
<ul class="contact-info">
  <li>
    <span class="material-symbols-outlined">location_on</span>
    <span>Your Address Here</span>
  </li>
  <li>
    <span class="material-symbols-outlined">phone</span>
    <span><a href="tel:+1234567890">Phone</a></span>
  </li>
</ul>
```

### 5. Copyright & Legal

```html
<div class="footer-bottom">
  <p>© 2026 Your Company. All rights reserved.</p>
  <div class="legal-links">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
  </div>
</div>
```

---

## 🎨 Available Classes & Styling

| Class            | Purpose                    |
| ---------------- | -------------------------- |
| `footer`         | Main footer container      |
| `footer-grid`    | 3 or 4 column grid         |
| `footer-brand`   | Brand/logo section         |
| `footer-heading` | Section headings           |
| `footer-links`   | Navigation links list      |
| `contact-info`   | Contact details with icons |
| `social-links`   | Social media links         |
| `social-icon`    | Individual social icon     |
| `footer-bottom`  | Copyright & legal section  |
| `legal-links`    | Legal navigation links     |

All styling is in `style.css` - no custom CSS needed!

---

## 📐 Responsive Behavior

All footers are **fully responsive**:

- ✅ Desktop: Multi-column layout
- ✅ Tablet: Optimized spacing
- ✅ Mobile: Single column stacked layout

No additional CSS required!

---

## 🔗 Where to Place Footer

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    <!-- Navbar -->
    <div style="position: relative; z-index: 10">
      <header>...</header>
    </div>

    <!-- Main Content -->
    <main>...</main>

    <!-- FOOTER GOES HERE -->
    <footer>...</footer>

    <!-- Scripts -->
    <script src="script.js"></script>
  </body>
</html>
```

Footer should be:

- ✅ After `</main>`
- ✅ Inside `<body>`
- ✅ Before `</body>`

---

## 🌐 Icon Reference (Material Symbols)

| Icon            | Use              |
| --------------- | ---------------- |
| `all_inclusive` | Logo/brand       |
| `public`        | Website          |
| `share`         | Social media     |
| `mail`          | Email            |
| `location_on`   | Address          |
| `schedule`      | Hours/time       |
| `phone`         | Phone number     |
| `language`      | Website/language |

Find more at: https://fonts.google.com/icons

---

## ✅ Customization Checklist

```
Before using your footer:
[ ] Update company name in logo
[ ] Change address to real location
[ ] Update phone number
[ ] Change email address
[ ] Add real social media URLs
[ ] Update quick link URLs
[ ] Update copyright year
[ ] Change company description
[ ] Update legal links
[ ] Test on mobile
```

---

## 💡 Pro Tips

1. **Keep links working** - Update all `href="#"` to real URLs
2. **Use consistent styling** - All footers use same colors
3. **Mobile first** - Test footer on phone
4. **Social media** - Add real social links, not #
5. **Responsive images** - Logos scale automatically
6. **Contact info** - Use `href="tel:"` and `href="mailto:"`
7. **Year updates** - Change copyright year annually

---

## 🐛 Troubleshooting

| Issue                    | Solution                         |
| ------------------------ | -------------------------------- |
| Footer not styled        | Check `style.css` is linked      |
| Links not working        | Update `href="#"` to real URLs   |
| Icons not showing        | Check Material Symbols font link |
| Layout broken on mobile  | Check viewport meta tag          |
| Social icons not aligned | Use same icon size everywhere    |

---

## 🎯 Which Footer to Use?

### Use STANDARD if:

- ✅ You need balanced layout
- ✅ You have 3 main sections
- ✅ Most common use case
- ✅ Good for home/menu pages

### Use MINIMAL if:

- ✅ Simple pages
- ✅ Limited footer space
- ✅ Mobile-heavy traffic
- ✅ Minimal information

### Use EXTENDED if:

- ✅ Complex site
- ✅ Many links/sections
- ✅ Help/support pages
- ✅ Full contact details

---

## 🔄 Switching Footer Types

All three footers:

- Use same CSS styling
- Are fully responsive
- Can be swapped easily
- Look consistent with navbar & cards

Just copy-paste and update your links!

---

**Need help? Check EXAMPLE_FOOTER.html for a complete working page!** ✨
