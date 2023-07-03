using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Favourite;
using SofthouseTask.DTO.Paging;
using SofthouseTask.RestSharp.APIRequests;

namespace SofthouseTask.Services.Services
{   
                                    // base service for getting some default configs
    public class FavouritesService : BaseService
    {
        private string endpoint;
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

        public PagedResult<FavouriteResponse> GetFavourites(GetFavoritesRequest request)
        {
            try
            {
                var apiRequest = new GetRequestBuilder()
                                .WithUrl(_apiUrl)
                                .WithEndpoint(endpoint)
                                .WithHeaders(headers)
                                .WithQueryParameters(GetQueryParameters(request))
                                .Build();

                var response = _client.GetClient().Execute(apiRequest);

                var results = JsonConvert.DeserializeObject<List<FavouriteResponse>>(response.Content);

                var favourites = new PagedResult<FavouriteResponse>
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
                var body = JsonConvert.SerializeObject(request);

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

        public void RemoveFromFavorites(long id)
        {
            try
            {
                var urlSegment = new Dictionary<string, string>()
                {
                    { "favourite_id", id.ToString() },
                };

                endpoint += "/{favourite_id}";

                //Create a request using the request builder method
                var apiRequest = new DeleteRequestBuilder()
                    .WithUrl(_apiUrl)
                    .WithEndpoint(endpoint)
                    .WithHeaders(headers)
                    .WithUrlSegments(urlSegment)
                    .Build();

                var response = _client.GetClient().Execute(apiRequest);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error executing the request: {ex.Message}");
            }
        }
        private Dictionary<string, string> GetQueryParameters(GetFavoritesRequest request)
        {
            return new Dictionary<string, string>()
            {
                { "limit",request.Limit.ToString() },
                { "page", request.Page.ToString() },
                { "sub_id", request.SubId },
                { "order", request.Order },
                { "size", request.Size }
            };
        }
    }
}
