# filepath: /c:/Users/black/Desktop/Agriculture/backend/auth_project/auth_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # AUTHENTICATION COMMENTED OUT - Auth URLs disabled
    # path('api/', include('authentication.urls')),
]