from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add$', views.add),
    url(r'^courses/destroy/(?P<number>\d+)$', views.confirm),
    url(r'^courses/delete/(\d+)$', views.destroy)
]