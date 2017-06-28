from rest_framework import serializers
from django.contrib.auth.models import User
from models import Profile
from DjangoServer.reference.serializers import PositionSerializer
from DjangoServer.reference.serializers import RoleSerializer
from DjangoServer.reference.serializers import CountrySerializer
from DjangoServer.reference.serializers import SocialNetworkSerializer

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    position = PositionSerializer(many=True, read_only=True)
    role = RoleSerializer(many=True, read_only=True)
    country = CountrySerializer(many=False, read_only=True)
    social_network = SocialNetworkSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = (
        	'id', 'phone', 'birth_date', 'practice_start_date', 'bio', 'location', 'avatar',
        	'user', 'position', 'role', 'country', 'social_network')

    # Watch this to see how to update profile in one request:
    # http://django-rest-auth.readthedocs.io/en/latest/faq.html