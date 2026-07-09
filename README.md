# Bachelor's Kitchen — Django Full Stack

This project converts the existing static `cooking_website` into a Django app.

Setup (Windows, using the included venv):

1. Activate your virtualenv:

```powershell
& ".\.venv\Scripts\Activate.ps1"
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Ensure MySQL is running and create the database (script provided):

```powershell
& ".\.venv\Scripts\python.exe" scripts/create_db.py
```

4. Run migrations and seed data:

```powershell
& ".\.venv\Scripts\python.exe" manage.py migrate
& ".\.venv\Scripts\python.exe" manage.py seed_db
```

5. Run the dev server:

```powershell
& ".\.venv\Scripts\python.exe" manage.py runserver
```

Admin user created by `seed_db`: `admin@kitchen.com` / `admin123`

## Authentication

- Uses Django's built-in authentication system (`django.contrib.auth`).
- Admin login is available at `/admin/`.
- Recipe creation, editing, and deletion routes are protected with Django's `@staff_member_required` decorator.
- The seed command creates a staff superuser for administration.

## Project Report

This project converts the static `cooking_website` into a Django full-stack application with MySQL data storage.

See `PROJECT_REPORT.md` for a full report, including conversation history, implementation details, and final status.
