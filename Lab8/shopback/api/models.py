from django.db import models

"""
create table product(
    name varchar(255),
    price float default 1000,
    description varchar(255),
    count INTEGER,
    is_active BOOLEAN,
);
create table category(
    name varchar(255),
);
"""


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=255)
    count = models.IntegerField()
    is_active = models.BooleanField()
    categories = models.ManyToManyField(Category)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }
