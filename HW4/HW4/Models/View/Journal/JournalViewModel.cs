using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW4.Models.View.Journal
{
    public class JournalViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Mark { get; set; }
        public string Date { get; set; }
        public string Subject { get; set; }
    }
}
