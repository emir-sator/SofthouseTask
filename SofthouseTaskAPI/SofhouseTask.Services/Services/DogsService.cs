using Microsoft.Extensions.Configuration;
using SofthouseTask.RestSharp.APIRequests;
using Newtonsoft.Json;
using RestSharp;
using SofthouseTask.DTO.Paging;
using SofthouseTask.DTO.Models.Request;
using SofthouseTask.DTO.Models.Response.Dog;
using System.Reflection.PortableExecutable;

namespace SofthouseTask.Services.Services
{
                                // base service for getting some default configs
    public class DogsService : BaseService
    {
        private string endpoint;
        private readonly Dictionary<string, string> headers;
        public DogsService(IConfiguration config) : base(config)
        {
            endpoint = _config["ApiConfig:Endpoints:Breeds"];
            headers = new Dictionary<string, string>()
            {
                { "Content-Type","application/json" },
            };
        }

        public PagedResult<DogResponse> GetDogs(GetDogsRequest request)
        {
            try
            {
                //Create a request using the request builder method
                var apiRequest = new GetRequestBuilder()
                    .WithUrl(_apiUrl)
                    .WithEndpoint(endpoint)
                    .WithHeaders(headers)
                    .WithQueryParameters(GetQueryParameters(request))
                    .Build();

                var response = _client.GetClient().Execute(apiRequest);

                var results = JsonConvert.DeserializeObject<List<DogResponse>>(response.Content);

                return new PagedResult<DogResponse>
                {
                    Page = request.Page,
                    Limit = request.Limit,
                    TotalResults = results.Count,
                    Results = results
                };
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
