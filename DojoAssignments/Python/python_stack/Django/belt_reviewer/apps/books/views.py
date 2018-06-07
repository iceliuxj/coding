from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error
import bcrypt
import re

def index(request):
    return render(request, "add_book.html")

def add(request):
    book = Book.objects.get(title=request.POST['title'])

            new_review = Review.objects.create(
                review = postData['review'],
                rating = postData['rating'],
                book_id = book.id,
                user_id = pass_id
            )
            return new_book
        return redirect('/book/add')

    context = {
        "books": Review.objects.order_by("-created_at"),
        "title": 'Books Home',
    }
    return render(request,'books/books.html', context)