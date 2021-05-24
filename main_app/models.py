from django.db import models
from django.db.models.enums import Choices
from django.urls import reverse
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
choices = (
    ("JS", "JavaScript"),
    ("PY", "Python"),
    ("REACT", "React"),
)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    zipcode = models.IntegerField(blank=True, null=True)
    skills = models.CharField(max_length=100, choices=choices, default=choices[0][0])
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()   


# class Student(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100)
#     password = models.CharField(max_length=100)
#     zipcode = models.IntegerField()

#     def __str__(self):
#         return self.name
    
#     def get_absolute_url(self):
#         return reverse("home", kwargs={"student_id": self.id})
