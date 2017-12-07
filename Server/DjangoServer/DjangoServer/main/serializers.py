from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile
from DjangoServer.reference.serializers import SexSerializer
from DjangoServer.reference.serializers import LevelSerializer
from DjangoServer.reference.serializers import PositionSerializer
from DjangoServer.reference.serializers import RoleSerializer
# from DjangoServer.reference.serializers import CountrySerializer
# from DjangoServer.reference.serializers import SocialNetworkSerializer


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'id', 'street_number', 'route', 'locality', 'state', 'country', 'postal_code',
            'country_code', 'latitude', 'longtitude', 'place_id')


class ProfileSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=False, read_only=True)
    sex = SexSerializer(many=False)
    location = LocationSerializer(many=False)
    level = LevelSerializer(many=False)
    position = PositionSerializer(many=True, read_only=True)
    role = RoleSerializer(many=True, read_only=True)
    # country = CountrySerializer(many=False, read_only=True)
    # social_network = SocialNetworkSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = (
        	'id', 'phone', 'sex', 'birth_date', 'practice_start_date', 'bio', 'location', 'avatar',
        	'score', 'user', 'level', 'position', 'role')
        #, 'country', 'social_network')

    # Watch this to see how to update profile in one request:
    # http://django-rest-auth.readthedocs.io/en/latest/faq.html


class UserSerializer(serializers.ModelSerializer):
    # nest the profile inside the user serializer
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'profile')
        read_only_fields = ('email', )

    def update(self, instance, validated_data):
        """Update user and profile. Assumes there is a profile for every user."""
        profile_data = validated_data.pop('profile')
        instance = super(UserSerializer, self).update(instance, validated_data)

        # get and update user profile
        profile = instance.profile
        if profile_data:
            for attr, value in profile_data.items():
                setattr(profile, attr, value)
            profile.save()
        return instance
