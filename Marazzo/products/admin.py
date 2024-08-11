from django.contrib import admin

from .models import (
    Category,
    Producttags,
    ProductImage,
    Product,
    Review,
    Hotdeals,
    Featuredprod,
    Specialoffer,
    Specialdeals,
)

admin.site.register([
    Category,
    Producttags,
    ProductImage,
    Product,
    Review,
    Hotdeals,
    Featuredprod,
    Specialoffer,
    Specialdeals,
])
