from django.db import models

class IPO(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    lot_size = models.IntegerField()
    status = models.CharField(max_length=20)
