from rest_framework import serializers
from conversations.models import Conversation
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import Group


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

