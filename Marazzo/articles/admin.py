from django.contrib import admin

# Register your models here.
from .models import (
    Articlecategory,
    Articlestag,
    Article,
    ArticleComment,
)

admin.site.register([
    Articlecategory,
    Articlestag,
    Article,
    ArticleComment,
])
