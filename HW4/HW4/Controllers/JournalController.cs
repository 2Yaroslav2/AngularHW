using HW4.Models.AutoMapper;
using HW4.Models.View.Journal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudentTable.Infrastucture.Business.DTO;
using StudentTable.Services.Interfaces.Interfaces;
using System.Collections.Generic;

namespace HW4.Controllers
{
  
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class JournalController : ControllerBase
    {
        IJournalServices journalServices;
        
        AutoMap mapper = AutoMap.Instance;

        public JournalController(IJournalServices journalServices)
        {
            this.journalServices = journalServices;     
        }

        [HttpGet]
        [Route("get")]
        public IEnumerable<JournalDto> Get()
        {
            return journalServices.GetAllJournal();
        }

        [HttpGet]
        [Route("getById")]
        public JournalViewModel GetById(string id)
        {
            ;
            return mapper.Mapper.Map<JournalViewModel>(journalServices.GetJournal(int.Parse(id)));
        }

        [HttpPost]
        [Route("add")]
        public void Add(JournalViewModel journalViewModel)
        {
            var value = mapper.Mapper.Map<JournalDto>(journalViewModel);
            journalServices.CreateJournal(value);
        }

        [HttpPut]
        [Route("update")]
        public void Update(JournalViewModel journalViewModel)
        {
            var value = mapper.Mapper.Map<JournalDto>(journalViewModel);
            journalServices.UpdateJournal(value);
        }

        [HttpDelete]
        [Route("delete")]
        public void Delete(string id)
        {
            journalServices.DeleteJournal(int.Parse(id));
        }
    }
}
