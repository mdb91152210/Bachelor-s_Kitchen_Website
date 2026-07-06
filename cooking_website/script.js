/* ============================================================
   BACHELOR'S KITCHEN — MASTER JAVASCRIPT Codes
   
   ============================================================ */

/* ── DATA ─────────────────────────────────────────────────── */
const SEED_RECIPES = [
  {
    id: 1, name: "Masala Dosa", category: "Breakfast", difficulty: "Easy",
    time: "45 min", servings: 4, calories: 380, isVeg: true,
    region: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=85",
    desc: "Crispy golden dosa filled with spiced potato masala — the king of South Indian breakfasts, loved by millions.",
    tags: ["Fermented", "Breakfast", "Classic"],
    ingredients: [
      { amt: "2 cups",      name: "Raw rice" },
      { amt: "½ cup",       name: "Urad dal (split black gram)" },
      { amt: "1 tsp",       name: "Fenugreek seeds" },
      { amt: "4 medium",    name: "Potatoes, boiled & peeled" },
      { amt: "2 large",     name: "Onions, finely sliced" },
      { amt: "1 tsp",       name: "Mustard seeds" },
      { amt: "3",           name: "Green chillies, slit" },
      { amt: "1 inch",      name: "Fresh ginger, grated" },
      { amt: "12–15 leaves",name: "Fresh curry leaves" },
      { amt: "½ tsp",       name: "Turmeric powder" },
      { amt: "3 tbsp",      name: "Coconut oil or ghee" },
      { amt: "to taste",    name: "Salt" }
    ],
    steps: [
      { text: "Soak rice and fenugreek seeds together for 6 hours. Soak urad dal separately for 4 hours. This soaking is the foundation — don't rush it.", timer: null },
      { text: "Drain and grind urad dal first to a silky, airy batter using minimal water. Then grind the rice mixture to a coarser, smooth batter. Combine both, add salt, mix gently.", timer: null },
      { text: "Ferment the batter in a warm place overnight (8–12 hours). It should rise, turn slightly tangy, and develop tiny bubbles — the magic of fermentation.", timer: 28800 },
      { text: "For the masala: Heat oil in a heavy kadai. Add mustard seeds and wait for them to pop. Add curry leaves carefully (they splutter).", timer: 60 },
      { text: "Add sliced onions and sauté on medium flame until golden, translucent, and slightly caramelised — about 8 minutes.", timer: 480 },
      { text: "Add ginger, green chillies, turmeric. Stir for 1 minute. Then add the roughly mashed potatoes and salt. Mix well and cook 4–5 minutes until combined. Set aside.", timer: 300 },
      { text: "Heat a cast-iron tawa on high. Drizzle a few drops of water — it should sizzle and evaporate instantly. Wipe with a cut onion dipped in oil.", timer: null },
      { text: "Pour a ladle of batter in the centre. Using the bottom of the ladle, spread in quick, confident concentric circles to make a thin disc. Drizzle oil along the edges.", timer: null },
      { text: "Cook on medium-high until the edges lift and the surface looks dry (no wet batter visible). The bottom should be deep golden. Takes about 2–3 minutes.", timer: 150 },
      { text: "Add a spoonful of potato masala on one half. Fold the dosa over the filling. Serve immediately with coconut chutney and sambar." }
    ]
  },
  {
    id: 2, name: "Chettinad Chicken Curry", category: "Lunch", difficulty: "Medium",
    time: "65 min", servings: 4, calories: 520, isVeg: false,
    region: "Chettinad, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=85",
    desc: "Deeply aromatic curry ground fresh from rare Chettinad spices — one of India's most complex and celebrated regional dishes.",
    tags: ["Spicy", "Aromatic", "Slow-cooked"],
    ingredients: [
      { amt: "1 kg",    name: "Chicken, curry cut pieces" },
      { amt: "3 large", name: "Onions, finely chopped" },
      { amt: "3",       name: "Ripe tomatoes, roughly chopped" },
      { amt: "2 tbsp",  name: "Ginger-garlic paste" },
      { amt: "2 tbsp",  name: "Coriander seeds" },
      { amt: "1½ tbsp", name: "Whole black pepper" },
      { amt: "6–8",     name: "Dry Kashmiri red chillies" },
      { amt: "2 pieces",name: "Kalpasi (stone flower / dagad phool)" },
      { amt: "2",       name: "Star anise" },
      { amt: "½ cup",   name: "Freshly grated coconut" },
      { amt: "4 tbsp",  name: "Cold-pressed coconut oil" },
      { amt: "20 leaves",name: "Fresh curry leaves" }
    ],
    steps: [
      { text: "Dry-roast coriander seeds, black pepper, red chillies, kalpasi, and star anise in a heavy pan on low-medium heat, stirring constantly, until fragrant and one shade darker — about 3 minutes. Cool completely, then grind to a fine powder.", timer: 180 },
      { text: "In the same pan (now a heavy kadai), heat coconut oil. Add a big handful of curry leaves — stand back, they splutter. Add chopped onions.", timer: null },
      { text: "Fry onions on medium heat, stirring occasionally, for 18–22 minutes until deeply golden brown. Do not rush this — the colour equals flavour depth.", timer: 1200 },
      { text: "Add ginger-garlic paste and stir constantly for 4 minutes until the raw smell fully disappears and the paste turns light golden.", timer: 240 },
      { text: "Add tomatoes and cook on medium-high, stirring, until completely broken down and oil separates at the sides — about 8–10 minutes.", timer: 540 },
      { text: "Add chicken pieces. Turn heat to high and seal the chicken for 5–6 minutes, tossing to coat with the masala base.", timer: 360 },
      { text: "Add the freshly ground Chettinad spice powder and salt. Mix thoroughly. Add 1½ cups hot water. Stir, cover, reduce heat to medium-low.", timer: null },
      { text: "Simmer covered for 25 minutes until the chicken is completely tender and falling off the bone.", timer: 1500 },
      { text: "Grind grated coconut with a splash of water to a smooth paste. Stir into the curry. Simmer uncovered for 10 more minutes to thicken the gravy.", timer: 600 },
      { text: "Garnish with fresh curry leaves. Rest 5 minutes before serving with steamed rice, idiyappam, or lacey appam." }
    ]
  },
  {
    id: 3, name: "Idli & Sambar", category: "Breakfast", difficulty: "Easy",
    time: "40 min", servings: 6, calories: 290, isVeg: true,
    region: "Tamil Nadu / Karnataka",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900&q=85",
    desc: "Pillowy, cloud-soft steamed rice cakes with golden lentil sambar — the quintessential South Indian breakfast, perfect any time of day.",
    tags: ["Healthy", "Steamed", "Classic"],
    ingredients: [
      { amt: "3 cups",      name: "Idli rice (parboiled rice)" },
      { amt: "1 cup",       name: "Urad dal (whole)" },
      { amt: "1 cup",       name: "Toor dal (split pigeon pea)" },
      { amt: "10",          name: "Small onions (shallots), halved" },
      { amt: "2",           name: "Tomatoes, diced" },
      { amt: "lemon-sized", name: "Tamarind block" },
      { amt: "2½ tbsp",     name: "Sambar powder (homemade or store-bought)" },
      { amt: "1 tsp",       name: "Mustard seeds" },
      { amt: "¼ tsp",       name: "Asafoetida (hing)" },
      { amt: "4",           name: "Dried red chillies" },
      { amt: "2 tbsp",      name: "Pure ghee" },
      { amt: "½ tsp",       name: "Turmeric powder" }
    ],
    steps: [
      { text: "Soak idli rice for 5 hours and urad dal separately for 2 hours. Grind urad dal to a very light, airy, fluffy batter (beat air into it). Grind rice to a smooth batter. Combine with salt, ferment 8–12 hours.", timer: 36000 },
      { text: "Pressure-cook toor dal with turmeric and 2.5 cups water for 5 whistles. Open, whisk smooth until no lumps remain.", timer: 900 },
      { text: "Soak tamarind in ½ cup warm water for 10 minutes. Squeeze and extract all the pulp. Discard fibres.", timer: 600 },
      { text: "Combine the cooked dal, tamarind extract, shallots, tomatoes, sambar powder, and 2 more cups water in a pot. Bring to a rolling boil.", timer: 300 },
      { text: "Reduce heat and simmer uncovered for 18 minutes until vegetables are soft, flavours have melded, and sambar has thickened slightly.", timer: 1080 },
      { text: "Heat ghee in a small tempering pan. Add mustard seeds — let them pop. Add dried chillies, hing, and curry leaves. Pour immediately into the simmering sambar. Cover for 2 minutes.", timer: 90 },
      { text: "Oil the idli moulds generously. Pour fermented batter into each cavity up to ¾ full. Steam on high heat for exactly 12 minutes.", timer: 720 },
      { text: "Insert a wet toothpick — it should come out clean. Let idlis cool 2 minutes before unmoulding with a wet spoon. Serve with sambar and fresh coconut chutney." }
    ]
  },
  {
    id: 4, name: "Medu Vada", category: "Snacks", difficulty: "Easy",
    time: "35 min", servings: 4, calories: 325, isVeg: true,
    region: "South India",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=900&q=85",
    desc: "Golden, ring-shaped urad dal fritters — crispy on the outside, cloud-soft within. Temple food and street food in one.",
    tags: ["Deep-fried", "Crispy", "Protein-rich"],
    ingredients: [
      { amt: "2 cups",   name: "Urad dal (skinned, split)" },
      { amt: "3",        name: "Green chillies, finely chopped" },
      { amt: "1 inch",   name: "Fresh ginger, finely grated" },
      { amt: "1 tsp",    name: "Whole black pepper, coarsely crushed" },
      { amt: "1 tsp",    name: "Cumin seeds" },
      { amt: "10 leaves",name: "Curry leaves, finely torn" },
      { amt: "2 tbsp",   name: "Freshly grated coconut" },
      { amt: "to taste", name: "Salt" },
      { amt: "for deep frying", name: "Refined oil" }
    ],
    steps: [
      { text: "Soak urad dal for 3–4 hours. Drain COMPLETELY — spread on a towel and pat dry. Excess moisture makes soft, oil-absorbing vadas instead of crisp ones.", timer: 10800 },
      { text: "Grind dal in a mixer/grinder in short pulses — do NOT add water. Scrape the sides repeatedly. You want a very thick, sticky, fluffy batter that holds its shape.", timer: null },
      { text: "Transfer to a bowl. Mix in chillies, ginger, pepper, cumin, curry leaves, coconut, and salt. Beat the mixture vigorously with your hand for 2 minutes to develop air pockets — this gives the soft interior.", timer: null },
      { text: "Heat oil in a deep kadai or wok to 175–180°C. Test: drop a small bead of batter — it should rise to the surface in 2–3 seconds. Too fast = too hot.", timer: 360 },
      { text: "Wet both palms. Take a lemon-sized ball of batter, flatten to a disc, make a hole in the centre with your thumb. Gently slide into hot oil (don't drop from height).", timer: null },
      { text: "Fry 3–4 at a time on medium heat for 5–6 minutes, turning once midway, until evenly deep golden brown. Do not overcrowd — oil temperature drops.", timer: 330 },
      { text: "Drain on paper towels. Serve immediately with coconut chutney (for dipping) and sambar (for dunking). The crunch lasts only 15 minutes — eat fresh!" }
    ]
  },
  {
    id: 5, name: "Kerala Fish Curry", category: "Lunch", difficulty: "Hard",
    time: "55 min", servings: 4, calories: 445, isVeg: false,
    region: "Kerala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=85",
    desc: "Bold, tangy fish curry cooked with raw mango and coconut milk in a traditional claypot — pure Malabar coastal soul.",
    tags: ["Seafood", "Tangy", "Coconut"],
    ingredients: [
      { amt: "750g",     name: "King fish (surmai) or any firm fish, sliced" },
      { amt: "1 medium", name: "Raw green mango, sliced (or ½ cup kodampuli)" },
      { amt: "1 cup",    name: "Thick coconut milk (first press)" },
      { amt: "15",       name: "Small shallots, roughly sliced" },
      { amt: "2 inch",   name: "Fresh ginger, julienned" },
      { amt: "8 cloves", name: "Garlic, lightly crushed" },
      { amt: "3 tbsp",   name: "Kashmiri chilli powder (bright red, mild heat)" },
      { amt: "½ tsp",    name: "Turmeric powder" },
      { amt: "½ tsp",    name: "Fenugreek seeds" },
      { amt: "20 leaves",name: "Curry leaves" },
      { amt: "5 tbsp",   name: "Cold-pressed coconut oil" },
      { amt: "to taste", name: "Salt" }
    ],
    steps: [
      { text: "Marinate fish slices with turmeric, a pinch of chilli powder, and salt. Let it sit 15–20 minutes while you prep everything else.", timer: 900 },
      { text: "Heat coconut oil in a claypot (manchatti) on medium flame. Add fenugreek seeds — they should turn light brown in 30 seconds. Add curry leaves.", timer: 60 },
      { text: "Add shallots and sauté 4–5 minutes until translucent. Add julienned ginger and crushed garlic. Sauté 3 more minutes.", timer: 480 },
      { text: "Make a paste with chilli powder, turmeric, and 3 tbsp water. Add to the pot. Fry this masala paste on medium heat for 5–6 minutes until oil separates and the raw chilli smell transforms into a roasted aroma.", timer: 360 },
      { text: "Add raw mango pieces and 1 cup water. Season generously with salt. Bring to a vigorous boil.", timer: 300 },
      { text: "Gently add the marinated fish pieces. Do NOT stir — only gently shake the pot to coat. This protects the fish from breaking.", timer: null },
      { text: "Cook uncovered on medium heat for 15–18 minutes. The fish will cook through and the gravy will reduce and deepen in colour.", timer: 1020 },
      { text: "Pour coconut milk in a slow circle around the edges of the curry — never directly over the fish. Gently tilt and swirl the pot. Simmer on LOW for exactly 5 minutes. Never let it boil vigorously after adding coconut milk — it will split.", timer: 300 },
      { text: "Remove from heat. This curry is even better the next day as the fish absorbs all the flavours. Serve with steamed red rice (Kerala's preference) or plain rice." }
    ]
  },
  {
    id: 6, name: "Payasam (Vermicelli Kheer)", category: "Dessert", difficulty: "Medium",
    time: "45 min", servings: 6, calories: 370, isVeg: true,
    region: "Kerala / Tamil Nadu",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=85",
    desc: "Creamy, saffron-kissed vermicelli payasam with cardamom and roasted nuts — the dessert at every celebration.",
    tags: ["Sweet", "Festive", "Creamy"],
    ingredients: [
      { amt: "1 cup",   name: "Roasted vermicelli (semiya)" },
      { amt: "1 litre", name: "Full-fat milk (the best quality you can find)" },
      { amt: "¾ cup",   name: "Sugar (adjust to taste)" },
      { amt: "3 tbsp",  name: "Pure ghee" },
      { amt: "1 tsp",   name: "Green cardamom powder (freshly ground)" },
      { amt: "a big pinch", name: "Saffron strands" },
      { amt: "20",      name: "Cashew nuts, whole" },
      { amt: "2 tbsp",  name: "Golden raisins" },
      { amt: "15",      name: "Almonds, thinly sliced" },
      { amt: "1 tsp",   name: "Pure rose water" }
    ],
    steps: [
      { text: "Steep saffron strands in 3 tbsp warm milk. Crush them slightly between your fingers first to release maximum colour and aroma. Set aside 10 minutes.", timer: 600 },
      { text: "Heat ghee in a thick-bottomed wide pan on medium heat. Fry cashews, stirring constantly, until golden. Remove and set aside. In the same ghee, fry raisins until plump. Remove. Fry almonds 30 seconds. Remove all nuts.", timer: 180 },
      { text: "In the same pan with remaining ghee, add vermicelli (if unroasted, roast until fragrant and light golden). Add full-fat milk and bring to a full boil on medium-high, stirring often.", timer: null },
      { text: "Reduce to medium-low. Let the milk simmer, stirring frequently (every minute or so), for 15 minutes. The milk will reduce and thicken noticeably.", timer: 900 },
      { text: "Add sugar and the bloomed saffron milk. Stir well. Continue cooking another 8–10 minutes, stirring almost constantly, until the payasam reaches your desired consistency (it thickens further as it cools).", timer: 540 },
      { text: "Remove from heat. Stir in cardamom powder and rose water. Fold in ¾ of the fried nuts.", timer: null },
      { text: "Garnish the top lavishly with remaining nuts and sliced almonds. Serve warm immediately, or cool completely and refrigerate — both versions are divine. The chilled version is thicker and extra creamy." }
    ]
  },
  {
    id: 7, name: "Bisibelebath", category: "Lunch", difficulty: "Medium",
    time: "60 min", servings: 4, calories: 490, isVeg: true,
    region: "Karnataka",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=85",
    desc: "Karnataka's beloved one-pot comfort food — spiced rice, lentils and vegetables bathed in ghee-fried nuts and Chettinad-spiced powder.",
    tags: ["One-pot", "Comfort", "Hearty"],
    ingredients: [
      { amt: "1 cup",     name: "Sona masoori rice" },
      { amt: "¾ cup",     name: "Toor dal (split pigeon pea)" },
      { amt: "1½ cups",   name: "Mixed vegetables (carrot, beans, peas, potato)" },
      { amt: "lemon-sized",name: "Tamarind block" },
      { amt: "3 tbsp",    name: "Bisibelebath powder (store-bought or homemade)" },
      { amt: "4 tbsp",    name: "Pure ghee" },
      { amt: "1 tbsp",    name: "Jaggery, grated" },
      { amt: "1 tsp",     name: "Mustard seeds" },
      { amt: "4",         name: "Dried red chillies" },
      { amt: "15 leaves", name: "Fresh curry leaves" },
      { amt: "15",        name: "Cashew nuts, halved" },
      { amt: "½ tsp",     name: "Turmeric powder" }
    ],
    steps: [
      { text: "Wash rice and toor dal together. Pressure cook with turmeric and 4 cups water for 5–6 whistles. The rice and dal should be very soft and slightly mushy. Open and stir roughly.", timer: 1200 },
      { text: "Soak tamarind in 1 cup warm water for 10 minutes. Squeeze and extract thick juice. Strain out fibres and seeds.", timer: 600 },
      { text: "Pressure cook or steam the mixed vegetables until just tender (not mushy). Alternatively, cook in a pot with little water.", timer: 480 },
      { text: "In a large, heavy pot, add tamarind extract and 2 more cups water. Bring to a boil. Add bisibelebath powder, jaggery, salt, cooked vegetables. Boil 10 minutes.", timer: 600 },
      { text: "Add the mashed rice-dal mixture. Stir everything together vigorously. The consistency should be pourable but thick — like a thicker dal. Add water if needed.", timer: null },
      { text: "Cook on medium-low heat, stirring CONSTANTLY (it sticks badly), for 15 minutes. The bisibelebath will thicken, deepen in colour and flavour.", timer: 900 },
      { text: "Make tempering in a separate pan: heat ghee, fry cashews golden, add mustard seeds, then red chillies and curry leaves. Pour everything — the ghee and all — over the bisibelebath. Do not stir, leave the tempering floating on top.", timer: 120 },
      { text: "Serve piping hot with papad, pickle, and a generous drizzle of extra ghee. A bowl of cold curd on the side is tradition and balances the spice perfectly." }
    ]
  },
  {
    id: 8, name: "Chickpea Sundal", category: "Snacks", difficulty: "Easy",
    time: "25 min", servings: 4, calories: 210, isVeg: true,
    region: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=900&q=85",
    desc: "Temple-style spiced chickpea stir-fry with fresh coconut — a healthy, protein-packed snack eaten during festivals and evenings.",
    tags: ["Healthy", "Protein", "Quick"],
    ingredients: [
      { amt: "2 cups",    name: "White chickpeas, soaked overnight" },
      { amt: "½ cup",     name: "Freshly grated coconut" },
      { amt: "1 tsp",     name: "Mustard seeds" },
      { amt: "1 tsp",     name: "Urad dal (skinned, split)" },
      { amt: "3",         name: "Dried red chillies, broken" },
      { amt: "¼ tsp",     name: "Asafoetida (hing)" },
      { amt: "12 leaves", name: "Fresh curry leaves" },
      { amt: "2 tbsp",    name: "Coconut oil or refined oil" },
      { amt: "to taste",  name: "Salt" }
    ],
    steps: [
      { text: "Pressure cook soaked chickpeas with salt and 3 cups water for 5–6 whistles. They should be fully cooked but firm — not mushy. Drain and set aside. Reserve the cooking liquid for a soup.", timer: 1200 },
      { text: "Heat coconut oil in a wide kadai on medium heat. The wider the pan, the better — you want to toss, not steam.", timer: null },
      { text: "Add mustard seeds. Wait for them to splutter and pop. Add urad dal — fry 30 seconds until golden. Add broken red chillies — 15 seconds.", timer: 60 },
      { text: "Add asafoetida and immediately add curry leaves (the hing's aroma needs to bloom in the hot oil). Stir 15 seconds.", timer: 30 },
      { text: "Add drained chickpeas. Season with salt. Toss well to coat every chickpea with the tempering.", timer: null },
      { text: "Cook on medium heat for 4–5 minutes, tossing occasionally. The chickpeas should develop a slight chew and absorb the aromatic oil.", timer: 270 },
      { text: "Remove from heat. Add freshly grated coconut. Toss gently. Serve warm as temple prasad, evening snack, or a healthy pre-workout bite." }
    ]
  },
  {
    id: 9, name: "Appam with Coconut Stew", category: "Breakfast", difficulty: "Medium",
    time: "50 min", servings: 4, calories: 355, isVeg: true,
    region: "Kerala",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85",
    desc: "Lacy, cloud-centred Kerala rice hoppers paired with a delicate, aromatic coconut milk vegetable stew — Sunday breakfast perfection.",
    tags: ["Fermented", "Coconut", "Breakfast"],
    ingredients: [
      { amt: "2 cups",  name: "Raw rice, soaked 4 hours" },
      { amt: "½ cup",   name: "Cooked rice (day-old works great)" },
      { amt: "1 cup",   name: "Thin coconut milk (second press)" },
      { amt: "½ tsp",   name: "Instant yeast" },
      { amt: "1 tsp",   name: "Sugar" },
      { amt: "2",       name: "Potatoes, cubed" },
      { amt: "2",       name: "Carrots, thickly sliced" },
      { amt: "½ cup",   name: "Green peas" },
      { amt: "1 cup",   name: "Thick coconut milk (first press)" },
      { amt: "1 stick", name: "Cinnamon, small" },
      { amt: "3",       name: "Green chillies, slit" },
      { amt: "to taste",name: "Salt" }
    ],
    steps: [
      { text: "Drain soaked raw rice. Grind with the cooked rice and thin coconut milk to a very smooth, silky batter. No grittiness — feel the batter between fingers.", timer: null },
      { text: "Dissolve yeast and sugar in 2 tbsp warm water. Let it proof 10 minutes until frothy and bubbly.", timer: 600 },
      { text: "Mix yeast into batter with salt. The consistency should coat the back of a spoon. Ferment covered in a warm spot for 6–8 hours or overnight.", timer: 21600 },
      { text: "For stew: in a pan, add vegetables, cinnamon, green chillies, thin coconut milk, and 1 cup water. Cook on medium heat 10–12 minutes until vegetables are tender.", timer: 720 },
      { text: "Add thick coconut milk to stew. Season with salt. Simmer on LOW for 3–4 minutes only. Do NOT boil hard — coconut milk breaks and becomes grainy.", timer: 210 },
      { text: "Heat a seasoned appam pan (appa chatti) or small wok on medium. When hot enough, pour one ladle of batter into the centre.", timer: null },
      { text: "Immediately lift the pan and swirl it in quick, confident circles so batter coats the sides and a thicker puddle remains in the centre. Place back on heat.", timer: null },
      { text: "Cover with a lid. Cook 2–3 minutes until the centre is set and cooked through (not wet/sticky) and the lacy edges are crisp and golden. Serve immediately alongside warm stew.", timer: 150 }
    ]
  }
];

