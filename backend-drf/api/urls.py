from django.urls import path
from accounts import views as UserViews # This is for the views adn the userViews from django



urlpatterns = [
    # This is for the register api url.
    path('register/', UserViews.RegisterView.as_view()),
]
