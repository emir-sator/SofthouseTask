using Newtonsoft.Json;

namespace SofthouseTask.DTO.Models.Response.Dog
{
    public class Dog
    {
        [JsonProperty("weight")]
        public MeasurementSystem? Weight { get; set; } // kgs

        [JsonProperty("height")]
        public MeasurementSystem? Height { get; set; } // cms

        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("bred_for", NullValueHandling = NullValueHandling.Ignore)]
        public string? BredFor { get; set; }

        [JsonProperty("breed_group", NullValueHandling = NullValueHandling.Ignore)]
        public string? BreedGroup { get; set; }

        [JsonProperty("life_span")]
        public string? LifeSpan { get; set; }

        [JsonProperty("temperament")]
        public string? Temperament { get; set; }

        [JsonProperty("origin", NullValueHandling = NullValueHandling.Ignore)]
        public string? Origin { get; set; }

        [JsonProperty("reference_image_id")]
        public string? ReferenceImageId { get; set; }
        [JsonProperty("image")]
        public Image? Image { get; set; }
    }
}
