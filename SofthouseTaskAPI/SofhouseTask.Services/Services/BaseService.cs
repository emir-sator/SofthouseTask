using Microsoft.Extensions.Configuration;
using SofthouseTask.RestSharp.Clients;
using SofthouseTask.RestSharp.Configuration;

namespace SofthouseTask.Services.Services
{
    public class BaseService
    {
        public readonly IConfiguration _config;
        public readonly IClient _client;
        public readonly string _apiUrl;
        public readonly string _apiKey;
        public readonly string _defaultMockUser = "demo_250623";
        public BaseService(IConfiguration config)
        {
            _config = config;
            _client = new DefaultClient();
            _apiUrl = _config["ApiConfig:ApiUrl"];
            _apiKey = _config["ApiConfig:ApiKey"];
        }
    }
}
