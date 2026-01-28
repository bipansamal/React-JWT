from django.contrib.auth.models import User # THis is the defult django users . we don't have to create models use directly user models.
from rest_framework import serializers

# THis is not from models this is from django rest famework directly.
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'}) # write_only is for only post and put request is accept.
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        # User.objects.create_user = automatically hash the password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user