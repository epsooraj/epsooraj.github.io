from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

class ExperienceViewset(viewsets.ModelViewSet):
	queryset = models.Experience.objects.all()
	serializer_class = serializers.ExperienceSerializer