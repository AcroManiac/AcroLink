from rest_framework import serializers
from .models import *

class LevelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Level
        fields = ('id', 'name')


class PositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = ('id', 'name')

class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = ('id', 'name')


class CountrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Country
        fields = ('id', 'code', 'name')


class SocialNetworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialNetwork
        fields = ('id', 'name', 'url', 'logo_url')
