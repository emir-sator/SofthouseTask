using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace SofthouseTask.DTO.Models.Request
{
    public class AddFavoriteImageRequest
    {
        [JsonProperty("image_id")]
        public string? ImageId { get; set; }
        [JsonProperty("sub_id")]
        public string? SubId { get; set; }
    }
}