/* ── STATE ────────────────────────────────────────────────── */
let DB = {
  users:   JSON.parse(localStorage.getItem('bk_users')   || '[]'),
  recipes: JSON.parse(localStorage.getItem('bk_recipes') || 'null') || [...SEED_RECIPES],
  reviews: JSON.parse(localStorage.getItem('bk_reviews') || '[]'),
};
let currentUser = JSON.parse(localStorage.getItem('bk_me') || 'null');
let activeFilter = 'All';
let currentDetailId = null;

// Seed admin
if (!DB.users.find(u => u.email === 'admin@kitchen.com')) {
  DB.users.push({ id: 'adm1', name: 'Kitchen Admin', email: 'admin@kitchen.com', password: 'admin123', role: 'admin', joined: new Date().toISOString() });
  persist();
}

function persist() {
  localStorage.setItem('bk_users',   JSON.stringify(DB.users));
  localStorage.setItem('bk_recipes', JSON.stringify(DB.recipes));
  localStorage.setItem('bk_reviews', JSON.stringify(DB.reviews));
  if (currentUser) localStorage.setItem('bk_me', JSON.stringify(currentUser));
}

/* ── NAVIGATION ───────────────────────────────────────────── */
function goTo(page, param) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const el = document.getElementById('pg-' + page);
  if (el) el.classList.add('active');

  const link = document.querySelector(`.nav-links a[data-p="${page}"]`);
  if (link) link.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu
  document.querySelector('.nav-links')?.classList.remove('open');
  document.querySelector('.nav-right')?.classList.remove('open');

  // Page init
  switch (page) {
    case 'home':    buildHome();   break;
    case 'recipes': buildRecipes(); break;
    case 'detail':  buildDetail(param); currentDetailId = param; break;
    case 'reviews': buildReviews(); break;
    case 'admin':   guardAdmin();  break;
    case 'login':   resetAuth();   break;
  }
}

