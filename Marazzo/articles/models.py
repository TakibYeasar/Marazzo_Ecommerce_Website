from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify
from authapi.models import CustomUser

# Create your models here.

class Articlescategory(models.Model):
    cat_name = models.CharField(max_length=255, blank=True, null=True)
    parent = models.ForeignKey('self', null=True, blank=True,
                               on_delete=models.CASCADE, verbose_name="Parent Category")
    is_active = models.BooleanField(default=True)
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Article Category'
        ordering = ('-created',)

    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.cat_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.cat_name

    def get_absolute_url(self):
        return reverse('articles:articlescategory', args=[self.slug])


class Articlestag(models.Model):
    tag_name = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Article Tags'
        ordering = ('-created',)

    def __str__(self):
        return self.tag_name


class Article(models.Model):
    author = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True, editable=False)
    category = models.ManyToManyField(
        Articlescategory, verbose_name="Article Category")
    image = models.ImageField(upload_to='articles/',
                              related_name='article-image')
    title = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    tags = models.ManyToManyField(Articlestag, verbose_name="Article tags")
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    is_active = models.BooleanField(default=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Article'
        ordering = ('-created',)

    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'({self.category}) - ({self.title})'

    def get_absolute_url(self):
        return reverse('articles:article', args=[self.slug])


class ArticleComment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', on_delete=models.CASCADE,
                               verbose_name="Articles Comment", null=True, blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Article Comments'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.article} From: {self.customer}"
