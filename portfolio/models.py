from django.db import models
from django import forms

# Create your models here.
class Experience(models.Model):
	title = models.CharField(max_length=100)
	company = models.CharField(max_length=100)
	location = models.CharField(max_length=100)
	start_date = models.DateField()
	end_date = models.DateField(null=True)
	description = models.TextField(null=True, blank=True)

	def __str__(self):
		return self.title

class Education(models.Model):
	college = models.CharField(max_length=100)
	degree = models.CharField(max_length=100)
	start_date = models.DateField()
	end_date = models.DateField(null=True, blank=True)

	def __str__(self):
		return self.degree + " from " + self.college

class Skill(models.Model):
	sktypes = [
		('LN', 'Language'),
		('TG', 'Technology')
	]
	skill = models.CharField(max_length=100)
	rating = models.IntegerField()
	skill_type = models.CharField(
								max_length=2,
								choices=sktypes,
								default='LN')

	def __str__(self):
		return self.skill

class Language(models.Model):
	language = models.CharField(max_length=50)

	def __str__(self):
		return self.language

class Technology(models.Model):
	technology = models.CharField(max_length=50)

	def __str__(self):
		return self.technology

class PortfolioType(models.Model):
	portfolio_type = models.CharField(max_length=100)

	def __str__(self):
		return self.portfolio_type

class Portfolio(models.Model):
	title = models.CharField(max_length=100)
	portfolio_type = models.ForeignKey(
										PortfolioType,
										blank=True,
										null=True,
										on_delete=models.SET_NULL)
	languages = models.ManyToManyField(Language)
	technology = models.ManyToManyField(Technology)
	description = models.TextField(null=True)

	def __str__(self):
		return self.title