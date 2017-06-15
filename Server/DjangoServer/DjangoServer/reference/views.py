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

from models import *
from serializers import ReferenceSerializer

from itertools import chain


# Create your views here.

class ReferenceViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    levels = Level.objects.all()
    positions = Position.objects.all()
    roles = Role.objects.all()
    countries = Country.objects.all()
    social_networks = SocialNetwork.objects.all()

    queryset = list(chain(levels, positions, roles, countries, social_networks))

    serializer_class = ReferenceSerializer


# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'profiles': reverse('profile-list', request=request, format=format),
#     })
