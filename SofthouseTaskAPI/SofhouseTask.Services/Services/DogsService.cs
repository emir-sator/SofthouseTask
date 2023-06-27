using Microsoft.Extensions.Configuration;
using SofthouseTask.RestSharp.APIRequests;
using Newtonsoft.Json;
using RestSharp;
using SofthouseTask.DTO.Paging;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Dog;

namespace SofthouseTask.Services.Services
{
    public class DogsService : BaseService
    {
        public DogsService(IConfiguration config) : base(config)
        {
        }

        //private readonly IConfiguration _config;
        //private readonly IClient _client;
        //private readonly string _apiUrl;
        //private readonly string _apiKey;
        //private readonly string _defaultMockUser = "demo_250623";

        //public DogsService(IConfiguration config)
        //{
        //    _config = config;
        //    _client = new DefaultClient();
        //    _apiUrl = _config["ApiConfig:ApiUrl"];
        //    _apiKey = _config["ApiConfig;ApiKey"];
        //}

        public PagedResult<Dog> GetDogs(GetDogsRequest request)
        {
            try
            {
                var endpoint = _config["ApiConfig:Endpoints:Breeds"];
                var headers = new Dictionary<string, string>()
                {
                    {"Content-Type","application/json" },
                };

                //Create a request using the request builder method
                var apiRequest = new GetRequestBuilder()
                    .WithUrl(_apiUrl)
                    .WithEndpoint(endpoint)
                    .WithHeaders(headers)
                    .WithQueryParameters(GetQueryParameters(request))
                    .Build();

                var response = _client.GetClient().Execute(apiRequest);

                var results = JsonConvert.DeserializeObject<List<Dog>>(response.Content);

                var dogs = new PagedResult<Dog>
                {
                    Page = request.Page,
                    Limit = request.Limit,
                    TotalResults = results.Count,
                    Results = results
                };
                return dogs;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error executing the request: {ex.Message}");
            }
        }


        private Dictionary<string, string> GetQueryParameters(PagedRequestBase request)
        {
            return new Dictionary<string, string>()
            {
                { "limit",request.Limit.ToString() },
                { "page", request.Page.ToString() }
            };
        }
    }
}
