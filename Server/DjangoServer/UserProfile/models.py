# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class Profile(AbstractUser):
    phone = models.TextField(max_length=20, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    practice_start_date = models.DateField(null=True, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    # level = models.OneToOneField(Level)
    # status = models.OneToOneField(Status)
    # country = models.OneToOneField(Country)
