using StudentTable.Domain.Core.Base;

namespace StudentTable.Domain.Core.Entities
{
    public class Journal : BaseEntity<int>
    {
        public string Name { get; set; }
        public string Mark { get; set; }
        public string Date { get; set; }
        public string Subject { get; set; }
    }
}
