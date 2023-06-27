using Microsoft.AspNetCore.Mvc;
using SofthouseTask.Services.Services;
using Newtonsoft.Json;
using System.Text.Json;


namespace SofthouseTask.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JsonFileController : ControllerBase
    {
        private readonly JsonFileService _jsonFileService;
        private readonly IWebHostEnvironment _environment;
        public JsonFileController(JsonFileService jsonFileService, IWebHostEnvironment environment)
        {
            _jsonFileService = jsonFileService;
            _environment = environment;
        }

        [HttpPost]
        public ActionResult CreateJsonTextFile(object obj)
        {
                                                    // Get the root path of the web host environment                  
            _jsonFileService.CreateJsonTextFile(obj, _environment.ContentRootPath);

            return Ok();
        }
    }
}
