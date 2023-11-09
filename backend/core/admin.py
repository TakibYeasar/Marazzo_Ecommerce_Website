from django.contrib import admin

from .models import (
    Category,
    Subcategory,
    Banner,
)

admin.site.register([
    Category,
    Subcategory,
    Banner,
])