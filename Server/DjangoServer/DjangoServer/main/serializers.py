from rest_framework import serializers
from django.contrib.auth.models import User
from models import Profile

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Profile
        fields = ('id', 'phone', 'birth_date', 'practice_start_date', 'bio', 'location', 'avatar', 'user')
