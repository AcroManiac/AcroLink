from rest_framework import serializers
from django.contrib.auth.models import User
from main.models import Profile

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('id', 'phone', 'birth_date', 'practice_start_date', 'bio', 'location', 'avatar')
