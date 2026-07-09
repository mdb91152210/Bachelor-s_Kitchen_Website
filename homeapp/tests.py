from django.test import TestCase
from django.urls import reverse
from .models import Recipe


class RecipeViewsTest(TestCase):
    def setUp(self):
        self.r = Recipe.objects.create(name='Test Recipe', category='Test', time='10 min', servings='2', calories=100, is_veg=True, region='Testland')

    def test_recipe_list(self):
        resp = self.client.get(reverse('homeapp:recipe_list'))
        self.assertEqual(resp.status_code, 200)
        self.assertContains(resp, 'Test Recipe')

    def test_recipe_detail(self):
        resp = self.client.get(reverse('homeapp:recipe_detail', args=[self.r.slug]))
        self.assertEqual(resp.status_code, 200)
        self.assertContains(resp, self.r.name)
from django.test import TestCase

# Create your tests here.
