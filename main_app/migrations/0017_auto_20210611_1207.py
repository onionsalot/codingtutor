# Generated by Django 3.2.3 on 2021-06-11 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0016_auto_20210610_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='place_id',
            field=models.CharField(default='ChIJowv49br0wokRBi5L14DyqTo', max_length=100, null=True),
        ),
    ]