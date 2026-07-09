from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from homeapp.models import Recipe

# Minimal seed data derived from the original frontend JS
SEED = [
    {
        'name': 'Masala Dosa', 'category': 'Breakfast', 'difficulty': 'Easy',
        'time': '45 min', 'servings': '4', 'calories': 380, 'is_veg': True,
        'region': 'Tamil Nadu', 'image_url': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=85',
        'description': 'Crispy golden dosa filled with spiced potato masala — the king of South Indian breakfasts.',
        'tags': ['Fermented','Breakfast','Classic'],
        'ingredients': [],
        'steps': []
    },
    {
        'name': 'Chettinad Chicken Curry', 'category': 'Lunch', 'difficulty': 'Medium',
        'time': '65 min', 'servings': '4', 'calories': 520, 'is_veg': False,
        'region': 'Chettinad, Tamil Nadu', 'image_url': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=85',
        'description': 'Deeply aromatic curry ground fresh from rare Chettinad spices.',
        'tags': ['Spicy','Aromatic'],
        'ingredients': [],
        'steps': []
    }
]


class Command(BaseCommand):
    help = 'Seed the database with demo recipes and create an admin user'

    def handle(self, *args, **options):
        User = get_user_model()
        admin_email = 'admin@kitchen.com'
        admin_pw = 'admin123'
        if not User.objects.filter(email=admin_email).exists():
            User.objects.create_superuser(username='admin', email=admin_email, password=admin_pw)
            self.stdout.write(self.style.SUCCESS(f'Created superuser {admin_email}'))
        else:
            self.stdout.write('Superuser already exists')

        for item in SEED:
            slug = slugify(item['name'])
            obj = Recipe.objects.filter(name=item['name']).first()
            if obj:
                if not obj.slug:
                    obj.slug = slug
                    obj.save()
                    self.stdout.write(self.style.SUCCESS(f"Updated slug for: {item['name']}"))
                else:
                    self.stdout.write(f"Recipe already exists: {item['name']}")
                continue

            # ensure unique slug
            base_slug = slug
            counter = 1
            while Recipe.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            Recipe.objects.create(
                name=item['name'], slug=slug, category=item['category'], difficulty=item['difficulty'],
                time=item['time'], servings=item['servings'], calories=item['calories'],
                is_veg=item['is_veg'], region=item['region'], image_url=item['image_url'],
                description=item['description'], tags=item['tags'], ingredients=item['ingredients'], steps=item['steps']
            )
            self.stdout.write(self.style.SUCCESS(f"Created recipe: {item['name']}"))
