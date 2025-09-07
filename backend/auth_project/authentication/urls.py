# AUTHENTICATION COMMENTED OUT - All auth URLs disabled
"""
from django.urls import path
from .views import RegisterView, LoginView, LogoutView, UserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'), 
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
]
"""

# Empty URL patterns since auth is disabled
urlpatterns = []

