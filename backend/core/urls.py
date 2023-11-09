from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('banners/', BannerView.as_view()),
    path('category/', CategoryView.as_view()),
]