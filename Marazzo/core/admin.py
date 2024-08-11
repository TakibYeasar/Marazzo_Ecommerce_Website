from django.contrib import admin

from .models import (
    Contactinfo,
    Banner,
    Featured,
    Testimonial,
    Newslatter,
)

admin.site.register([
    Contactinfo,
    Banner,
    Featured,
    Testimonial,
    Newslatter,
])
