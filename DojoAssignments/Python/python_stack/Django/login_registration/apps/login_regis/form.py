from django import forms
from .models import User
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime 

# class UserForm(forms.ModelForm):

#     def __init__(self, *args, **kwarg):
#         super(UserForm, self).__init__(*args, **kwargs)
#         self.fields['email'].required = True
#         self.fields['password'].required = True

#     class Meta:
#         model = MyUser

class Userform(forms.Form):
    first_name = forms.CharField()
    last_name = forms.CharField()
    password = forms.CharField()
    password2 = forms.CharField()

    def clean_password(self):
        password = self.cleaned_data['password']
        if len(password) <= 7:
            raise forms.ValidationError("password insecure")
        return password

    def clean():
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get('password', '')
        password2 = cleaned_data.get('password2', '')

        if password != password2:
            raise forms.ValidationError("passwords not match")
        return cleaned_data