# 📸 QuickBite Photo/Card Component Guide

## Overview

This folder contains **reusable card components** for:

- 🍽️ Food/Menu Items
- 👥 Team Members
- 🏷️ Categories

All components are **styled consistently** and can be **copied and pasted** into any page!

---

## 📦 Files in This Folder

| File                               | Purpose                            |
| ---------------------------------- | ---------------------------------- |
| `FOOD_CARD.html`                   | Single food card code (copy-paste) |
| `TEAM_CARD.html`                   | Single team member card code       |
| `CATEGORY_CARD.html`               | Single category card code          |
| `EXAMPLE_FOOD_CARDS_GRID.html`     | Full page with food grid           |
| `EXAMPLE_TEAM_CARDS_GRID.html`     | Full page with team grid           |
| `EXAMPLE_CATEGORY_CARDS_GRID.html` | Full page with category grid       |

---

## 🚀 Quick Start (3 Steps)

### Step 1: Choose Your Card Type

- **Food Items** → Use `FOOD_CARD.html`
- **Team Members** → Use `TEAM_CARD.html`
- **Categories** → Use `CATEGORY_CARD.html`

### Step 2: Copy the Code

Open the file and copy the entire card `<div>` block

### Step 3: Customize

- Update the image URL
- Change text (title, description, etc.)
- Update prices or titles
- Duplicate for more cards

---

## 🍽️ Food Card Component

```html
<div class="food-card glass animate-on-scroll">
  <div class="card-img" style="background-image: url('YOUR_IMAGE_URL')"></div>
  <div class="card-content">
    <div style="display: flex; justify-content: space-between">
      <h3>Product Name</h3>
      <span class="price">$9.99</span>
    </div>
    <p>Product description goes here</p>
    <button class="btn-order" style="width: 100%">Add to Order</button>
  </div>
</div>
```

**Usage:**

- Use in a `<div class="grid-3">` container for 3-column layout
- Update `background-image` URL to your food photo
- Change h3 text to dish name
- Update price in span
- Modify description

**Classes:**

- `.food-card` - Styling for food items
- `.glass` - Glass morphism effect
- `.animate-on-scroll` - Fade-in animation when scrolling

---

## 👥 Team Member Card Component

```html
<div class="team-card glass animate-on-scroll">
  <div class="portrait-wrapper">
    <div class="portrait" style="background-image: url('PHOTO_URL')"></div>
    <div class="role-icon">
      <span class="material-symbols-outlined">icon_name</span>
    </div>
  </div>
  <h3>Person Name</h3>
  <span class="role-title">Job Title</span>
  <p class="quote">"Their quote here"</p>
</div>
```

**Usage:**

- Use in a `<div class="team-grid">` container
- Update `background-image` to person's photo
- Change icon inside `role-icon` (use Material Icons)
- Update name, title, and quote
- Portrait has grayscale → color on hover effect

**Special Effects:**

- Portrait turns from B&W to color on hover
- Role icon has orange background
- Glass effect + scroll animation

---

## 🏷️ Category Card Component

```html
<div class="category-card glass" onclick="location.href = 'page.html'">
  <div class="cat-img" style="background-image: url('IMAGE_URL')">
    <span class="badge-limited">Limited</span>
  </div>
  <div class="cat-info">
    <div class="cat-header">
      <span class="material-symbols-outlined">icon</span>
      <h3>Category Name</h3>
    </div>
    <p>Category description</p>
  </div>
</div>
```

**Usage:**

- Use in a `<div class="category-grid">` container
- Add `onclick="location.href = 'page.html'"` to make clickable
- Update image URL
- Change icon (Material Icons)
- Update category name and description
- Remove `<span class="badge-limited">` if not limited

**Special Effects:**

- Clickable cards
- Hover effect lifts the card
- Badge for special offers

---

## 🔧 Customization Guide

### Changing Images

Find free images at:

- 🔗 **Unsplash**: https://unsplash.com
- 🔗 **Pexels**: https://pexels.com
- 🔗 **Pixabay**: https://pixabay.com

Copy URL and use:

```html
style="background-image: url('YOUR_URL_HERE')"
```

### Changing Icons

Search Material Symbols at:

- 🔗 https://fonts.google.com/icons

Replace icon name:

```html
<span class="material-symbols-outlined">search_icon_name</span>
```

Common icons:

- `lunch_dining` - Food
- `local_cafe` - Coffee
- `cake` - Dessert
- `restaurant` - Appetizers
- `coffee` - Barista
- `palette` - Artist
- `schedule` - Operations

### Making Cards Clickable

Add to category or team cards:

```html
<div
  class="category-card glass"
  onclick="location.href = 'destination.html'"
></div>
```

---

## 📐 Grid Layouts

### Food Cards Grid

```html
<div class="grid-3">
  <!-- 3 food-card divs here -->
</div>
```

Creates responsive 3-column grid

### Team Cards Grid

```html
<div class="team-grid">
  <!-- 4 team-card divs here -->
</div>
```

Creates responsive auto-fit grid

### Category Cards Grid

```html
<div class="category-grid">
  <!-- category-card divs here -->
</div>
```

Creates responsive flexible grid

---

## 🎨 Styling Classes

| Class                | Effect                           |
| -------------------- | -------------------------------- |
| `.food-card`         | Menu item card styling           |
| `.team-card`         | Team member card styling         |
| `.category-card`     | Category card styling            |
| `.glass`             | Glass morphism background        |
| `.animate-on-scroll` | Fade-in scroll animation         |
| `.badge-limited`     | "Limited" offer badge            |
| `.price`             | Price text (orange color)        |
| `.role-title`        | Job title (orange, uppercase)    |
| `.quote`             | Quote text (muted color, italic) |

---

## ✅ Checklist Before Using

- [ ] `style.css` is linked in `<head>`
- [ ] `script.js` is linked before `</body>` (for animations)
- [ ] Card container div has correct grid class (grid-3, team-grid, category-grid)
- [ ] Image URLs are correct
- [ ] Icons exist (check Material Icons)
- [ ] Text is updated (no placeholder text)
- [ ] onclick href updated (if needed)
- [ ] Prices are correct (if food card)

---

## 🐛 Troubleshooting

| Problem               | Solution                                                |
| --------------------- | ------------------------------------------------------- |
| Cards not styled      | Check `style.css` is linked                             |
| No animation          | Check `script.js` is linked                             |
| Images not showing    | Check image URL is valid                                |
| Icons not showing     | Wrong icon name or missing font link                    |
| Grid is wrong layout  | Wrong grid class (grid-3 vs team-grid vs category-grid) |
| Buttons not clickable | Check `onclick` attribute                               |

---

## 💡 Pro Tips

1. **Keep consistent** - Use same image sizes for all cards
2. **Use quality images** - 800x600px or larger works best
3. **Preview first** - Test on phone and desktop
4. **Duplicate cards** - Copy entire `<div>` to add more
5. **Check alignment** - Text should be readable
6. **Mobile test** - Cards stack on mobile (built-in)

---

## 🎯 Common Use Cases

### Adding a Menu Item

1. Copy `FOOD_CARD.html`
2. Update image URL
3. Change name and description
4. Update price
5. Paste into your menu section

### Adding a Team Member

1. Copy `TEAM_CARD.html`
2. Update portrait image
3. Change icon, name, title, quote
4. Paste into team section

### Adding a Category

1. Copy `CATEGORY_CARD.html`
2. Update image
3. Change icon and category name
4. Add onclick link
5. Remove badge if not limited

---

**Questions? Check the EXAMPLE files for complete working code!** ✨
