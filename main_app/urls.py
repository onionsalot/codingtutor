from django.urls import path
from . import views
from .views import current_user, UserList, all_profiles

urlpatterns = [
    path('', views.home, name='home'),
    path('users/', UserList.as_view()),
    path('current_user/', current_user),
    path('all_profiles/', all_profiles),
]