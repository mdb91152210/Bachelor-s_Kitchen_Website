# Bachelor's Kitchen — Authentic South Indian Recipes #

A modern, interactive web application for discovering and mastering authentic South Indian cuisine. This project features a beautiful dark editorial design with real cooking timers, detailed step-by-step recipes, and a seamless user experience.

---

## 📋 Project Overview

**Bachelor's Kitchen** is a responsive web application designed to teach users how to cook traditional South Indian dishes with precision and ease. The site features:

- ✨ **9+ Authentic Recipes** covering 4 regions of South India
- ⏱️ **Smart Cooking Timers** integrated into each recipe step
- 🎨 **Modern Dark Editorial Design** with warm gold accents
- 📱 **Responsive Layout** optimized for desktop and mobile
- 🧭 **Smooth Navigation** between different pages and recipes
- 🔐 **User Authentication** framework for sign-in/registration

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Advanced styling with CSS variables, gradients, and animations |
| **Vanilla JavaScript** | DOM manipulation, routing, and interactive features |
| **Google Fonts** | Typography (Cormorant Garamond + Outfit) |
| **Unsplash API** | High-quality recipe images |

---

## 📁 File Structure

```
bachelor's kitchen/
├── index.html       # Main HTML file with all pages
├── script.js        # JavaScript logic and recipe database
├── style.css        # Complete styling and design system
└── README.md        # This file
```

---

## 🏗️ HTML Structure

### 1. **Navigation Bar** (`<nav class="navbar">`)
The fixed top navigation includes:
- **Brand Section**: Logo and "Bachelor's Kitchen" text
- **Nav Links**: Home, Recipes, About, Reviews (with active state tracking)
- **Auth Buttons**: "Sign in" and "Get started" buttons
- **Hamburger Menu**: Mobile navigation toggle (hidden on desktop)

```html
<nav class="navbar" id="navbar">
  <!-- Brand with logo emoji and text -->
  <div class="nav-brand" onclick="goTo('home')">
    <div class="nav-logo-mark">🍛</div>
    <div class="nav-wordmark">
      <strong>Bachelor's Kitchen</strong>
      <span>South Indian Cuisine</span>
    </div>
  </div>

  <!-- Navigation Links -->
  <ul class="nav-links" id="main-nav">
    <li><a onclick="goTo('home')" class="active">Home</a></li>
    <li><a onclick="goTo('recipes')">Recipes</a></li>
    <li><a onclick="goTo('about')">About</a></li>
    <li><a onclick="goTo('reviews')">Reviews</a></li>
  </ul>

  <!-- User Area with Auth Buttons -->
  <div class="nav-right" id="nav-user-area">
    <button class="btn btn-ghost btn-sm" onclick="goTo('login')">Sign in</button>
    <button class="btn btn-primary btn-sm" onclick="goTo('login')">Get started</button>
  </div>
</nav>
```

**Key Classes:**
- `.navbar`: Fixed positioning at top with 76px height
- `.nav-brand`: Clickable brand section
- `.nav-links`: Horizontal navigation list
- `.nav-right`: Right-aligned authentication buttons

---

### 2. **Home Page** (`<div class="page" id="pg-home">`)
The hero/landing page features:

- **Hero Section**: Split layout with text on left, images on right
  - **Eyebrow Text**: "Authentic South Indian Recipes" with decorative dot
  - **Main Heading**: "Cook like you grew up in South India"
  - **Description**: Value proposition text
  - **Call-to-Action Buttons**: "Browse Recipes" and "Our story"
  - **Hero Numbers**: Stats display (9+ Recipes, 4 Regions, Smart Timers, Infinite Flavour)
  
- **Hero Cards**: Clickable recipe preview cards showing:
  - Large dish image
  - Region and meal category
  - Recipe name
  - Cooking time and difficulty level
  - "Fan Favourite" badge on featured recipe

**Structure Example:**
```html
<section class="hero">
  <div class="hero-left">
    <!-- Text content and CTA buttons -->
  </div>
  <div class="hero-right">
    <!-- Recipe cards with images -->
    <div class="hero-card main" onclick="goTo('detail', 1)">
      <img src="recipe-image.jpg" alt="Masala Dosa">
      <span class="hero-badge">Fan Favourite</span>
      <div class="hero-card-body">
        <div class="hero-card-label">Tamil Nadu · Breakfast</div>
        <div class="hero-card-name">Masala Dosa</div>
        <div class="hero-card-meta">⏱ 45 min · Easy</div>
      </div>
    </div>
  </div>
</section>
```

