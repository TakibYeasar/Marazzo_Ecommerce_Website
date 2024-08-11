from django.urls import path
from .views import *

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user_registration'),
    path('activate/<str:token>/', UserAccountVerificationView.as_view(),
         name='user_account_verification'),
    path('resend-activation/', ActivationResendView.as_view(),
         name='activation_resend'),
    path('login/', UserLoginView.as_view(), name='user_login'),
    path('logout/', LogOutView.as_view(), name='user_logout'),
    path('change-password/', ChangePasswordApiView.as_view(), name='change_password'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),
    path('dashboard/', UserDashboardView.as_view(), name='user_dashboard'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('update-profile/', UpdateUserProfile.as_view(),
         name='update_user_profile'),
]
