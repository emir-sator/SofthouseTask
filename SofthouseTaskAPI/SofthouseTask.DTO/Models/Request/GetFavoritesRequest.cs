using SofthouseTask.DTO.Paging;
using System.Text.Json.Serialization;

namespace SofthouseTask.DTO.Models.Request
{
    public class GetFavoritesRequest : PagedRequestBase
    {
        public string? SubId { get; set; }
        public string? Order { get; set; }
        public string? Size { get; set; }
    }
}
