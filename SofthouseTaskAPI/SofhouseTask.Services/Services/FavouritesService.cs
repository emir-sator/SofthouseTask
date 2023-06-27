using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Favourite;
using SofthouseTask.DTO.Paging;
using SofthouseTask.RestSharp.APIRequests;

namespace SofthouseTask.Services.Services
{
    public class FavouritesService : BaseService
    {
        private readonly string endpoint;
        private readonly Dictionary<string, string> headers;
        public FavouritesService(IConfiguration config) : base(config)
        {
            endpoint = _config["ApiConfig:Endpoints:Favourites"];
            headers = new Dictionary<string, string>()
            {
                { "Content-Type","application/json" },
                { "x-api-key", _apiKey }
            };
        }

        public PagedResult<Favourite> GetFavourites(GetFavoritesRequest request)
        {
            try
            {
                var parameters = new Dictionary<string, string>()
                {
                    { "limit",request.Limit.ToString() },
                    { "page", request.Page.ToString() },
                    { "sub_id", request.SubId },
                    { "order", request.Order },
                    { "size", request.Size }
                };

                var apiRequest = new GetRequestBuilder()
                                .WithUrl(_apiUrl)
                                .WithEndpoint(endpoint)
                                .WithHeaders(headers)
                                .WithQueryParameters(parameters)
                                .Build();

                var response = _client.GetClient().Execute(apiRequest);

                var results = JsonConvert.DeserializeObject<List<Favourite>>(response.Content);

                var favourites = new PagedResult<Favourite>
                {
                    Page = request.Page,
                    Limit = request.Limit,
                    TotalResults = results.Count,
                    Results = results
                };

                return favourites;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error executing the request: {ex.Message}");
            }
        }

        public long AddFavorite(AddFavoriteImageRequest request)
        {
            try
            {
                // try to convert without anonymous type
                var body = new
                {
                    image_id = request.ImageId,
                    sub_id = request.SubId,

                };
                //Create a request using the request builder method
                var apiRequest = new PostRequestBuilder()
                    .WithUrl(_apiUrl)
                    .WithEndpoint(endpoint)
                    .WithHeaders(headers)
                    .WithBody(body)
                    .Build();

                var response = _client.GetClient().Execute(apiRequest);

                var results = JsonConvert.DeserializeObject<AddFavouriteResponse>(response.Content);

                return results.FavouriteId;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error executing the request: {ex.Message}");
            }
        }
    }
}