---

### 3. **Other Pages** (Recipes, About, Reviews, Login, Detail)
Placeholder pages that are revealed/hidden via JavaScript routing:
- `pg-recipes`: Browse all recipes
- `pg-about`: About the platform
- `pg-reviews`: User testimonials
- `pg-login`: Authentication page
- `pg-detail`: Individual recipe detail view

---

## 📜 JavaScript Functions & Data Structure

### **Recipe Data Model** (`SEED_RECIPES` Array)

Each recipe object contains:

```javascript
{
  id: 1,                          // Unique identifier
  name: "Masala Dosa",            // Recipe name
  category: "Breakfast",          // Meal category
  difficulty: "Easy",             // Skill level
  time: "45 min",                 // Total cook time
  servings: 4,                    // Number of servings
  calories: 380,                  // Per serving
  isVeg: true,                    // Vegetarian flag
  region: "Tamil Nadu",           // Geographic region
  image: "https://...",           // Image URL
  desc: "Description...",         // Long description
  tags: ["Fermented", "Breakfast"],// Searchable tags
  
  ingredients: [                  // Ingredient array
    { amt: "2 cups", name: "Raw rice" },
    { amt: "½ cup", name: "Urad dal" },
    // ... more ingredients
  ],
  
  steps: [                        // Cooking steps array
    { 
      text: "Step instruction...",
      timer: 28800                // Timer duration in seconds (optional)
    },
    // ... more steps
  ]
}
```

### **Navigation & Page Routing** - `goTo()` Function

**Purpose:** Switches between pages and handles view updates
**Works With:** All navigation links and buttons

```javascript
function goTo(pageName, recipeId) {
  // Example: goTo('home') → shows home page
  // Example: goTo('detail', 1) → shows recipe #1 details
  
  // Process:
  // 1. Hide all pages by removing 'active' class
  // 2. Show target page by adding 'active' class
  // 3. Update navbar link highlights
  // 4. Scroll to top for better UX
}
```

**Usage Examples:**
```javascript
goTo('home')           // Navigate to home
goTo('recipes')        // Show recipes page
goTo('detail', 1)      // Show recipe with id=1
goTo('about')          // Show about page
goTo('login')          // Show login page
```

---

### **Recipe Data**

The application includes **6+ detailed recipes** with complete ingredient lists and step-by-step instructions:

#### 1. **Masala Dosa** (Tamil Nadu, Breakfast)
- **Difficulty:** Easy | **Time:** 45 min | **Servings:** 4
- **Description:** Crispy golden dosa filled with spiced potato masala
- **Key Steps:** Soaking → Grinding → Fermentation (8-12h) → Masala preparation → Cooking on tawa
- **Features:** 12 ingredient items, 10 detailed steps with timers

#### 2. **Chettinad Chicken Curry** (Tamil Nadu, Lunch)
- **Difficulty:** Medium | **Time:** 65 min | **Servings:** 4
- **Description:** Deeply aromatic curry with rare Chettinad spices
- **Key Steps:** Dry-roasting spices → Caramelizing onions (18-22 min) → Building masala base → Simmering chicken
- **Unique Element:** Uses kalpasi (stone flower) and complex spice blending

#### 3. **Idli & Sambar** (Tamil Nadu/Karnataka, Breakfast)
- **Difficulty:** Easy | **Time:** 40 min | **Servings:** 6
- **Description:** Cloud-soft steamed rice cakes with golden lentil sambar
- **Key Steps:** Soaking → Grinding → Fermentation → Steaming → Tempering
- **Healthy & Classic:** Low-calorie, nutritious South Indian breakfast

#### 4. **Medu Vada** (South India, Snacks)
- **Difficulty:** Easy | **Time:** 35 min | **Servings:** 4
- **Description:** Golden ring-shaped urad dal fritters
- **Key Technique:** No-water grinding for crispy texture
- **Deep-fried:** Served fresh with coconut chutney and sambar

#### 5. **Kerala Fish Curry** (Kerala, Lunch)
- **Difficulty:** Hard | **Time:** 55 min | **Servings:** 4
- **Description:** Tangy fish curry with mango and coconut milk, cooked in claypot
- **Key Steps:** Marinating → Tempering with fenugreek → Building masala → Gentle fish cooking
- **Premium:** Uses raw green mango or kodampuli for authentic tanginess

