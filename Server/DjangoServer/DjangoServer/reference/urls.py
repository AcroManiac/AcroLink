from django.conf.urls import url, include
import views
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'reference/level', views.LevelViewSet)
router.register(r'reference/position', views.PositionViewSet)
router.register(r'reference/role', views.RoleViewSet)
router.register(r'reference/country', views.CountryViewSet)
router.register(r'reference/social_network', views.SocialNetworkViewSet)
