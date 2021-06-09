from re import T
from django.db import models
from django.db.models.enums import Choices
from django.db.models.fields import CharField, EmailField, related
from django.urls import reverse
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from main_app.choicesfile import choices_var

choices = choices_var

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = CharField(max_length=20, null=True)
    last_name = CharField(max_length=20, null=True)
    email = EmailField(max_length=100, null=True)
    bio = models.TextField(max_length=500, blank=True)
    zipcode = models.IntegerField(blank=True, null=True)
    skills = models.CharField(max_length=100, choices=choices, default=choices[0][0])
    rate = models.IntegerField(null=True, blank=True)
    image = CharField(max_length=200, null=True)
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()   


class Slot(models.Model):
    hour = models.CharField(max_length=10, null=True)
    date = models.CharField(max_length=50, null=True)
    student = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='student_assoc')
    tutor = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='tutor')

    class Meta:
        ordering = ['hour']

class Review(models.Model):
    comment = models.TextField(max_length=500, blank=True)
    rating = models.IntegerField(blank=True, null=True)
    post_date = models.DateTimeField(auto_now_add=True, blank=True)
    student = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='review_student')
    tutor = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='review_tutor')

    class Meta:
        ordering = ['post_date']