# Generated by Django 3.2.3 on 2021-06-14 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0018_alter_profile_skills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='hour',
            field=models.CharField(default='00', max_length=10, null=True),
        ),
    ]
