using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restauranter.Models;
using Microsoft.AspNetCore.Http;

namespace Restauranter.Controllers
{
    public class HomeController : Controller
    {
        private reviewContext _context;

        public HomeController(reviewContext review){
            _context = review;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Add(Review review)
        {
            if(ModelState.IsValid)
            {   
                _context.Add(review);
                _context.SaveChanges();  
                return RedirectToAction("Review");
            }
            else
            {   
                return View("Index");
            }
        }

        public IActionResult Review()
        {
            ViewData["Message"] = "Your application description page.";
            List<Review> AllReviews = _context.reviews.ToList();
            ViewBag.all = AllReviews;
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
    }
}
