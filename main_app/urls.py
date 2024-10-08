
from django.urls import path
from . import views

urlpatterns = [
    
]

urlpatterns = [
    path('', views.home, name='home'), #enter_home
    path('es/', views.home_spanish, name='home_spanish'),#enter_home_sp
    path('plants/', views.plants, name='plants'), #plants_home
    path('plants_es/', views.plants_es, name='plants_es'), #plants_home
    path('original/', views.landing_page, name='landing_page'), #original landing page
    path('metalworks/', views.metalworks, name='metalworks'),#metalworks_home
    path('es_metalworks/', views.metalworks_es, name='metalworks_es'),#metalworks_home_sp
    path('enter_home/', views.enter_home, name='enter_home'),
    path('metalworks_samples/', views.metalworks_samples, name='metalworks_samples'),
    path('metalworks_samples_es/', views.metalworks_samples_es, name='metalworks_samples_es'),
]
