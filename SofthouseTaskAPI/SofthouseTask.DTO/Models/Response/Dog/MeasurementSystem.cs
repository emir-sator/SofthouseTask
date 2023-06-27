using Newtonsoft.Json;

namespace SofthouseTask.DTO.Models.Response.Dog
{
    public class MeasurementSystem
    {
        [JsonProperty("imperial")]
        public string Imperial { get; set; }

        [JsonProperty("metric")]
        public string Metric { get; set; }
    }
}
