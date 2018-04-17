from django.conf.urls import url
from . import views
# This line is new!
urlpatterns = [
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^users/new$', views.new),
    url(r'^users$', views.show),
]