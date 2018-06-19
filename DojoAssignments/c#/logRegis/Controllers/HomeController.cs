using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using logRegis.Models;
using Microsoft.AspNetCore.Identity;

namespace logRegis.Controllers
{
    public class HomeController : Controller
    {
        private userContext _context;

        public HomeController(userContext user){
            _context = user;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login(string Email, string PasswordToCheck)
        {
            List<User> user = _context.users.Where(u=>u.Email == Email).ToList();
            // Console.WriteLine(user);
            user.ForEach(Console.WriteLine);
            if (user != null && PasswordToCheck != null){
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(user[0], user[0].Password, PasswordToCheck))
                {
                    //Handle success
                    return View("Success");
                }
            }
            ViewBag.error_message= "email or password is not valid.";
            return View("Index");
        }

        public IActionResult LogReg(User user, string Password_c)
        {      
            if (user.Password == Password_c) {
                if(ModelState.IsValid)
                {   
                    if(user.Password == Password_c){
                        PasswordHasher<User> Hasher = new PasswordHasher<User>();
                        user.Password = Hasher.HashPassword(user, user.Password);
                        _context.Add(user);
                        _context.SaveChanges();  
                        return View("Success");
                        }
                }
            }
            ViewBag.error_message ="password does not match!";
            return View("Index");           
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
