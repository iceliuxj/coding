using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DbConnection;
using lost.Models;
using lost.Trails;

namespace lost.Controllers
{
    public class Home: Controller
    {
        private readonly AddTrail Addtrail;

        public Home (){
            Addtrail = new AddTrail(); 
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            // Other code
            return View();
        }

        [HttpPost]
        [Route("add")]

        public IActionResult Add(Trail trail)
        {
            Console.WriteLine(trail.name);
            Addtrail.Newtrail(trail);
            return View();
        }
        
    }
}