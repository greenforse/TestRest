from django.contrib.auth.models import User
from django.db import models


# Create your models here


class Month(models.Model):
    name = models.CharField('Название', max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Месяц"
        verbose_name_plural = "Месяцы"


class Sample(models.Model):
    name = models.CharField('Название', max_length=50)
    iron_content = models.PositiveSmallIntegerField('Содержание железа', default=0, help_text="Поставьте оценку")
    sera_content = models.PositiveSmallIntegerField('Содержание серы', default=0, help_text="Поставьте оценку")
    other_content = models.PositiveSmallIntegerField('Иные содержания', default=0, help_text="Поставьте оценку")
    month = models.ForeignKey(Month, verbose_name="категории", on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Образец"
        verbose_name_plural = "Образцы"
