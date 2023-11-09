from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

# # Create your views here.

 

class CategoryView(APIView):
    def get(self, request):
        deptitem_obj = Category.objects.all()
        deptitem_serializers = CategorySerializer(deptitem_obj, many=True, context={'request':request}).data
        return Response(deptitem_serializers)
    
    
class SubcategoryView(APIView):
    def get(self, request):
        deptitem_obj = Subcategory.objects.all()
        deptitem_serializers = SubcategorySerializer(deptitem_obj, many=True, context={'request':request}).data
        return Response(deptitem_serializers)
    
    
class BannerView(APIView):
    def get(self, request):
        banner_obj = Banner.objects.all()
        banner_serializers = BannerSerializer(banner_obj, many=True, context={'request':request}).data
        return Response(banner_serializers)
    


class CategoryprodsView(APIView):
    def get(self, request, pk):
        category_obj = Subcategory.objects.filter(id=pk)
        category_serializer = CategorySerializer(category_obj, context={'request':request}, many=True).data
        data = []
        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerializer(product_obj, context={'request':request}, many=True).data
            data.append(cata)
        return Response(data)


class AllProductView(APIView):
    def get(self, request):
        product_obj = Product.objects.all()
        product_serializer = ProductSerializer(product_obj, context={'request':request}, many=True).data
        return Response(product_serializer)


# class CategoryProductsAPIView(generics.GenericAPIView):
#     serializer_class = ProductSerializer

#     def get_queryset(self):
#         category_name = self.kwargs.get('pk')
#         category = Category.objects.get(name=category_name)
#         products = Product.objects.filter(category=category)
#         return products

#     def get(self, request, pk):
#         serializer = self.serializer_class(
#             self.get_queryset(), many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    

# class SingleProductAPIView(generics.GenericAPIView):
#     serializer_class = ProductSerializer

#     def get_queryset(self):

#         pk = self.kwargs.get('pk')
#         try:
#             product = Product.objects.get(slug=pk)
#         except:
#             product = Product.objects.get(id=pk)

#         return product

#     def get(self, request,  pk):
#         serializer = self.serializer_class(self.get_queryset())
#         return Response(serializer.data, status=status.HTTP_200_OK)


class ReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            product = Product.objects.filter(pk=id).first()
            if product:
                review_serializer.save(customer=request.customer, product=product)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class SingleProductView(APIView):
    def get(self, request, pk):
        product_obj = Product.objects.filter(id=pk)
        product_serializer = SingleProductSerializer(product_obj, many=True, context={'request':request}).data
        return Response(product_serializer)



class ArticlescategoryView(APIView):
    def get(self, request):
        articles_obj = Articlescategory.objects.all()
        articles_serializer = ArticlescategorySerializer(articles_obj, context={'request':request}, many=True).data
        return Response(articles_serializer)
    
    
class AllArticlesView(APIView):
    def get(self, request):
        articles_obj = Articles.objects.all()
        articles_serializer = ArticlesSerializer(articles_obj, context={'request':request}, many=True).data
        return Response(articles_serializer)
    

class SingleArticleView(APIView):
    def get(self, request, pk):
        article_obj = Articles.objects.filter(id=pk)
        article_serializer = ArticlesSerializer(article_obj, many=True, context={'request':request}).data
        return Response(article_serializer)



class TestimonialView(APIView):
    def get(self, request):
        testimonial_obj = Testimonial.objects.all()
        testimonial_serializer = TestimonialSerializer(testimonial_obj, context={'request':request}, many=True).data
        return Response(testimonial_serializer)
    
    
class NewslatterView(APIView):
    def get(self, request):
        newslatter_obj = Newslatter.objects.all()
        newslatter_serializer = NewslatterSerializer(newslatter_obj, context={'request':request}, many=True).data
        return Response(newslatter_serializer)






























