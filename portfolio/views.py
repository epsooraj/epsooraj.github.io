from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

class ExperienceViewset(viewsets.ModelViewSet):
	queryset = models.Experience.objects.all().order_by('-start_date')
	serializer_class = serializers.ExperienceSerializer
	http_method_names = ['get']

class EducationViewset(viewsets.ModelViewSet):
	queryset = models.Education.objects.all().order_by('-start_date')
	serializer_class = serializers.EducationSerializer
	http_method_names = ['get']

class SkillViewset(viewsets.ModelViewSet):
	queryset = models.Skill.objects.all()
	serializer_class = serializers.SkillSerializer
	http_method_names = ['get']

class PortfolioViewset(viewsets.ModelViewSet):
	queryset = models.Portfolio.objects.all().order_by('portfolio_type', 'priority')
	serializer_class = serializers.PortfolioSerializer
	http_method_names = ['get']

class PortfolioTypeViewset(viewsets.ModelViewSet):
	queryset = models.PortfolioType.objects.all().order_by('priority')
	serializer_class = serializers.PortfolioTypeSerializer
	http_method_names = ['get']