from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'texts', views.TextViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('textreturn/', views.TextRecieved, name='textconf'),
    path('bot_analysis/', views.BotResponse, name='bottext'),

]