# filepath: /C:/Users/black/Desktop/Agriculture/backend/auth_project/authentication/views.py
# AUTHENTICATION COMMENTED OUT - All auth functionality disabled
"""
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, logout, authenticate
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, RegisterSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        user = self.get_serializer().Meta.model.objects.get(username=response.data['username'])
        token, created = Token.objects.get_or_create(user=user)
        response.data['token'] = token.key
        return response

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response({'detail': 'Invalid credentials.'}, status=400)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'detail': 'Successfully logged out.'})

class UserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
"""