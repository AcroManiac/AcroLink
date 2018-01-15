from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from DjangoServer.reference.models import Gender
from DjangoServer.reference.serializers import GenderSerializer
from DjangoServer.reference.serializers import LevelSerializer
from DjangoServer.reference.serializers import PositionSerializer
from DjangoServer.reference.serializers import RoleSerializer
# from DjangoServer.reference.serializers import CountrySerializer
# from DjangoServer.reference.serializers import SocialNetworkSerializer
from drf_writable_nested import WritableNestedModelSerializer
from rest_auth.serializers import UserDetailsSerializer

class ProfileSerializer(WritableNestedModelSerializer): #serializers.ModelSerializer):

    # Direct FK relation
    gender = GenderSerializer(allow_null=True)
    level  = LevelSerializer()

    # Direct ManyToMany relation
    position = PositionSerializer(many=True, allow_null=True)
    role = RoleSerializer(many=True, allow_null=True)

    class Meta:
        model   = Profile
        fields  = ('pk', 'phone', 'birth_date', 'practice_start_date', 'bio', 'avatar', 'score')
        fields += ('gender', 'level', 'position', 'role',)


class UserSerializer(WritableNestedModelSerializer):

    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('pk', 'profile', 'username',)


# class UserSerializer(UserDetailsSerializer):

#     profile = ProfileSerializer()

#     class Meta(UserDetailsSerializer.Meta):
#         fields = UserDetailsSerializer.Meta.fields + (
#             'profile',)