/* ── AUTH ─────────────────────────────────────────────────── */
function doLogin(email, pw) {
  const u = DB.users.find(u => u.email === email && u.password === pw);
  if (!u) return null;
  currentUser = u;
  persist();
  refreshNav();
  return u;
}
function doRegister(name, email, pw) {
  if (DB.users.find(u => u.email === email)) return null;
  const u = { id: 'u' + Date.now(), name, email, password: pw, role: 'user', joined: new Date().toISOString() };
  DB.users.push(u);
  currentUser = u;
  persist();
  refreshNav();
  return u;
}
function doLogout() {
  currentUser = null;
  localStorage.removeItem('bk_me');
  refreshNav();
  goTo('home');
  toast('You\'ve been signed out', 'ok');
}

function refreshNav() {
  const el = document.getElementById('nav-user-area');
  if (!el) return;
  if (currentUser) {
    el.innerHTML = `
      <span style="font-size:.82rem;color:var(--cream-2);font-weight:500">Hi, ${currentUser.name.split(' ')[0]}</span>
      ${currentUser.role === 'admin' ? `<button class="btn btn-ghost btn-sm" onclick="goTo('admin')">⚙ Admin</button>` : ''}
      <button class="btn btn-ghost btn-sm" onclick="doLogout()">Sign out</button>
    `;
  } else {
    el.innerHTML = `
      <button class="btn btn-ghost btn-sm" onclick="goTo('login')">Sign in</button>
      <button class="btn btn-primary btn-sm" onclick="goTo('login')">Get started</button>
    `;
  }
}

