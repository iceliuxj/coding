from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def validate_registration(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['name']) < 2:
            errors["name"] = "Name should be more than 2 characters"
        if len(postData['alias']) < 2:
            errors["alias"] = "Alias should be more than 2 characters"
        if User.objects.filter(email = postData['email']):
            errors["email"] = "Email already exist!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Invalid Email Address!"
        if len(postData['password']) < 8:
            errors["password"] = "Password should be at least 8 characters"
        elif postData['password'] != postData['password2']:
            errors["password"] = "Password does not match!"
        else:        
            new_user = self.create(
                name = postData['name'],
                alias = postData['alias'],
                email = postData['email'],
                password = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
            ) 
            return new_user
        return errors
    
    def validate_login(self, postData):
        errors = {}
        if not User.objects.filter(email=postData['email']):
           errors['email'] = "Email is not found!"
        password = postData['password']
        user = User.objects.filter(email = postData['email'])[0]
        password1 = user.password
        if bcrypt.checkpw(password.encode(), password1.encode()) == False :
            errors['password'] = "Password doesn't match!"
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    objects = UserManager()

