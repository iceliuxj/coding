using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
 using Microsoft.AspNetCore.Http;
 using DbConnection;


namespace QuotingDojo.Controllers
{
    public class Home : Controller

    {
// Other code
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            // Other code
            return View();
        }

        [HttpPost]
        [Route("add")]

        public IActionResult Add(string name, string quote){
            string query = $"INSERT INTO mydb.Quotes (Name, Quote) VALUES ('{name}', '{quote}')";
            DbConnector.Execute(query);
            return RedirectToAction("Quotes");
        }

        [HttpGet]
        [Route("quotes")]

        public IActionResult Quotes(){
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM Quotes");
            ViewBag.all = AllQuotes;
            return View("Quotes");
        }

    }
}