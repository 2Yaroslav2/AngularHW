using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentTable.Infrastucture.Business.DTO;
using StudentTable.Services.Interfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HW4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        IJournalServices journalServices;
        IUserServices userServices;

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IUserServices userServices, IJournalServices journalServices)
        {
            _logger = logger;

            //this.userServices = userServices;
            //this.journalServices = journalServices;
            //this.userServices.CreateUser(new UserDto
            //{
            //    Login = "admin@gmail.com",
            //    Password = "12345",
            //    Role = StudentTable.Domain.Core.Base.Role.AuthRole.Admin
            //});

            //this.userServices.CreateUser(new UserDto
            //{
            //    Login = "qwerty@gmail.com",
            //    Password = "12345",
            //    Role = StudentTable.Domain.Core.Base.Role.AuthRole.User
            //});


            //this.journalServices.CreateJournal(new JournalDto
            //{
            //    Name = "Student 1",
            //    Mark = 5,
            //    Subject = "Subject 1",
            //    Date = DateTime.Now.ToString()

            //});

            //this.journalServices.CreateJournal(new JournalDto
            //{
            //    Name = "Student 2",
            //    Mark = 7,
            //    Subject = "Subject 2",
            //    Date = DateTime.Now.ToString()

            //});


            //this.journalServices.CreateJournal(new JournalDto
            //{
            //    Name = "Student 3",
            //    Mark = 9,
            //    Subject = "Subject 3",
            //    Date = DateTime.Now.ToString()

            //});

            //var tmp = this.userServices.GetAllUsers();
            //var tmp2 = this.journalServices.GetAllJournal();
            ;
        }

        [HttpGet]
        //[Authorize(Roles = "Admin")]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
