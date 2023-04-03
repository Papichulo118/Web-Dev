import json

from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response

from api.models import Product, Category


# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def get_item(request, id):
    product = get_object_or_404(Product, id=id)
    product_get = product.to_json()
    return JsonResponse(product_get)


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def categories_item(request, id):
    category = get_object_or_404(Category, id=id)
    category_get = category.to_json()
    return JsonResponse(category_get)


def get_products_by_category(request, id):
    products = Product.objects.filter(categories=id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
