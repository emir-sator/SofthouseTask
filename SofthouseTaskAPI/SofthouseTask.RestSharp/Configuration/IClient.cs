using RestSharp;

namespace SofthouseTask.RestSharp.Configuration
{
    public interface IClient : IDisposable
    {
        RestClient GetClient();
    }
}
