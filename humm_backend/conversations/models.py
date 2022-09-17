from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


class Conversation(models.Model):
    conversation_array = ArrayField(models.TextField())
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)

    # def __str__(self):
    #     return self.owner