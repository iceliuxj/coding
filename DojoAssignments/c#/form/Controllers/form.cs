using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using form.Models;

namespace form.Controllers     
{
    public class Home : Controller{
        [HttpGet]
        [Route("")]

        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost]
        [Route("user/create")]

        public IActionResult Create(User user)
        {
            if(ModelState.IsValid)
            {
                return View("Success");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet]
        [Route("success")]

        public IActionResult Success()
        {
            return View("Success");
        }
    }
}