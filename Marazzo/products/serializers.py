from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        depth = 1


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1

    def get_image_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        else:
            return obj.image.url


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
        depth = 1


class HotdealsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotdeals
        fields = "__all__"
        depth = 1
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['product'] = ProductSerializer(
            instance.product, context={'request': request}).data
        return response


class FeaturedprodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Featuredprod
        fields = "__all__"
        depth = 1
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['product'] = ProductSerializer(
            instance.product, context={'request': request}).data
        return response


class SpecialofferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialoffer
        fields = "__all__"
        depth = 1
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['product'] = ProductSerializer(
            instance.product, context={'request': request}).data
        return response


class SpecialdealsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialdeals
        fields = "__all__"
        depth = 1
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['product'] = ProductSerializer(
            instance.product, context={'request': request}).data
        return response
