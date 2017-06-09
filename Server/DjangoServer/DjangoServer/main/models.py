# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class SocialNetworkLink(models.Model):
	profile = models.ForeignKey('main.Profile', on_delete=models.CASCADE)
	social_network = models.ForeignKey('reference.SocialNetwork', on_delete=models.CASCADE)
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

	position = models.ManyToManyField('reference.Position')
	role = models.ManyToManyField('reference.Role')
	level = models.ForeignKey('reference.Level', null=True)
	country = models.ForeignKey('reference.Country', null=True)
	social_network = models.ManyToManyField('reference.SocialNetwork', through='main.SocialNetworkLink')
