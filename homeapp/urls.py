from django.urls import path
from . import views

app_name = 'homeapp'

urlpatterns = [
    path('recipes/', views.recipe_list, name='recipe_list'),
    path('recipes/add/', views.recipe_create, name='recipe_create'),
    path('recipes/<slug:slug>/', views.recipe_detail, name='recipe_detail'),
    path('recipes/<slug:slug>/edit/', views.recipe_update, name='recipe_update'),
    path('recipes/<slug:slug>/delete/', views.recipe_delete, name='recipe_delete'),
]
