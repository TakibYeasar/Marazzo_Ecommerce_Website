from django.urls import path
from .views import *

urlpatterns = [
    path('categories/', GetArticleCategoryView.as_view(),
         name='get_article_category'),
    path('category/single/<int:id>/',
         GetArticleCategoryView.as_view(), name='single_article_category'),
    path('category/create/', CreateArticleCategoryView.as_view(),
         name='create_article_category'),
    path('category/update/<int:id>/',
         UpdateArticleCategoryView.as_view(), name='update_article_category'),
    path('category/delete/<int:id>/',
         DeleteArticleCategoryView.as_view(), name='delete_article_category'),

    path('article/', GetArticleView.as_view(), name='get_article'),
    path('article/create/', CreateArticleView.as_view(), name='create_article'),
    path('article/update/<int:id>/',
         UpdateArticleView.as_view(), name='update_article'),
    path('article/delete/<int:id>/',
         DeleteArticleView.as_view(), name='delete_article'),
    
    path('article/comment/<int:article_id>/',
         GetCommentArticleView.as_view(), name='get_article_comment'),
    path('article/comment/create/<int:article_id>/',
         CreateCommentArticleView.as_view(), name='create_article_comment'),
    path('article/comment/update/<int:comment_id>/',
         UpdateCommentArticleView.as_view(), name='update_article_comment'),
    path('article/comment/delete/<int:comment_id>/',
         DeleteCommentArticleView.as_view(), name='delete_article_comment'),

    path('article/comment/reply/<int:article_id>/<int:comment_id>/',
         GetReplyCommentView.as_view(), name='get_reply_comment'),
    path('article/comment/reply/create/<int:article_id>/<int:comment_id>/',
         CreateReplyCommentView.as_view(), name='create_reply_comment'),
    path('article/comment/reply/update/<int:article_id>/<int:comment_id>/',
         UpdateReplyCommentView.as_view(), name='update_reply_comment'),
    path('article/comment/reply/delete/<int:article_id>/<int:comment_id>/',
         DeleteReplyCommentView.as_view(), name='delete_reply_comment'),
]
