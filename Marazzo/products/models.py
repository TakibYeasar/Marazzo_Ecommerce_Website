from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify
from authapi.models import CustomUser

 
class Category(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    cat_name = models.CharField(max_length=255, blank=True, null=True)
    icon = models.ImageField(upload_to='category/', blank=True, null=True)
    image = models.ImageField(upload_to='category/', blank=True, null=True)
    parent = models.ForeignKey('self', null=True, blank=True,
                               on_delete=models.CASCADE, verbose_name="Parent Category")
    is_active = models.BooleanField(default=True)
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ('-created',)

    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.cat_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.cat_name

    def get_absolute_url(self):
        return reverse('blogs:category', args=[self.slug])

class Producttags(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Product tags'
        ordering = ('-created',)

    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])


class ProductImage(models.Model):
    image = models.ImageField(upload_to='products/')
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Product Images'

    def __str__(self):
        return str(self.image)


STATUS_TYPE = (
    ("new", "new"),
    ("hot", "hot"),
    ("sale", "sale"),
)


class Product(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    category = models.ManyToManyField(
        Category, verbose_name="Category")
    status_type = models.CharField(choices=STATUS_TYPE, default="new")
    title = models.CharField(max_length=255, blank=True, null=True)
    main_image = models.ForeignKey(
        ProductImage, related_name='productitem_main_image', on_delete=models.CASCADE, default=1)
    images = models.ManyToManyField(
        ProductImage, related_name='productitem_images', blank=True)
    price = models.PositiveBigIntegerField()
    old_price = models.PositiveBigIntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    prodtags = models.ManyToManyField(Producttags)
    in_stock = models.BooleanField(default=True)
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Products'
        ordering = ('-created',)

    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'({self.category}) - ({self.title})'

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', blank=True, null=True,
                               on_delete=models.CASCADE, verbose_name="Product Review")
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    comment = models.TextField()
    rate = models.IntegerField(default=0)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Product Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.product} From: {self.customer}"


class Hotdeals(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    discount = models.PositiveBigIntegerField(blank=True, null=True)
    duration = models.TimeField()
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Hotdeals'
        ordering = ('-created',)

    def __str__(self):
        return self.product

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])


class Featuredprod(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Featured Product'
        ordering = ('-created',)

    def __str__(self):
        return self.product

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])


class Specialoffer(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    new_price = models.PositiveBigIntegerField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Special Offer'
        ordering = ('-created',)

    def __str__(self):
        return self.product

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])


class Specialdeals(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    new_price = models.PositiveBigIntegerField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Special Deals'
        ordering = ('-created',)

    def __str__(self):
        return self.product

    def get_absolute_url(self):
        return reverse('blogs:product', args=[self.slug])
