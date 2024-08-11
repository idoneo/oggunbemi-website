from django.shortcuts import render

def home(request):
    return render(request, 'main_app/home.html')


def landing_page(request):
    return render(request, 'main_app/landing.html')
