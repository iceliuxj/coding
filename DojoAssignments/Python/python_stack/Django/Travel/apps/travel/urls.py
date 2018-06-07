from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^main$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^travels$', views.home),
    url(r'^travels/add$', views.add),
    url(r'^travels/create$', views.create),
    url(r'^travels/dest/(?P<number>\d+)$', views.dest),
    url(r'^join/(?P<number>\d+)$', views.join),
    url(r'^logout$', views.logout),
    
]