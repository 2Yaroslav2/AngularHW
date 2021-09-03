using StudentTable.Domain.Core.Entities;
using StudentTable.Infrastucture.Business.AutoMapper;
using StudentTable.Infrastucture.Business.DTO;
using StudentTable.Infrastucture.Date.Repository.Interface;
using StudentTable.Services.Interfaces.Interfaces;
using System;
using System.Collections.Generic;

namespace StudentTable.Services.Interfaces.Services
{
    public class JournalService : IJournalServices
    {
        AutoMap mapper = AutoMap.Instance;
        IUnitOfWork unitOfWork;

        public JournalService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public void CreateJournal(JournalDto journalDto)
        {
            var journal = mapper.Mapper.Map<Journal>(journalDto);
            if (journal != null)
                unitOfWork.JournalRepository.Create(journal);
        }

        public void DeleteJournal(int id)
        {
            var journal = unitOfWork.JournalRepository.Get(id);
            if (journal != null)
                unitOfWork.JournalRepository.Delete(journal.Id);
        }

        public IEnumerable<JournalDto> GetAllJournal()
        {
            var jornalData = unitOfWork.JournalRepository.GetAll();
            return mapper.Mapper.Map<IEnumerable<JournalDto>>(jornalData);
        }

        public JournalDto GetJournal(int id)
        {
            var journal = unitOfWork.JournalRepository.Get(id);
            return mapper.Mapper.Map<JournalDto>(journal);
        }

        public void UpdateJournal(JournalDto journalDto)
        {
            var journal = mapper.Mapper.Map<Journal>(journalDto);
            unitOfWork.JournalRepository.Update(journal);
        }
    }
}
