from django.urls import path
from accounts import views as UserViews # This is for the views adn the userViews from django

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # This is for the register api url.
    path('register/', UserViews.RegisterView.as_view()),

    # API
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
