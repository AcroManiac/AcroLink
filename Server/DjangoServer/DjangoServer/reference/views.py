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

# MAKE ALL THE STANDARD WAY!!!!!!

@api_view(['GET'])
def reference_data(request):

    levels = Level.objects.all()

    import pdb; pdb.set_trace()

    positions = Position.objects.all()
    roles = Role.objects.all()
    countries = Country.objects.all()
    social_networks = SocialNetwork.objects.all()

    # import pdb; pdb.set_trace()

    return Response({
    	'levels': levels,
    	# 'positions': positions,
    	})


# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'profiles': reverse('profile-list', request=request, format=format),
#     })
