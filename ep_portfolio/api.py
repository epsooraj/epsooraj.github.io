from rest_framework import routers
from portfolio import views as portfolio_views

router = routers.DefaultRouter()
router.register(r'experience', portfolio_views.ExperienceViewset)
router.register(r'education', portfolio_views.EducationViewset)
router.register(r'skill', portfolio_views.SkillViewset)
router.register(r'portfolio', portfolio_views.PortfolioViewset)
router.register(r'portfoliotype', portfolio_views.PortfolioTypeViewset)