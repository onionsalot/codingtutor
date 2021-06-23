from django.urls import path
from . import views
from .views import assoc_student, current_user, UserList, all_profiles, add_slot, details, available_slots, assoc_student, user_reviews, add_review, add_image, dashboard
from django_js_choices.views import choices_js
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('token-auth/', obtain_jwt_token),

    path('', views.home, name='home'),
    path('jschoices/', choices_js, name='js_choices'),
    path('users/', UserList.as_view()),
    path('users/image/', add_image),
    path('details/<int:user_id>/', details),
    path('details/user_reviews/<int:tutor_id>/', user_reviews),
    path('details/<int:tutor_id>/add_review/<int:student_id>/', add_review),
    path('current_user/', current_user),
    path('all_profiles/', all_profiles),
    path('slots/<int:user_id>/add_slot/', add_slot),
    path('slots/<int:user_id>/available_slots/', available_slots),
    path('slots/<int:slot_id>/assoc_student/<int:user_id>/', assoc_student),
    path('dashboard/<int:user_id>/', dashboard),
]