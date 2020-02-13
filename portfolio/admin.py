from django.contrib import admin
from .models import Experience, Education, Skill, Language, Portfolio, Language, Technology, PortfolioType

# Register your models here.
class ExperienceAdmin(admin.ModelAdmin):
	fields = ('title', 'company', 'location', ('start_date', 'end_date'), 'description')
	list_display = ('title', 'company', 'start_date', 'end_date')
	ordering = ('start_date',)
	search_fields = ('title', 'company', 'location')

admin.site.register(Experience, ExperienceAdmin)

class SkillAdmin(admin.ModelAdmin):
	list_display = ('skill', 'rating', 'skill_type')
	ordering = ('rating',)
	search_fields = ('skill',)

admin.site.register(Skill, SkillAdmin)

class EducationAdmin(admin.ModelAdmin):
	fields = ('degree', 'college', ('start_date', 'end_date'))
	list_display = ('degree', 'college', 'start_date', 'end_date')
	ordering = ('start_date',)
	search_fields = ('degree', 'college')

admin.site.register(Education, EducationAdmin)

class PortfolioAdmin(admin.ModelAdmin):
		list_display = ('title', 'portfolio_type')
		ordering = ('title',)
		search_fields = ('title', 'language', 'technology')

admin.site.register(Portfolio, PortfolioAdmin)

admin.site.register(Language)
admin.site.register(Technology)
admin.site.register(PortfolioType)