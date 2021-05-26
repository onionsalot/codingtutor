from django.urls import path
from . import views
from .views import current_user, UserList, all_profiles, add_slot
from django_js_choices.views import choices_js

urlpatterns = [
    path('', views.home, name='home'),
    path('jschoices/', choices_js, name='js_choices'),
    path('users/', UserList.as_view()),
    path('current_user/', current_user),
    path('all_profiles/', all_profiles),
    path('slots/<int:user_id>/add_slot/', add_slot),
]