using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SofthouseTask.DTO.Paging
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PagedResult<T>
    {
        public ICollection<T> Results { get; set; }
        public int TotalResults { get; set; }
        public int Page { get; set; }
        public int Limit { get; set; } //page size

        public PagedResult() { }
    }
}
