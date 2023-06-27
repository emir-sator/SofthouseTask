using Newtonsoft.Json;

namespace SofthouseTask.DTO.Models.Response.Favourite
{
    public class AddFavouriteResponse
    {
        [JsonProperty("message")]
        public string? Message { get; set; }

        [JsonProperty("id")]
        public long FavouriteId { get; set; }
    }
}
