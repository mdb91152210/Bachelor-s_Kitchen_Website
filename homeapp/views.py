from django.shortcuts import render
from .models import Recipe
from django.shortcuts import get_object_or_404, redirect
from django.contrib.admin.views.decorators import staff_member_required
from .forms import RecipeForm



def index(request):
    recipes = Recipe.objects.all()[:12]
    return render(request, 'home/index.html', {'recipes': recipes})


def recipe_list(request):
    recipes = Recipe.objects.all().order_by('-created_at')
    return render(request, 'home/recipes.html', {'recipes': recipes})


def recipe_detail(request, slug):
    recipe = get_object_or_404(Recipe, slug=slug)
    return render(request, 'home/recipe_detail.html', {'recipe': recipe})


@staff_member_required
def recipe_create(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST)
        if form.is_valid():
            recipe = form.save()
            return redirect('homeapp:recipe_detail', slug=recipe.slug)
    else:
        form = RecipeForm()
    return render(request, 'home/recipe_form.html', {'form': form, 'create': True})


@staff_member_required
def recipe_update(request, slug):
    recipe = get_object_or_404(Recipe, slug=slug)
    if request.method == 'POST':
        form = RecipeForm(request.POST, instance=recipe)
        if form.is_valid():
            recipe = form.save()
            return redirect('homeapp:recipe_detail', slug=recipe.slug)
    else:
        form = RecipeForm(instance=recipe)
    return render(request, 'home/recipe_form.html', {'form': form, 'create': False})


@staff_member_required
def recipe_delete(request, slug):
    recipe = get_object_or_404(Recipe, slug=slug)
    if request.method == 'POST':
        recipe.delete()
        return redirect('homeapp:recipe_list')
    return render(request, 'home/recipe_confirm_delete.html', {'recipe': recipe})

# Create your views here.
