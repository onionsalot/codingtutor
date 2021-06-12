from django.contrib import admin
from .models import Profile, Slot, Review

# Register your models here.
admin.site.register(Profile)
admin.site.register(Slot)
admin.site.register(Review)