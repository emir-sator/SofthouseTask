using SofthouseTask.Services.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class StartupExtension
    {
        public static IServiceCollection AddServices(
              this IServiceCollection services)
        {
            services.AddScoped<DogsService>();
            services.AddScoped<FavouritesService>();
            services.AddScoped<JsonFileService>();

            return services;
        }
    }
}
