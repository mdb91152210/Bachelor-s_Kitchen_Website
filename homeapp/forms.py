from django import forms
from .models import Recipe


class RecipeForm(forms.ModelForm):
    class Meta:
        model = Recipe
        fields = ['name', 'category', 'difficulty', 'time', 'servings', 'calories', 'is_veg', 'region', 'image_url', 'description', 'tags', 'ingredients', 'steps']
        widgets = {
            'tags': forms.Textarea(attrs={'rows':2}),
            'ingredients': forms.Textarea(attrs={'rows':4}),
            'steps': forms.Textarea(attrs={'rows':6}),
        }

    def clean_tags(self):
        val = self.cleaned_data.get('tags')
        if isinstance(val, str):
            # allow comma separated
            return [t.strip() for t in val.split(',') if t.strip()]
        return val

    def clean_ingredients(self):
        val = self.cleaned_data.get('ingredients')
        if isinstance(val, str):
            # line separated ingredients
            return [l.strip() for l in val.splitlines() if l.strip()]
        return val

    def clean_steps(self):
        val = self.cleaned_data.get('steps')
        if isinstance(val, str):
            return [ {'text': l.strip()} for l in val.splitlines() if l.strip() ]
        return val
