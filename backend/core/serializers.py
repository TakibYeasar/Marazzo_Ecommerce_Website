from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    
    
    
class SubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")

    
    
class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    
    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        # depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    
    
    
class SingleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    
    
    
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
        depth = 1



class ArticlescategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Articlescategory
        fields = "__all__"
        depth = 1
        
        
class ArticlestagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articlestag
        fields = "__all__"
        depth = 1
        
 

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = "__all__"
        depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")
    
    
    
class ArticleReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleReview
        fields = "__all__"
        depth = 1
        
        
class RepalyArticleReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReplayArticleReview
        fields = "__all__"
        depth = 1




class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"
        depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class NewslatterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newslatter
        fields = "__all__"
        depth = 1






































