using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Dog;
using SofthouseTask.DTO.Paging;
using SofthouseTask.Services.Services;

namespace SofthouseTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogController : ControllerBase
    {
        private readonly DogsService _dogsService;
        public DogController(DogsService dogsService)
        {
            _dogsService = dogsService;
        }

        [HttpGet]
        public ActionResult<PagedResult<Dog>> GetDogs([FromQuery] GetDogsRequest request)
        {
            return Ok(_dogsService.GetDogs(request));
        }
    }
}
