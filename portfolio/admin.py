from django.contrib import admin
from .models import Experience, Education, Skill, Language, Portfolio, Language, Technology, PortfolioType

# Register your models here.

admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Skill)
admin.site.register(Language)
admin.site.register(Portfolio)
admin.site.register(Technology)
admin.site.register(PortfolioType)