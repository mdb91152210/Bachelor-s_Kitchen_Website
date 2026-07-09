from django.contrib import admin
from .models import Recipe, Review


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
	list_display = ('name', 'category', 'region', 'difficulty', 'is_veg')
	search_fields = ('name', 'region', 'category')


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
	list_display = ('author_name', 'recipe', 'rating', 'created_at')
	search_fields = ('author_name', 'recipe__name')
