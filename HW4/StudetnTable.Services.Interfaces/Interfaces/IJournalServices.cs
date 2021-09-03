using StudentTable.Infrastucture.Business.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentTable.Services.Interfaces.Interfaces
{
    public interface IJournalServices
    {
        void CreateJournal(JournalDto journalDto);
        void UpdateJournal(JournalDto journalDto);
        void DeleteJournal(int id);
        JournalDto GetJournal(int id);
        IEnumerable<JournalDto> GetAllJournal();
    }
}
