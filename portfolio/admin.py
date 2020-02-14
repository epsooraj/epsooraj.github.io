from django.contrib import admin
from . import models

# Register your models here.
class ExperienceAdmin(admin.ModelAdmin):
	fields = ('title', 'company', 'location', ('start_date', 'end_date'), 'description')
	list_display = ('title', 'company', 'start_date', 'end_date')
	ordering = ('start_date',)
	search_fields = ('title', 'company', 'location')

admin.site.register(models.Experience, ExperienceAdmin)

class SkillAdmin(admin.ModelAdmin):
	list_display = ('skill', 'rating', 'skill_type')
	ordering = ('rating','skill_type')
	search_fields = ('skill',)

admin.site.register(models.Skill, SkillAdmin)

class EducationAdmin(admin.ModelAdmin):
	fields = ('degree', 'college', ('start_date', 'end_date'))
	list_display = ('degree', 'college', 'start_date', 'end_date')
	ordering = ('start_date',)
	search_fields = ('degree', 'college')

admin.site.register(models.Education, EducationAdmin)

class PortfolioAdmin(admin.ModelAdmin):
		list_display = ('title', 'portfolio_type', 'priority')
		ordering = ('portfolio_type','priority')
		search_fields = ('title', 'language', 'technology')

admin.site.register(models.Portfolio, PortfolioAdmin)

admin.site.register(models.Language)
admin.site.register(models.Technology)
admin.site.register(models.PortfolioType)
