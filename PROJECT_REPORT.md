# Project Report: Bachelor's Kitchen — Django Full Stack

## Overview

This project converts a static cooking website into a Django full-stack application. The goal was to preserve the original design while adding a backend using MySQL for auth and recipe data, admin management, CRUD operations, and a minimal report with tests.

## Conversation Summary

1. User supplied a static site folder `cooking_website` containing `index.html`, `style.css`, and `script.js`.
2. User requested a Django full stack project using MySQL.
3. I inspected `myproject/settings.py`, `homeapp`, and the static assets.
4. I configured MySQL in Django settings with the provided connection details (`127.0.0.1`, port `3306`, database `cookingwebsite`, user `root`, password `123456`).
5. I scaffolded models, admin registration, views, forms, templates, and URLs for recipes.
6. I added a database creation script and a `seed_db` management command to create the admin user and seed demo recipes.
7. I copied the original static CSS and JavaScript into the Django app and integrated the original homepage HTML into Django templates.
8. I added basic tests and updated README with setup instructions.

## Authentication Method

- Django's built-in user authentication system is used via `django.contrib.auth`.
- The project creates a superuser using `manage.py seed_db`.
- Admin area is available at `/admin/`.
- Recipe management routes are protected using `@staff_member_required`.
- This ensures only authenticated staff users can create, update, or delete recipes.

### Protected Views

The following views are protected:
- `recipe_create`
- `recipe_update`
- `recipe_delete`

They require the user to be a staff member. The admin user created by seed has staff privileges.

## Implementation Details

### Key Files

- `myproject/settings.py`
  - MySQL database configuration.
  - Static files configuration.
- `homeapp/models.py`
  - `Recipe` and `Review` models.
- `homeapp/views.py`
  - Home page, recipe list, recipe detail, create, update, delete views.
- `homeapp/forms.py`
  - `RecipeForm` for recipe CRUD.
- `homeapp/urls.py`
  - Recipe routes.
- `homeapp/templates/home/`
  - Templates for home, recipe list, detail, form, and delete confirmation.
- `homeapp/static/homeapp/style.css`
  - Original site stylesheet.
- `homeapp/static/homeapp/script.js`
  - Site frontend logic.
- `scripts/create_db.py`
  - Creates the MySQL database if needed.
- `homeapp/management/commands/seed_db.py`
  - Seeds the admin user and sample recipes.
- `homeapp/tests.py`
  - Basic unit tests.

### Database

- MySQL as requested.
- Database created programmatically by `scripts/create_db.py`.
- Migrations applied to create tables.

### User and Admin

- Superuser: `admin@kitchen.com`
- Password: `admin123`
- Access admin via `/admin/`.

## Final Status

- The Django project is fully configured with MySQL.
- Static front-end assets are integrated.
- Recipe CRUD is implemented and protected.
- Basic tests pass.

## How to Run

```powershell
& ".\.venv\Scripts\Activate.ps1"
pip install -r requirements.txt
& ".\.venv\Scripts\python.exe" scripts/create_db.py
& ".\.venv\Scripts\python.exe" manage.py migrate
& ".\.venv\Scripts\python.exe" manage.py seed_db
& ".\.venv\Scripts\python.exe" manage.py runserver
```

## Notes

- The project currently uses Django templates for pages and static files for styling and JS.
- If desired, the UI can be further refactored to use a base layout and separate Django template includes.
- Additional features like user registration, recipe search, and media uploads can be added next.
