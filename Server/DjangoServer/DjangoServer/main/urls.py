from django.conf.urls import url, include
import views
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'profiles', views.ProfileViewSet)
