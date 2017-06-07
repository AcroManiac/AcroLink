# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Level(models.Model):
	name = models.TextField(max_length=20, default='Beginner')

	def __unicode__(self):
		return self.name


class Position(models.Model):
	name = models.TextField(max_length=20, default='Base')

	def __unicode__(self):
		return self.name
		

class Role(models.Model):
	name = models.TextField(max_length=20, default='Student')

	def __unicode__(self):
		return self.name
		

class Country(models.Model):
	code = models.TextField(max_length=2)
	name = models.TextField(max_length=45)

	def __unicode__(self):
		return self.name


class SocialNetwork(models.Model):
	name = models.TextField(max_length=20)
	url = models.URLField(null=True)
	logo_url = models.URLField(null=True)

	def __unicode__(self):
		return self.name

class SocialNetworkLink(models.Model):
	profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
	social_network = models.ForeignKey('SocialNetwork', on_delete=models.CASCADE)
	url = models.URLField(null=True)

	def __unicode__(self):
		return self.url
		

class Profile(models.Model):
	user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
	phone = models.TextField(max_length=20, blank=True)
	birth_date = models.DateField(null=True, blank=True)
	practice_start_date = models.DateField(null=True, blank=True)
	bio = models.TextField(max_length=500, blank=True)
	location = models.CharField(max_length=30, blank=True)
	avatar = models.ImageField(upload_to='avatars/', null=True)

	position = models.ManyToManyField('Position')
	role = models.ManyToManyField('Role')
	level = models.OneToOneField('Level', null=True)
	country = models.OneToOneField('Country', null=True)
	social_network = models.ManyToManyField('SocialNetwork', through='SocialNetworkLink')
