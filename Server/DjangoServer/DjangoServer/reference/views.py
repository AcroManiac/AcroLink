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

from .models import *
from .serializers import *

# Create your views here.

class LevelViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class PositionViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Position.objects.all()
    serializer_class = PositionSerializer


class RoleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class CountryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class SocialNetworkViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = SocialNetwork.objects.all()
    serializer_class = SocialNetworkSerializer


# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'profiles': reverse('profile-list', request=request, format=format),
#     })
