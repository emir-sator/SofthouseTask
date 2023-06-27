using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SofthouseTask.DTO.Paging
{
    public class PagedRequestBase
    {
        public int Limit { get; set; }

        public int Page { get; set; }
        public PagedRequestBase()
        {

        }
    }
}