function guardAdmin() {
  if (!currentUser || currentUser.role !== 'admin') {
    toast('Admin access required', 'err');
    goTo('login');
    return;
  }
  buildAdmin();
}

/* ── HOME ─────────────────────────────────────────────────── */
function buildHome() {
  buildFeaturedBento();
}

function buildFeaturedBento() {
  const g = document.getElementById('bento-grid');
  if (!g) return;
  const picks = DB.recipes.slice(0, 5);
  g.innerHTML = picks.map((r, i) => `
    <div class="bento-item" onclick="goTo('detail',${r.id})" style="${i === 0 ? '' : ''}">
      <img src="${r.image}" alt="${r.name}" loading="lazy">
      <div class="bento-overlay"></div>
      <div class="bento-body">
        <div class="bento-cat">${r.region}</div>
        <div class="bento-name">${r.name}</div>
        <div class="bento-tags">${r.tags.map(t => `<span class="bento-tag">${t}</span>`).join('')}</div>
        <div class="bento-cta">View Recipe →</div>
      </div>
    </div>
  `).join('');
}

/* ── RECIPES ──────────────────────────────────────────────── */
function buildRecipes() {
  renderRecipeGrid();
}

function renderRecipeGrid() {
  const g = document.getElementById('recipe-grid');
  if (!g) return;

  const q = (document.getElementById('recipe-q')?.value || '').toLowerCase();
  let list = DB.recipes;

  if (activeFilter !== 'All') {
    if (['Breakfast','Lunch','Snacks','Dessert'].includes(activeFilter))
      list = list.filter(r => r.category === activeFilter);
    else if (activeFilter === 'Veg')   list = list.filter(r => r.isVeg);
    else if (activeFilter === 'Non-Veg') list = list.filter(r => !r.isVeg);
    else if (activeFilter === 'Easy' || activeFilter === 'Medium' || activeFilter === 'Hard')
      list = list.filter(r => r.difficulty === activeFilter);
  }
  if (q) list = list.filter(r => r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.region.toLowerCase().includes(q));

  if (!list.length) {
    g.innerHTML = `<div class="empty-msg" style="grid-column:1/-1"><div class="e-ico">🍽️</div><p>No recipes match your search.<br>Try a different filter.</p></div>`;
    return;
  }

  g.innerHTML = list.map(r => `
    <div class="recipe-card" onclick="goTo('detail',${r.id})">
      <div class="recipe-card-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <span class="recipe-card-badge ${r.isVeg ? 'badge-veg' : 'badge-nonveg'}">${r.isVeg ? '🌿 Veg' : '🍖 Non-Veg'}</span>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-card-region">${r.region}</div>
        <div class="recipe-card-name">${r.name}</div>
        <div class="recipe-card-desc">${r.desc}</div>
        <div class="recipe-card-footer">
          <div class="recipe-card-footer-left">
            <span>⏱ ${r.time}</span>
            <span>👥 ${r.servings}</span>
          </div>
          <span class="diff-pill diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilter(pill, f) {
  document.querySelectorAll('.pill-filter').forEach(p => p.classList.remove('on'));
  pill.classList.add('on');
  activeFilter = f;
  renderRecipeGrid();
}

/* ── RECIPE DETAIL ────────────────────────────────────────── */
function buildDetail(id) {
  const r = DB.recipes.find(r => r.id == id);
  if (!r) return;

  document.getElementById('dt-img').src     = r.image;
  document.getElementById('dt-region').textContent   = r.region;
  document.getElementById('dt-title').textContent    = r.name;
  document.getElementById('dt-desc').textContent     = r.desc;
  document.getElementById('dt-cat').textContent      = r.category;
  document.getElementById('dt-time').textContent     = r.time;
  document.getElementById('dt-serv').textContent     = r.servings + ' servings';
  document.getElementById('dt-cal').textContent      = r.calories + ' cal';
  document.getElementById('dt-diff').textContent     = r.difficulty;

  // Ingredients
  document.getElementById('dt-ings').innerHTML = r.ingredients.map((ing, i) => `
    <div class="ing-row" id="ing${i}" onclick="toggleIng(${i})">
      <div class="ing-check" id="chk${i}">✓</div>
      <span class="ing-amount">${ing.amt}</span>
      <span class="ing-name">${ing.name}</span>
    </div>
  `).join('');

  // Steps
  document.getElementById('dt-steps').innerHTML = r.steps.map((s, i) => `
    <div class="step-card" id="stp${i}">
      <div class="step-num">${i + 1}</div>
      <div class="step-inner">
        <p class="step-text">${s.text}</p>
        ${s.timer ? `<button class="step-timer-btn" onclick="openTimer(${s.timer}, '${r.name}', ${i + 1})">⏱ Start timer — ${fmtTime(s.timer)}</button>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleIng(i) {
  document.getElementById('ing' + i)?.classList.toggle('done');
}

/* ── TIMER ────────────────────────────────────────────────── */
const CIRC = 2 * Math.PI * 80; // r = 80 in SVG
let tmrTotal = 0, tmrLeft = 0, tmrTick = null, tmrRunning = false;

function openTimer(secs, dish, step) {
  tmrTotal = secs; tmrLeft = secs; tmrRunning = false;
  clearInterval(tmrTick);
  document.getElementById('tmr-step').textContent = `${dish} — Step ${step}`;
  document.getElementById('tmr-name').textContent = 'Ready when you are';
  renderTimer();
  document.getElementById('timer-scrim').classList.add('open');
}

function closeTimer() {
  clearInterval(tmrTick);
  tmrRunning = false;
  document.getElementById('timer-scrim').classList.remove('open');
}

function startTimer() {
  if (tmrRunning || tmrLeft <= 0) return;
  tmrRunning = true;
  document.getElementById('tmr-name').textContent = 'Cooking…';
  tmrTick = setInterval(() => {
    tmrLeft--;
    renderTimer();
    if (tmrLeft <= 0) {
      clearInterval(tmrTick);
      tmrRunning = false;
      timerDone();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(tmrTick);
  tmrRunning = false;
  document.getElementById('tmr-name').textContent = 'Paused';
}

function resetTimer() {
  clearInterval(tmrTick);
  tmrRunning = false;
  tmrLeft = tmrTotal;
  document.getElementById('tmr-name').textContent = 'Ready when you are';
  renderTimer();
}

function renderTimer() {
  document.getElementById('tmr-display').textContent = fmtTime(tmrLeft);
  const pct = tmrTotal > 0 ? tmrLeft / tmrTotal : 0;
  const offset = CIRC * (1 - pct);
  const ring = document.getElementById('tmr-ring-fill');
  if (ring) {
    ring.style.strokeDasharray = CIRC;
    ring.style.strokeDashoffset = offset;
  }
}

function timerDone() {
  document.getElementById('tmr-name').textContent = '✅ Done! Check your dish';
  beep();
  toast('⏰ Timer done! Time to check the pan.', 'ok');
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.28, 0.56, 0.84, 1.12].forEach(d => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.45, ctx.currentTime + d);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + d + 0.22);
      o.start(ctx.currentTime + d);
      o.stop(ctx.currentTime + d + 0.25);
    });
  } catch(e) {}
}

function fmtTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

/* ── REVIEWS ──────────────────────────────────────────────── */
const DEFAULT_REVIEWS = [
  { name:'Priya Nair',    stars:5, text:'The Chettinad curry recipe is exactly how my grandma made it! The tip about frying onions for 20 minutes really makes the difference.', when:'2 days ago' },
  { name:'Karthik S.',    stars:5, text:'As someone living alone, this website has genuinely improved my quality of life. Started with Medu Vada and now I make a full South Indian breakfast every Sunday.', when:'4 days ago' },
  { name:'Ananya Rajan',  stars:5, text:'The cooking timer feature saved my payasam! I always forget and the milk overflows. The audio alert is perfect.', when:'1 week ago' },
  { name:'Suresh M.',     stars:4, text:'Kerala Fish Curry came out restaurant-level good. The claypot tip and the instruction not to stir the fish — that\'s the difference between a good recipe and an authentic one.', when:'2 weeks ago' },
  { name:'Divya T.',      stars:5, text:'Bisibelebath recipe is exactly like the one I grew up eating in Mysore. The ghee tempering at the end and eating it with cold curd — chef\'s kiss.', when:'3 weeks ago' },
  { name:'Rahul K.',      stars:5, text:'Beautiful website, fantastic recipes. The step-by-step ingredient checklist while cooking is so thoughtful. Finally got my dosa batter fermentation right using this guide.', when:'1 month ago' },
];

function buildReviews() {
  const g = document.getElementById('reviews-grid');
  if (!g) return;
  const all = [...DEFAULT_REVIEWS, ...DB.reviews.map(r => ({...r, when: 'Just now'}))];
  g.innerHTML = all.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.name[0]}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-when">${r.when}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Show/hide form based on login
  const fp = document.getElementById('review-gate');
  if (fp) fp.style.display = currentUser ? 'none' : 'block';
  const form = document.getElementById('review-form-inner');
  if (form) form.style.display = currentUser ? 'block' : 'none';
}

function submitReview(e) {
  e.preventDefault();
  if (!currentUser) { toast('Sign in to submit a review', 'err'); goTo('login'); return; }
  const text = document.getElementById('rv-text').value.trim();
  const stars = document.querySelectorAll('.star-set button.lit').length;
  if (!text) { toast('Please write your review', 'err'); return; }
  if (!stars) { toast('Please pick a star rating', 'err'); return; }
  DB.reviews.push({ name: currentUser.name, text, stars });
  persist();
  document.getElementById('rv-text').value = '';
  document.querySelectorAll('.star-set button').forEach(b => b.classList.remove('lit'));
  toast('Review posted! Thank you 🙏', 'ok');
  buildReviews();
}

/* ── STARS ────────────────────────────────────────────────── */
function initStars() {
  document.querySelectorAll('.star-set').forEach(set => {
    set.querySelectorAll('button').forEach((btn, i, all) => {
      btn.addEventListener('click', () => all.forEach((b, j) => b.classList.toggle('lit', j <= i)));
    });
  });
}

/* ── ADMIN ────────────────────────────────────────────────── */
function buildAdmin() {
  refreshKPIs();
  buildUsersTable();
  buildRecipesTable();
}

function refreshKPIs() {
  document.getElementById('kpi-users').textContent    = DB.users.filter(u=>u.role!=='admin').length;
  document.getElementById('kpi-recipes').textContent  = DB.recipes.length;
  document.getElementById('kpi-reviews').textContent  = DB.reviews.length;
  document.getElementById('kpi-cats').textContent     = [...new Set(DB.recipes.map(r=>r.category))].length;
}

function adminGo(section) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('on'));
  document.querySelectorAll('.admin-link').forEach(l => l.classList.remove('on'));
  document.getElementById('as-' + section)?.classList.add('on');
  document.getElementById('al-' + section)?.classList.add('on');
}

function buildUsersTable() {
  const tb = document.getElementById('users-table-body');
  if (!tb) return;
  const members = DB.users.filter(u => u.role !== 'admin');
  tb.innerHTML = members.length ? members.map(u => `
    <tr>
      <td><code style="font-size:.78rem;color:var(--cream-3)">${u.id}</code></td>
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td>${new Date(u.joined).toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'})}</td>
      <td>
        <div class="cell-actions">
          <button class="btn btn-outline-gold btn-sm" onclick="openEditUser('${u.id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser('${u.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('') : '<tr><td colspan="5" style="text-align:center;color:var(--cream-3);padding:40px">No users yet</td></tr>';
}

function openEditUser(id) {
  const u = DB.users.find(u => u.id === id);
  if (!u) return;
  document.getElementById('eu-id').value    = u.id;
  document.getElementById('eu-name').value  = u.name;
  document.getElementById('eu-email').value = u.email;
  document.getElementById('eu-pw').value    = '';
  openModal('modal-edituser');
}

function saveEditUser() {
  const id = document.getElementById('eu-id').value;
  const u  = DB.users.find(u => u.id === id);
  if (!u) return;
  u.name  = document.getElementById('eu-name').value;
  u.email = document.getElementById('eu-email').value;
  const np = document.getElementById('eu-pw').value;
  if (np) u.password = np;
  persist();
  buildUsersTable();
  closeModal('modal-edituser');
  toast('User updated', 'ok');
}

function deleteUser(id) {
  if (!confirm('Permanently delete this user?')) return;
  DB.users = DB.users.filter(u => u.id !== id);
  persist();
  buildUsersTable();
  refreshKPIs();
  toast('User deleted', 'ok');
}

function buildRecipesTable() {
  const tb = document.getElementById('recipes-table-body');
  if (!tb) return;
  tb.innerHTML = DB.recipes.map(r => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:12px">
          <img src="${r.image}" style="width:44px;height:44px;border-radius:10px;object-fit:cover;flex-shrink:0">
          <strong>${r.name}</strong>
        </div>
      </td>
      <td>${r.region}</td>
      <td>${r.category}</td>
      <td><span class="diff-pill diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span></td>
      <td>${r.time}</td>
      <td>
        <div class="cell-actions">
          <button class="btn btn-ghost btn-sm" onclick="goTo('detail',${r.id})">Preview</button>
          <button class="btn btn-outline-gold btn-sm" onclick="openEditRecipe(${r.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${r.id})">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddRecipe() {
  document.getElementById('rm-title').textContent = 'Add New Recipe';
  document.getElementById('rf-id').value    = '';
  document.getElementById('rf-name').value  = '';
  document.getElementById('rf-region').value = '';
  document.getElementById('rf-cat').value   = 'Breakfast';
  document.getElementById('rf-diff').value  = 'Easy';
  document.getElementById('rf-time').value  = '';
  document.getElementById('rf-serv').value  = '';
  document.getElementById('rf-cal').value   = '';
  document.getElementById('rf-veg').value   = 'veg';
  document.getElementById('rf-img').value   = '';
  document.getElementById('rf-desc').value  = '';
  openModal('modal-recipe');
}

function openEditRecipe(id) {
  const r = DB.recipes.find(r => r.id == id);
  if (!r) return;
  document.getElementById('rm-title').textContent = 'Edit Recipe';
  document.getElementById('rf-id').value    = r.id;
  document.getElementById('rf-name').value  = r.name;
  document.getElementById('rf-region').value = r.region;
  document.getElementById('rf-cat').value   = r.category;
  document.getElementById('rf-diff').value  = r.difficulty;
  document.getElementById('rf-time').value  = r.time;
  document.getElementById('rf-serv').value  = r.servings;
  document.getElementById('rf-cal').value   = r.calories;
  document.getElementById('rf-veg').value   = r.isVeg ? 'veg' : 'nonveg';
  document.getElementById('rf-img').value   = r.image;
  document.getElementById('rf-desc').value  = r.desc;
  openModal('modal-recipe');
}

function saveRecipe() {
  const id   = document.getElementById('rf-id').value;
  const name = document.getElementById('rf-name').value.trim();
  const desc = document.getElementById('rf-desc').value.trim();
  if (!name || !desc) { toast('Name and description are required', 'err'); return; }

  const data = {
    name,
    region:     document.getElementById('rf-region').value || 'South India',
    category:   document.getElementById('rf-cat').value,
    difficulty: document.getElementById('rf-diff').value,
    time:       document.getElementById('rf-time').value || '30 min',
    servings:   parseInt(document.getElementById('rf-serv').value) || 4,
    calories:   parseInt(document.getElementById('rf-cal').value) || 300,
    isVeg:      document.getElementById('rf-veg').value === 'veg',
    image:      document.getElementById('rf-img').value || 'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85',
    desc,
    tags:       [document.getElementById('rf-cat').value, 'South Indian'],
    ingredients:[], steps:[]
  };

  if (id) {
    const i = DB.recipes.findIndex(r => r.id == id);
    if (i >= 0) DB.recipes[i] = { ...DB.recipes[i], ...data };
    toast('Recipe updated', 'ok');
  } else {
    data.id = Date.now();
    DB.recipes.push(data);
    toast('Recipe added!', 'ok');
  }

  persist();
  buildRecipesTable();
  refreshKPIs();
  closeModal('modal-recipe');
}

function deleteRecipe(id) {
  if (!confirm('Delete this recipe permanently?')) return;
  DB.recipes = DB.recipes.filter(r => r.id != id);
  persist();
  buildRecipesTable();
  refreshKPIs();
  toast('Recipe deleted', 'ok');
}

/* ── MODALS ───────────────────────────────────────────────── */
function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

/* ── TOAST ────────────────────────────────────────────────── */
function toast(msg, type = 'ok') {
  const dock = document.getElementById('toast-dock');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-ico">${type === 'ok' ? '✅' : '❌'}</span><span class="toast-msg">${msg}</span>`;
  dock.appendChild(el);
  setTimeout(() => el.remove(), 3600);
}

/* ── AUTH PAGE ────────────────────────────────────────────── */
function resetAuth() {
  document.querySelectorAll('.auth-tab').forEach((t,i) => t.classList.toggle('active', i===0));
  document.getElementById('form-login').style.display = 'block';
  document.getElementById('form-reg').style.display   = 'none';
  document.getElementById('login-err').classList.remove('show');
  document.getElementById('reg-err').classList.remove('show');
}

/* ── BOOT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  refreshNav();
  initStars();
  goTo('home');

  // Scroll effects
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('solid', window.scrollY > 30);
    document.querySelector('.scroll-up')?.classList.toggle('show', window.scrollY > 500);
  });

  // Auth tab toggle
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      document.getElementById('form-login').style.display = isLogin ? 'block' : 'none';
      document.getElementById('form-reg').style.display   = isLogin ? 'none' : 'block';
    });
  });

  // Login submit
  document.getElementById('form-login').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pw    = document.getElementById('login-pw').value;
    const user  = doLogin(email, pw);
    if (user) {
      toast(`Welcome back, ${user.name.split(' ')[0]}! 🎉`, 'ok');
      goTo(user.role === 'admin' ? 'admin' : 'home');
    } else {
      document.getElementById('login-err').classList.add('show');
    }
  });

  // Register submit
  document.getElementById('form-reg').addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value;
    const pw    = document.getElementById('reg-pw').value;
    if (pw.length < 6) {
      document.getElementById('reg-err').textContent = 'Password must be at least 6 characters';
      document.getElementById('reg-err').classList.add('show');
      return;
    }
    const user = doRegister(name, email, pw);
    if (user) {
      toast(`Welcome to Bachelor's Kitchen, ${name}! 🍛`, 'ok');
      goTo('home');
    } else {
      document.getElementById('reg-err').textContent = 'This email is already registered';
      document.getElementById('reg-err').classList.add('show');
    }
  });

  // Review submit
  document.getElementById('review-form')?.addEventListener('submit', submitReview);

  // Mobile hamburger
  document.querySelector('.nav-ham')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-scrim, .timer-scrim').forEach(scrim => {
    scrim.addEventListener('click', e => {
      if (e.target === scrim) {
        scrim.classList.remove('open');
        if (scrim.classList.contains('timer-scrim')) { clearInterval(tmrTick); tmrRunning = false; }
      }
    });
  });
});
