from django.contrib import admin
from django.urls import path, include
from api import views
urlpatterns = [
    path("products/", views.product_list),
    path("products/<int:id>", views.get_item),
    path("categories/", views.categories_list),
    path("categories/<int:id>/", views.categories_item),
    path("categories/<int:id>/products/", views.get_products_by_category),
]