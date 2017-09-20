# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics
from rest_framework import permissions
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view
from rest_framework.decorators import detail_route

from .models import Profile
from django.contrib.auth.models import User
from .serializers import ProfileSerializer


# Create your views here.

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'profiles': reverse('profile-list', request=request, format=format),
    })
