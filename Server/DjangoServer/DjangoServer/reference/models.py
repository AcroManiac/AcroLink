# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Gender(models.Model):
	name = models.TextField(max_length=20, default='Male')

	def __unicode__(self):
		return self.name

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
		

# class Country(models.Model):
# 	code = models.TextField(max_length=2)
# 	name = models.TextField(max_length=45)

# 	def __unicode__(self):
# 		return self.name


# class SocialNetwork(models.Model):
# 	name = models.TextField(max_length=20)
# 	url = models.URLField(null=True)
# 	logo_url = models.URLField(null=True)

# 	def __unicode__(self):
# 		return self.name
