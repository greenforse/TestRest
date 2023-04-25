from django.contrib import admin

# Register your models here.
from .models import Month
from .models import Sample
admin.site.register(Month)
admin.site.register(Sample)
