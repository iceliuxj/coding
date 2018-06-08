using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using survey.Models;

namespace survey.Controllers     //be sure to use your own project's namespace!
{
    public class Home : Controller   
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost]  
        [Route("ninja/create")]
        public IActionResult Create(Ninja ninja)
        //string name, string location, string language, string comment
        {   

            if(ModelState.IsValid)
            {
                return View("Result", ninja);
            }
            else
            {   
                return View("Index");
            }
            
        }

        [HttpGet]       //type of request
        [Route("result")]
        public IActionResult result()
        {
            return View("Result");
        }

    }
}
