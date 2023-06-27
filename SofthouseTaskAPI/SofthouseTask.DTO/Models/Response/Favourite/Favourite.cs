using Newtonsoft.Json;

namespace SofthouseTask.DTO.Models.Response.Favourite
{
    public class Favourite
    {
        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("user_id")]
        public string UserId { get; set; }

        [JsonProperty("image_id")]
        public string ImageId { get; set; }

        [JsonProperty("sub_id")]
        public string SubId { get; set; }

        [JsonProperty("created_at")]
        public DateTimeOffset CreatedAt { get; set; }

        [JsonProperty("image")]
        public Image Image { get; set; }
    }
}
