from django.urls import path
from . import views
from .views import current_user, UserList

urlpatterns = [
    path('', views.home, name='home'),
    path('users/', UserList.as_view()),
    path('current_user/', current_user),
    # path('create/', views.StudentCreate.as_view(), name='create')
]