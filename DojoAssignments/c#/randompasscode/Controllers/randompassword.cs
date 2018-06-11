using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
 using Microsoft.AspNetCore.Http;


namespace randompasscode.Controllers
{
   
    public class Home : Controller

    {   
         private string GetRandom(){
           string allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
           Random rand = new Random();
           string newchars = "";
           for(var i = 0; i < 14;i++){
               newchars += allChars[rand.Next(0,36)];
           }
           return newchars;

            // var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            // var stringChars = new char[13];
            // var random = new Random();
            
            // for (int i = 0; i < stringChars.Length; i++)
            // {
            //     stringChars[i] = chars[random.Next(chars.Length)];
            // }

            // var finalString = new String(stringChars);
            // }
            
            // return finalString;
        
         }

        [HttpGet]
        [Route("")]
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]

        
        public IActionResult Create()
        {
            if(HttpContext.Session.GetInt32("trial")==null){
               HttpContext.Session.SetInt32("trial",0);
               ViewData["Trial"] = HttpContext.Session.GetInt32("trial");
               ViewData["RandNums"] = GetRandom();
           }
           else{
               int temp = (int) HttpContext.Session.GetInt32("trial");
               temp ++;
               HttpContext.Session.SetInt32("trial",temp);
               ViewData["Trial"] = HttpContext.Session.GetInt32("trial");
               ViewData["RandNums"] = GetRandom();
           }
            return View("Index");
        }

    }
}
