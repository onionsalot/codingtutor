from django.db import models
from django.db.models.enums import Choices
from django.db.models.fields import CharField, EmailField
from django.urls import reverse
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


choices = (
    ("JS", "JavaScript"),
    ("PY", "Python"),
    ("REACT", "React"),
)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = CharField(max_length=20, null=True)
    last_name = CharField(max_length=20, null=True)
    email = EmailField(max_length=100, null=True)
    bio = models.TextField(max_length=500, blank=True)
    zipcode = models.IntegerField(blank=True, null=True)
    skills = models.CharField(max_length=100, choices=choices, default=choices[0][0])
    rate = models.IntegerField(null=True, blank=True)
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()   


# class Slot(models.Model):
#     hour = models.CharField(max_length=10)
