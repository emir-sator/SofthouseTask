using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace SofthouseTask.DTO.Models.Request
{
    public class AddFavoriteImageRequest
    {
        [JsonProperty(PropertyName = "image_id")]
        //[JsonPropertyName("image_id")]
        //[JsonProperty("image_id")]
        public string? ImageId { get; set; }
        //[JsonPropertyName("sub_id")]
        //[JsonProperty("sub_id")]
        [JsonProperty(PropertyName = "sub_id")]

        public string? SubId { get; set; }
    }
}
