# Generated by Django 3.2.3 on 2021-06-10 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0014_alter_profile_skills'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='place_id',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]