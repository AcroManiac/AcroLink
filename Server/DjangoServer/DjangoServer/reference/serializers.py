from rest_framework import serializers
from .models import *

class GenderSerializer(serializers.ModelSerializer):

    # gender = serializers.IntegerField(source="gender.pk", required=False, read_only=True)

    class Meta:
        model = Gender
        fields = ('pk', 'name',)
        read_only_fields = ('name',)

    # def update(self, instance, validated_data):
    #     print("GenderSerializer:update(): Begin")

    #     # get and update user profile
    #     # instance.name = validated_data.get('name')
    #     instance.save()
    #     return instance

class LevelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Level
        fields = ('pk', 'name',)
        read_only_fields = ('name',)


class PositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = ('pk', 'name',)
        read_only_fields = ('name',)

class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = ('pk','name',)
        read_only_fields = ('name',)


# class CountrySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Country
#         fields = ('code', 'name')


class SocialNetworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialNetwork
        fields = ('type', 'url',)
