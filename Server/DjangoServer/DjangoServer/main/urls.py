from django.conf.urls import url, include
from .views import ProfileViewSet
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
