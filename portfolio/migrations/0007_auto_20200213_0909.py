# Generated by Django 3.0.3 on 2020-02-13 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_auto_20200212_1936'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
