from rest_framework import serializers
from . import models

class ExperienceSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Experience
		fields = ('id', 'title', 'company', 'location', 'start_date', 'end_date', 'description')

class EducationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Education
		fields = ('id', 'degree', 'college', 'start_date', 'end_date')

class SkillSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Skill
		fields = ('id', 'skill', 'rating', 'skill_type')

class PortfolioTypeArraySerializer(serializers.ModelSerializer):
	def to_representation(self, value):
		return value.portfolio_type

	class Meta:
		model = models.PortfolioType

class LanguageSerializer(serializers.ModelSerializer):
	def to_representation(self, value):
		return value.language

	class Meta:
		model = models.Language

class TechnologySerializer(serializers.ModelSerializer):
	def to_representation(self, value):
		return value.technology

	class Meta:
		model = models.Technology

class PortfolioSerializer(serializers.ModelSerializer):
	portfolio_type = PortfolioTypeArraySerializer(many=False, read_only=True)
	languages = LanguageSerializer(many=True, read_only=True)
	technology = TechnologySerializer(many=True, read_only=True)
	
	class Meta:
		model = models.Portfolio
		fields = ('id', 'title', 'portfolio_type', 'languages', 'technology', 'github', 'url', 'description', 'priority')

class PortfolioTypeSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.PortfolioType
		fields = ('portfolio_type', 'priority')
