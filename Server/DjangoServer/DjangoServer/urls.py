"""DjangoServer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from .main.urls import router as mainRouter
from .reference.urls import router as referenceRouter

from django.views.generic import RedirectView
from rest_framework_swagger.views import get_swagger_view

from allauth.account.views import confirm_email as allauthemailconfirmation

urlpatterns = [
    
    url(r'^docs/$', get_swagger_view(title='API Docs'), name='api_docs'),

    url(r'^api/v1/admin/', admin.site.urls),
    url(r'^api/v1/rest-auth/', include('rest_auth.urls')),
    url(r'^api/v1/rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api/v1/accounts/', include('allauth.urls')),
    url(r'^api/v1/accounts/profile/$', RedirectView.as_view(url='/', permanent=True), name='profile-redirect'),

    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(mainRouter.urls)),
    url(r'^api/v1/', include(referenceRouter.urls)),
]
