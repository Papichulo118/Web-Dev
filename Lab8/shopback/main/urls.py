from django.contrib import admin
from django.urls import path, include
from main import views

urlpatterns = [
    path("products/", views.product_list),
    path("products/<int:id>/", views.get_item),
    # path("/api/categories/", views.categories_list),
    # path("/api/categories/<int:id>/", views.categories_item),
    # path("/api/categories/<int:id>/products/", views.get_products_by_category),
]