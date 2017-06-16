from django.conf.urls import url, include
import views
from rest_framework.urlpatterns import format_suffix_patterns
# from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
# router = DefaultRouter()
# router.register(r'reference', views.reference_data)


urlpatterns = [
    url(r'^reference/$', views.reference_data),
]

urlpatterns = format_suffix_patterns(urlpatterns)
