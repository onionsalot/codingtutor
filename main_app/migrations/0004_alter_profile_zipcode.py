# Generated by Django 3.2.3 on 2021-05-24 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_auto_20210524_2204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='zipcode',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
