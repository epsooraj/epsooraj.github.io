from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

class ExperienceViewset(viewsets.ModelViewSet):
	queryset = models.Experience.objects.all()
	serializer_class = serializers.ExperienceSerializer
	http_method_names = ['get']

class EducationViewset(viewsets.ModelViewSet):
	queryset = models.Education.objects.all()
	serializer_class = serializers.EducationSerializer
	http_method_names = ['get']

class SkillViewset(viewsets.ModelViewSet):
	queryset = models.Skill.objects.all()
	serializer_class = serializers.SkillSerializer
	http_method_names = ['get']

class PortfolioViewset(viewsets.ModelViewSet):
	queryset = models.Portfolio.objects.all()
	serializer_class = serializers.PortfolioSerializer
	http_method_names = ['get']
