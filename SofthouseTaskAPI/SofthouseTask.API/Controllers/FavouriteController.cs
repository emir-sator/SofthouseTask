using Microsoft.AspNetCore.Mvc;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Favourite;
using SofthouseTask.DTO.Paging;
using SofthouseTask.Services.Services;

namespace SofthouseTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavouriteController : ControllerBase
    {
        private readonly FavouritesService _favouritesService;
        public FavouriteController(FavouritesService favouritesService)
        {
            _favouritesService = favouritesService;
        }

        [HttpGet]
        public ActionResult<PagedResult<FavouriteResponse>> GetFavourites([FromQuery] GetFavoritesRequest request)
        {
            return Ok(_favouritesService.GetFavourites(request));
        }

        [HttpPost]
        public ActionResult<long> AddFavorite([FromBody] AddFavoriteImageRequest request)
        {
            return Ok(_favouritesService.AddFavorite(request));
        }

        [HttpDelete]
        public ActionResult<long> RemoveFromFavorites(long id)
        {
            _favouritesService.RemoveFromFavorites(id);
            return Ok();
        }
    }
}