#### 6. **Payasam (Vermicelli Kheer)** (Kerala/Tamil Nadu, Dessert)
- **Difficulty:** Medium | **Time:** 45 min | **Servings:** 6
- **Description:** Creamy saffron-kissed vermicelli dessert with cardamom
- **Key Steps:** Saffron blooming → Ghee-roasting nuts → Milk reduction → Final assembly
- **Festive:** Traditional celebration dessert with sophisticated cardamom notes

#### 7. **Bisibelebath** (Karnataka, Lunch)
- **Difficulty:** Medium | **Time:** 60 min | **Servings:** 4
- **Description:** One-pot lentil and rice dish with Bisi Bele spice powder (partially loaded in data)

---

### **Cooking Timers** - Integrated Step-by-Step

Each recipe step can include a `timer` property:

```javascript
steps: [
  { 
    text: "Ferment the batter in a warm place overnight",
    timer: 28800  // 8 hours in seconds
  },
  {
    text: "Sauté onions until golden",
    timer: 480    // 8 minutes in seconds
  }
]
```

**Timer Values Used:**
- **60 seconds** (1 min) - Quick cooking
- **180 seconds** (3 min) - Roasting spices
- **300+ seconds** - Cooking main ingredients
- **28,800 seconds** (8 hours) - Overnight fermentation

---

### **Page Visibility System**

All pages use the `.page` and `.active` CSS classes:

```javascript
// Hide ALL pages
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

// Show target page
document.getElementById(`pg-${pageName}`).classList.add('active');

// Update navbar active link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.classList.toggle('active', link.getAttribute('data-p') === pageName);
});
```

---

## 🎨 CSS Design System

### **Color Palette**

| Variable | Value | Usage |
|----------|-------|-------|
| `--ink` | #0d0b08 | Main dark background |
| `--surface` | #1e1a13 | Card/panel backgrounds |
| `--gold` | #e8a020 | Primary accent & buttons |
| `--gold-2` | #f5c842 | Hover/secondary gold |
| `--cream` | #f4edd8 | Primary text color |
| `--ember` | #d94f2a | Danger/alert color |
| `--leaf` | #4caf7d | Success/vegetarian indicator |

### **Typography**

```css
/* Serif - Headlines & Editorial */
font-family: 'Cormorant Garamond', serif;

/* Sans Serif - Body & UI */
font-family: 'Outfit', sans-serif;

/* Monospace - Code/Numbers */
font-family: 'JetBrains Mono', monospace;
```

### **Key Component Styles**

#### **Navbar** (`.navbar`)
- Fixed positioning: `position: fixed; top: 0; left: 0; right: 0; z-index: 1000`
- Height: `76px` (CSS variable `--nav`)
- Solid state: Semi-transparent dark background with blur filter
- Smooth transitions on scroll (blue/shadow changes)

#### **Buttons** (`.btn`)
- Base: Rounded pill shape (`border-radius: 99px`)
- Primary: Gold background with glow shadow
- Ghost: Transparent with border
- Sizes: `.btn-sm` (small), `.btn-lg` (large), `.btn-block` (full width)
- Hover effects: Elevation (`translateY(-2px)`) + enhanced shadows

#### **Hero Section** (`.hero`)
- Grid layout: 2 columns (text left, images right)
- Full viewport height minus navbar
- Responsive padding: `80px 80px 60px`
- Animated background blobs (pseudo-elements)

#### **Recipe Cards** (`.hero-card`)
- Overlay image with text content
- Badge for special items ("Fan Favourite")
- Clickable to navigate to recipe detail

### **Responsive Design**

The CSS uses media queries (inferred responsive breakpoints):
- **Desktop (>1400px):** Full hero grid layout
- **Mobile (<768px):** Single column, hamburger menu activated
- Navigation adapts: Show hamburger, hide text links

### **Special Effects**

1. **Grain Texture Overlay** (`body::before`):
   - Fractal noise SVG filter
   - Ultra-thin opacity (0.028%) for subtle film grain effect
   - Fixed positioning to prevent scrolling artifact

2. **Scrollbar Customization**:
   - Thin gold scrollbar (5px width)
   - Matches design aesthetic

3. **Smooth Scrolling**:
   - `scroll-behavior: smooth` on HTML element
   - Easing functions: `--ease: cubic-bezier(.22,1,.36,1)`

---

## 🚀 How to Use

### **1. Running the Project**
Simply open `index.html` in a web browser. No build process or dependencies required.

