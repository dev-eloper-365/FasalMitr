# filepath: /c:/Users/black/Desktop/Agriculture/backend/auth_project/auth_project/urls.py
from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({"message": "Django API is running", "status": "healthy"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('health/', health_check, name='health_check'),
    # No authentication endpoints - all removed
]