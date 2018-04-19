from __future__ import unicode_literals
from django.db import models
import re
import bcrypt


class UserManager(models.Manager):
    def validate_registration(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['first_name']) < 2:
            errors["first_name"] = "First name should be more than 2 characters"
        if len(postData['last_name']) < 2:
            errors["last_name"] = "Last name should be more than 2 characters"
        if User.objects.filter(email = postData['email']):
            errors["email"] = "Email already exist!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Invalid Email Address!"
        if len(postData['password']) < 8:
            errors["password"] = "Password should be at least 8 characters"
        elif postData['password'] != postData['password2']:
            errors["password"] = "Password does not match!"
        return errors
    
    def validate_login(self, postData):
        errors = {}
        if not User.objects.filter(email=postData['email']):
           errors['email'] = "Email is not found!"
        password = postData['password']
        user = User.objects.filter(email = postData['email'])
        password1 = user[0].password
        if bcrypt.checkpw(password.encode(), password1.encode()) == False :
            errors['password'] = "Password doesn't match!"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    Last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    objects = UserManager()