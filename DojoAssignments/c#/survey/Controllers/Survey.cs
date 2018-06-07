using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace survey.Controllers     //be sure to use your own project's namespace!
{
    public class Home : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost]       //type of request
        [Route("")]
            //associated route string (exclude the leading /)
        public IActionResult Index(string name, string location, string language, string comment)
        {
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.language = language;
            ViewBag.comment = comment;

            return View("Result");
        }

        [HttpGet]       //type of request
        [Route("result")]
        public IActionResult result()
        {
            return View("Result");
        }

    }
}
