using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.OpenApi.Models;
using SofthouseTask.API.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options => options.Filters.Add<ErrorHandlingFilterAttribute>());
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SofthouseTaskAPI", Version = "v1" });
    c.CustomOperationIds(apiDescription =>
     {
         var controllerActionDescriptor = apiDescription.ActionDescriptor as ControllerActionDescriptor;

         if (controllerActionDescriptor == null)
             return apiDescription.ActionDescriptor.DisplayName;
         else
         {
             return controllerActionDescriptor.ActionName;
         }
     });
});

builder.Services.AddCors(options => options.AddPolicy(name: "SofthouseTask",
    policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    }));

builder.Services.AddServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Softhouse Task API");
    });
}

app.UseCors("SofthouseTask");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
