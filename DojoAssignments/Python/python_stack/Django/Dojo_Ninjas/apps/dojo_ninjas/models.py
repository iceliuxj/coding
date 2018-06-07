from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Dojo(models.Model):
    name = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    state = models.CharField(max_length=45)
    desc = models.TextField(default = "")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "<Dojo object: {} {} {}".format(self.name, self.city,self.state)

class Ninja(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    dojo = models.ForeignKey(Dojo, related_name = "ninjas")
    def __repr__(self):
        return "<Dojo object: {} {} {}".format(self.first_name, self.last_name,self.dojo)