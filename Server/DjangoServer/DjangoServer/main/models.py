# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.

# class SocialNetworkLink(models.Model):
# 	profile = models.ForeignKey('main.Profile', on_delete=models.CASCADE)
# 	social_network = models.ForeignKey('reference.SocialNetwork', on_delete=models.CASCADE)
# 	url = models.URLField(null=True)

# 	def __unicode__(self):
# 		return self.url

class Location(models.Model):
	street_number = models.TextField(max_length=10, null=True, blank=True)
	route = models.TextField(max_length=64, null=True, blank=True)
	locality = models.TextField(max_length=32, null=True, blank=True)
	state = models.TextField(max_length=32, null=True, blank=True)
	country = models.TextField(max_length=64, null=True, blank=True)
	postal_code = models.TextField(max_length=10, null=True, blank=True)
	country_code = models.TextField(max_length=4, null=True, blank=True)
	latitude = models.TextField(max_length=32, null=True, blank=True)
	longtitude = models.TextField(max_length=32, null=True, blank=True)
	place_id = models.TextField(max_length=256, null=True, blank=True)


class Profile(models.Model):
	user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
	
	phone = models.CharField(max_length=30, blank=True, default=None)
	birth_date = models.DateField(null=True, blank=True, default=None)
	practice_start_date = models.DateField(null=True, blank=True, default=None)
	bio = models.CharField(max_length=500, blank=True, default=None)
	avatar = models.ImageField(upload_to='avatars/', null=True, blank=True, default=None)
	score = models.IntegerField(default=0)

	# Nested relations to other tables
	gender = models.ForeignKey('reference.Gender', null=True, on_delete=models.SET_NULL)
	level = models.ForeignKey('reference.Level', default=1, on_delete=models.SET_DEFAULT)

	# location = OneToOneField('Location', null=True, on_delete=models.CASCADE)
	position = models.ManyToManyField('reference.Position', blank=True)
	role = models.ManyToManyField('reference.Role', blank=True)
	# social_network = models.ManyToManyField('reference.SocialNetwork', through='main.SocialNetworkLink')

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

