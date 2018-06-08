using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using viewmodel.Models;

namespace viewmodel.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Numbers()
        {
            ViewData["Message"] = "Here are some numbers!";

            return View();
        }

        public IActionResult Users()
        {
            ViewData["Message"] = "Here are some Users!";
            List<string> any = new List<string>();
            any.Add("Sally");
            any.Add("Billy");
            any.Add("Jean");
            any.Add("Shawn");
            Users users = new Users(){
                people = any
            };
            // users.people.Add("Sally");
            // users.people.Add("Billy");
            // users.people.Add("Jean");
            // users.people.Add("Shawn");

            return View(users);
        }

        public IActionResult user()
        {
            ViewData["Message"] = "Here is a User!";
            User user = new User (){
                Name = "shawn"
            };

            return View(user);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
