from __future__ import unicode_literals
from django.db import models
from datetime import datetime
from time import strftime
import re
import bcrypt


class UserManager(models.Manager):
    def validate_registration(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['name']) < 3:
            errors["name"] = "Name should be more than 3 characters"
        if len(postData['username']) < 3:
            errors["username"] = "Username should be more than 3 characters"
        if User.objects.filter(username = postData['username']):
            errors["username"] = "Username already exists!"
        if len(postData['password']) < 8:
            errors["password"] = "Password should be at least 8 characters"
        elif postData['password'] != postData['password2']:
            errors["password"] = "Password does not match!"
        return errors
    
    def validate_login(self, postData):
        errors = {}
        if not User.objects.filter(username=postData['username']):
           errors['username'] = "Username is not found!"
        password = postData['password']
        user = User.objects.filter(username = postData['username'])
        password1 = user[0].password
        if bcrypt.checkpw(password.encode(), password1.encode()) == False :
            errors['password'] = "Password doesn't match!"
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    objects = UserManager()

class TripManager(models.Manager):
    def validate_trip(self, postData):
        errors = {}
        start = datetime.strptime(postData['start'], '%m-%d-%y')
        end = datetime.strptime(postData['end'], '%m-%d-%y')
        if start < datetime.today():
            errors['date'] = "Travel date should be future dated!"
        if start > end:
            error['date'] = "Travel start date should not be before the end date!"
        return errors

class Trip(models.Model):
    dest = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name="trips")
    liked_users = models.ManyToManyField(User, related_name="liked_trips")
    travel_date_from = models.CharField(max_length=255)
    travel_date_to = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    objects = TripManager()
