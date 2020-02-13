from rest_framework import serializers
from . import models

class ExperienceSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Experience
		fields = ('id', 'title', 'company', 'location', 'start_date', 'end_date', 'description')
