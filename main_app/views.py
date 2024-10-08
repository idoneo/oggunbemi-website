
from django.shortcuts import render
from django.conf import settings

def home(request):
    context = {
        'STATIC_URL': settings.STATIC_URL,
    }
    return render(request, 'main_app/enter_home.html', context)

def home_spanish(request):
    return render(request, 'main_app/enter_home_sp.html')

def plants(request):
    return render(request, 'main_app/plants_home.html')

def plants_es(request):
    return render(request, 'main_app/plants_home_es.html')  

def metalworks(request):
    return render(request, 'main_app/metalworks_home.html')

def metalworks_es(request):
    return render(request, 'main_app/metalworks_home_sp.html')

#def home(request):
    #return render(request, 'main_app/home.html') #original home page

def landing_page(request):
    return render(request, 'main_app/landing.html') #original landing page

def enter_home(request):
    context = {
        'photo_range': range(1, 15)  # Creates a range of numbers from 1 to 14
    }
    return render(request, 'main_app/enter_home.html', context)

def enter_home(request):
    return render(request, 'main_app/enter_home.html')

def metalworks_samples(request):
    return render(request, 'main_app/metalworks_samples.html')

def metalworks_samples_es(request):
    return render(request, 'main_app/metalworks_samples_es.html')
