from django.urls import URLPattern, path
from . import views
from rest_framework_simplejwt.views import (
        TokenObtainPairView,
        TokenRefreshView,
        )

app_name = 'api'
urlpatterns = [
    path('', views.GetRoutes),
    path('GetAllConversations/', views.GetAllConversations),
    path('UsersConversations/<int:id>/', views.UsersConversations),
    path('CreateConversation/', views.CreateConversation),
    path('DeleteConversation/<int:id>/', views.DeleteConversation),
    path('CreateUser/', views.CreateUser),
    path('DeleteUser/<int:id>/', views.DeleteUser),
    path('GetUsers/', views.GetUsers),
    path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

]
