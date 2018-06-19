using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using bank.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace bank.Controllers
{
    public class HomeController : Controller
    {
        private userContext _context;

        public HomeController(userContext context){
            _context = context;
        }
          
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("login")]
        public IActionResult Login()
        {
            return View("Login");
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(string Email, string PasswordToCheck)
        {
            List<User> user = _context.users.Where(u=>u.Email == Email).ToList();
            if (user != null && PasswordToCheck != null){
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(user[0], user[0].Password, PasswordToCheck))
                {
                    //Handle success
                    HttpContext.Session.SetInt32("Id", (int)user[0].UserId); 
                    int? x = HttpContext.Session.GetInt32("Id");
                    Console.WriteLine(x.Value);
                    return RedirectToAction("Account");
                }
            }
            return View("Index");
        }

        public IActionResult LogReg(User user, string Email, string Password_c)
        {      
            if (user.Password == Password_c) {
                if(ModelState.IsValid)
                {   
                    User user1 = _context.users.SingleOrDefault(u=>u.Email == Email);
                    if ( user1 == null)
                        {
                        PasswordHasher<User> Hasher = new PasswordHasher<User>();
                        user.Password = Hasher.HashPassword(user, user.Password);
                        _context.Add(user);
                        _context.SaveChanges();
                        User user2 = _context.users.SingleOrDefault(u=>u.Email == Email);
                        HttpContext.Session.SetInt32("Id", user2.UserId);  
                        return RedirectToAction("Account");
                        }
                    else{
                        ViewBag.error_message1 ="Email is in use!";
                        return View("Index");  
                    }
                }
            }
            else {
            ViewBag.error_message2 ="password does not match!";
            return View("Index");
            }
            return RedirectToAction("Account");          
        }

        public IActionResult Account(){
            if(HttpContext.Session.GetInt32("Id") == null) {
                return RedirectToAction("Login");
            }
            else {
                int? x= HttpContext.Session.GetInt32("Id");
                User user = _context.users.SingleOrDefault(u=>u.UserId == (int)x);
                List<Account> allaccounts= _context.accounts.Include(a=>a.user).Where(u=>u.UserId == (int)x).ToList();
                ViewBag.user= user;
                ViewBag.all= allaccounts;
                return View("Account");
            }
        }

        public IActionResult Transaction(double Amount){
            int? x= HttpContext.Session.GetInt32("Id");
            User user = _context.users.SingleOrDefault(u=>u.UserId == (int)x);
            List<Account> allaccounts= _context.accounts.Include(a=>a.user).Where(u=>u.UserId == (int)x).OrderByDescending(a=>a.Created_at).ToList();
            if (user.Balance + Amount < 0){
                TempData["error"]= "Insufficient fund to withdraw";
            }
            else {
                user.Balance = user.Balance + Amount;
                user.Updated_at = DateTime.Now;
                _context.SaveChanges();
                
                Account temp = new Account{
                UserId = (int)x,
                Amount = Amount,
                Created_at = DateTime.Now
                };
                _context.accounts.Add(temp);
                _context.SaveChanges();
            }
            return RedirectToAction("Account");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
