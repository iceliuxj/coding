using Microsoft.AspNetCore.Mvc;
namespace web.Controllers     //be sure to use your own project's namespace!
{
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]
            //associated route string (exclude the leading /)
        public string Index()
        {
            return "This is my Index";
        }

        // [HttpGet]
        // [Route("/{name}")]
        // public JsonResult Method(string name)
        // {
        //     return "This is my projects";
        // } 
    }
}
