from django.db import models

"""
create table company(
    name varchar(255),
    description varchar(255),
    city varchar(255),
    address varchar(255),
);

create table vacancy(
    name varchar(255),
    description varchar(255),
    salary float,
);
"""


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=255)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField()
    company = models.ManyToManyField(Company)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
        }
