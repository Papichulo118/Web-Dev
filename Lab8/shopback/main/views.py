from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render


# Create your views here.
def product_list(request):
    return JsonResponse(
        [
            {'id': 1, 'name': 'Product 1'},
        ],
        safe=False
    )
def get_item(request,id):
    return JsonResponse({'id': id})