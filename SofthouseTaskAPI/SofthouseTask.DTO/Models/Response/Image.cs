using Newtonsoft.Json;

namespace SofthouseTask.DTO.Models.Response
{
    public class Image
    {
        [JsonProperty("id")]
        public string? Id { get; set; }

        [JsonProperty("width")]
        public long Width { get; set; }

        [JsonProperty("height")]
        public long Height { get; set; }

        [JsonProperty("url")]
        public Uri? Url { get; set; }
    }
}
