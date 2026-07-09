from django.db import models
from django.utils import timezone


class Recipe(models.Model):
	name = models.CharField(max_length=200)
	slug = models.SlugField(max_length=220, unique=True, blank=True, null=True)
	category = models.CharField(max_length=80, blank=True)
	difficulty = models.CharField(max_length=40, blank=True)
	time = models.CharField(max_length=40, blank=True)
	servings = models.CharField(max_length=40, blank=True)
	calories = models.IntegerField(null=True, blank=True)
	is_veg = models.BooleanField(default=True)
	region = models.CharField(max_length=120, blank=True)
	image_url = models.URLField(blank=True)
	description = models.TextField(blank=True)
	tags = models.JSONField(default=list, blank=True)
	ingredients = models.JSONField(default=list, blank=True)
	steps = models.JSONField(default=list, blank=True)
	created_at = models.DateTimeField(default=timezone.now)

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		# auto-generate slug if missing
		if not self.slug:
			from django.utils.text import slugify
			base = slugify(self.name)[:200]
			slug = base
			counter = 1
			while Recipe.objects.filter(slug=slug).exclude(pk=self.pk).exists():
				slug = f"{base}-{counter}"
				counter += 1
			self.slug = slug
		super().save(*args, **kwargs)


class Review(models.Model):
	recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='reviews')
	author_name = models.CharField(max_length=120)
	rating = models.PositiveSmallIntegerField(default=5)
	body = models.TextField(blank=True)
	created_at = models.DateTimeField(default=timezone.now)

	def __str__(self):
		return f"{self.author_name} — {self.recipe.name}"
