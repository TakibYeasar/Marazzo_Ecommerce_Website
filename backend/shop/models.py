from django.db import models
from Product.models import Profile, Product


# Create your models here.

class Cart(models.Model):
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    total = models.PositiveIntegerField()
    complete = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)


class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    subtotal = models.PositiveIntegerField()

    def __str__(self):
        return f"Cart=={self.cart.id}<==>CartProduct:{self.id}==Qualtity=={self.quantity}"


ORDER_STATUS = (
    ("Order Received", "Order Received"),
    ("Order Processing", "Order Processing"),
    ("On the way", "On the way"),
    ("Order Completed", "Order Completed"),
    ("Order Canceled", "Order Canceled"),
)


class Order(models.Model):
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    mobile = models.CharField(max_length=16)
    email = models.CharField(max_length=200)
    total = models.PositiveIntegerField()
    discount = models.PositiveIntegerField()
    order_status = models.CharField(max_length=100, choices=ORDER_STATUS, default="Order Received")
    date = models.DateField(auto_now_add=True)
    payment_complete = models.BooleanField(default=False, blank=True, null=True)




class Address(models.Model):
    buyer = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    street = models.CharField(max_length=255, null=True, blank=True)
    zip_code = models.CharField(max_length=50, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    is_default = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return f"{self.buyer.username} => {self.street}"


class Payment(models.Model):
    buyer = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    stripe_charge_id = models.CharField(max_length=100)
    amount = models.FloatField()

    def __str__(self):
        return self.stripe_charge_id