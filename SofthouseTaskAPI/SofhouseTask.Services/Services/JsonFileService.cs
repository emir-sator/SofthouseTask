using Microsoft.Extensions.Configuration;
using System.Text.Json;

namespace SofthouseTask.Services.Services
{
    public class JsonFileService : BaseService
    {
        public JsonFileService(IConfiguration config) : base(config) { }

        public void CreateJsonTextFile(object obj, string rootPath)
        {
            try
            {
                string name = DateTime.Now.ToString("dd-MM-yyyy HH-mm-ss") + ".txt";

                // Combine the root path with the folder name to get the folder path
                string folderPath = Path.Combine(rootPath, "JsonTextFiles");

                // Combine the folder path with a file name to get a file path
                string filePath = Path.Combine(folderPath, name);

                // for better json string readability
                JsonSerializerOptions options = new JsonSerializerOptions
                {
                    WriteIndented = true
                };

                using (StreamWriter writer = new StreamWriter(filePath))
                {
                    var json = JsonSerializer.Serialize(obj, options);
                    writer.Write(json);
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occured while trying to process the file: {ex.Message}");
            }
        }
    }
}
