using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SofthouseTask.Services.Util
{
    public static class JsonProccesor
    {
        /// <summary>
        /// Serializes a object and creates a new json file specified by the path
        /// </summary>
        /// <param name="filePath"></param>
        /// <param name="obj"></param>
        public static void CreateJson(string filePath, object obj)
        {
            string json = JsonConvert.SerializeObject(obj);

            File.WriteAllText(filePath, json);
        }
    }
}
