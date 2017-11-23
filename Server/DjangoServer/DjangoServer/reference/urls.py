from django.conf.urls import url, include
from .views import *
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'reference/sex', LevelViewSet)
router.register(r'reference/level', LevelViewSet)
router.register(r'reference/position', PositionViewSet)
router.register(r'reference/role', RoleViewSet)
# router.register(r'reference/country', CountryViewSet)
# router.register(r'reference/social_network', SocialNetworkViewSet)
