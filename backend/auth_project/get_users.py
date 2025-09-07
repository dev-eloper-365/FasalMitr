import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'auth_project.settings')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

users = User.objects.all()
if users.exists():
    print("\nStored Users:")
    for user in users:
        print(f"Username: {user.username}")
        print(f"Email: {user.email}")
        print("---")
else:
    print("No users found in the database.") 