```bash
# Option 1: Direct file open
open index.html

# Option 2: With local server (recommended)
python -m http.server 8000
# Visit: http://localhost:8000
```

### **2. Navigation**
- Click navbar links (Home, Recipes, About, Reviews)
- Click "Browse Recipes" button → Recipes page
- Click recipe cards → Recipe detail page
- Sign in/Get started → Login page

### **3. Viewing Recipes**
1. Go to **Recipes** page
2. Browse available recipes
3. Click a recipe card
4. View ingredients, steps, and cooking timers
5. Follow step-by-step instructions with timer support

### **4. Cooking Timers**
- Timers are embedded in recipe steps
- Shows duration for fermentation, cooking, and prep times
- Timer values in seconds for integration with future timer UI

---

## 📊 Recipe Ingredients Format

Each ingredient follows a standardized format:

```javascript
{
  amt: "2 cups",           // Amount/quantity
  name: "Raw rice"         // Ingredient name
}
```

**Examples:**
- `{ amt: "3 tbsp", name: "Coconut oil" }`
- `{ amt: "lemon-sized", name: "Tamarind block" }`
- `{ amt: "to taste", name: "Salt" }`

---

## ⚙️ Configuration & Customization

### **Adding New Recipes**

1. Add new recipe object to `SEED_RECIPES` array:
```javascript
const SEED_RECIPES = [
  { /* existing recipes */ },
  {
    id: 8,
    name: "Your Recipe Name",
    category: "Breakfast", // or Lunch, Snacks, Dessert
    difficulty: "Easy",    // or Medium, Hard
    time: "45 min",
    servings: 4,
    calories: 350,
    isVeg: true,          // or false
    region: "Region Name",
    image: "image-url",
    desc: "Description",
    tags: ["Tag1", "Tag2"],
    ingredients: [ /* array of ingredients */ ],
    steps: [ /* array of steps */ ]
  }
];
```

### **Customizing Colors**

Edit CSS variables in `:root`:
```css
:root {
  --gold: #e8a020;       /* change primary color */
  --cream: #f4edd8;      /* change text color */
  --ink: #0d0b08;        /* change background */
  /* ... more variables */
}
```

### **Changing Fonts**

Update import URL in CSS header:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');
```

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Desktop | >1200px | Full 2-column hero |
| Tablet | 768-1200px | Adjusted padding |
| Mobile | <768px | Single column, hamburger menu |

---

## 🔒 Future Features (Framework Ready)

- User authentication (login/registration pages exist)
- Favorite recipes saving
- Cooking timer notifications
- Recipe search & filtering
- User reviews and ratings
- Community contributions

---

## 📝 Recipe Metadata

### **Difficulty Levels**
- **Easy**: Suitable for beginners, minimal techniques
- **Medium**: Requires some cooking experience
- **Hard**: Advanced techniques, precise timing

### **Cooking Time Breakdown**
Includes:
- Prep time (soaking, grinding, etc.)
- Cooking time (active heat)
- Fermentation/resting time
- Total time estimate

### **Nutritional Info**
- Calories per serving (approximate)
- Vegetarian/Non-vegetarian flag
- Regional cuisine classification
- Meal category classification

---

## 🎯 Project Goals

✅ Teach authentic South Indian cooking techniques
✅ Provide precise, step-by-step recipes
✅ Beautiful, engaging user interface
✅ Mobile-responsive design
✅ Real cooking timers for accuracy
✅ Community-focused platform

---

## 📄 License & Credits

**Design:** Editorial + Bento Minimalism aesthetic
**Recipes:** Authentic South Indian cuisine
**Images:** Unsplash API (high-quality free images)
**Fonts:** Google Fonts (Cormorant Garamond, Outfit, JetBrains Mono)

---

## 💡 Tips for Cooking with Bachelor's Kitchen

1. **Read the full recipe first** before starting
2. **Measure ingredients precisely** - Indian cooking requires accuracy
3. **Follow fermentation times** - They're critical for taste
4. **Use timers** - Prevents overcooking or undercooking
5. **Prepare all ingredients (mise en place)** before cooking
6. **Use authentic regional spices** for best flavor
7. **Don't skip tempering steps** - They develop flavor depth
8. **Cook with love** - South Indian cooking is a generations-old tradition

---

## 🤝 Support & Feedback

For questions about recipes or the website, refer to the About and Reviews pages for community insights.

---

**Bachelor's Kitchen** — *Master the art of South Indian cooking, one recipe at a time.* 🍛
