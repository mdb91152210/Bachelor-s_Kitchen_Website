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
		],
		steps: [
			{ text: "Soak rice and fenugreek seeds together for 6 hours. Soak urad dal separately for 4 hours. This soaking is the foundation — don't rush it.", timer: null },
			{ text: "Drain and grind urad dal first to a silky, airy batter using minimal water. Then grind the rice mixture to a coarser, smooth batter. Combine both, add salt, mix gently.", timer: null }
		]
	},
	{
		id: 2, name: "Chettinad Chicken Curry", category: "Lunch", difficulty: "Medium",
		time: "65 min", servings: 4, calories: 520, isVeg: false,
		region: "Chettinad, Tamil Nadu",
		image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=85",
		desc: "Deeply aromatic curry ground fresh from rare Chettinad spices — one of India's most complex and celebrated regional dishes.",
		tags: ["Spicy", "Aromatic", "Slow-cooked"],
		ingredients: [],
		steps: []
	}
];

let DB = {
	users:   JSON.parse(localStorage.getItem('bk_users')   || '[]'),
	recipes: JSON.parse(localStorage.getItem('bk_recipes') || 'null') || [...SEED_RECIPES],
	reviews: JSON.parse(localStorage.getItem('bk_reviews') || '[]'),
};
let currentUser = JSON.parse(localStorage.getItem('bk_me') || 'null');

function persist() {
	localStorage.setItem('bk_users',   JSON.stringify(DB.users));
	localStorage.setItem('bk_recipes', JSON.stringify(DB.recipes));
	localStorage.setItem('bk_reviews', JSON.stringify(DB.reviews));
	if (currentUser) localStorage.setItem('bk_me', JSON.stringify(currentUser));
}

function goTo(page, param) {
	document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
	document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

	const el = document.getElementById('pg-' + page);
	if (el) el.classList.add('active');

	const link = document.querySelector(`.nav-links a[data-p="${page}"]`);
	if (link) link.classList.add('active');

	window.scrollTo({ top: 0, behavior: 'smooth' });
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

refreshNav();

console.log('Frontend assets loaded');
