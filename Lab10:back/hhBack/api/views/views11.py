import json

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.models import Company, Vacancy
from api.serializers import CompanySerializer1, CompanySerializer2, VacancySerializer2, VacancySerializer1


@csrf_exempt
# Create your views here.
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json())


@csrf_exempt
def get_one_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'Product not found'}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', '')
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def get_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancies = Vacancy.objects.create(name=vacancy_name)
        return JsonResponse(vacancies.to_json())


@csrf_exempt
def get_one_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        serializer = VacancySerializer1(vacancy)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'Product not found'}, status=400)
    if request.method == 'GET':
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def get_companies_vacancies(request, id):
    vacancy = Vacancy.objects.filter(company=id)
    vacancy_json = [v.to_json() for v in vacancy]
    return JsonResponse(vacancy_json, safe=False)


def get_top_ten(request):
    vacancy = Vacancy.objects.all()
    serializer = VacancySerializer2(vacancy)
    return JsonResponse(serializer.data[:10], safe=False)
