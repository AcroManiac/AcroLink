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
	street_number = models.TextField(max_length=10, blank=True)
	route = models.TextField(max_length=64, blank=True)
	locality = models.TextField(max_length=32, blank=True)
	state = models.TextField(max_length=32, blank=True)
	country = models.TextField(max_length=64, blank=True)
	postal_code = models.TextField(max_length=10, blank=True)
	country_code = models.TextField(max_length=4, blank=True)
	latitude = models.TextField(max_length=32, blank=True)
	longtitude = models.TextField(max_length=32, blank=True)
	place_id = models.TextField(max_length=256, blank=True)


class Profile(models.Model):
	user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
	sex = models.ForeignKey('reference.Sex', null=True)
	phone = models.TextField(max_length=20, blank=True)
	birth_date = models.DateField(null=True, blank=True)
	practice_start_date = models.DateField(null=True, blank=True)
	bio = models.TextField(max_length=500, blank=True)
	avatar = models.ImageField(upload_to='avatars/', null=True)
	karma = models.IntegerField(null=False, blank=False, default=0)

	location = models.OneToOneField('Location', null=True, on_delete=models.CASCADE)

	level = models.ForeignKey('reference.Level', null=True)
	position = models.ManyToManyField('reference.Position')
	role = models.ManyToManyField('reference.Role')
	# social_network = models.ManyToManyField('reference.SocialNetwork', through='main.SocialNetworkLink')

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

