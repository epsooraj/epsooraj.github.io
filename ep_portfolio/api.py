from rest_framework import routers
from portfolio import views as portfolio_views

router = routers.DefaultRouter()
router.register(r'experience', portfolio_views.ExperienceViewset)