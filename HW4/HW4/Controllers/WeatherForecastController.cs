using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentTable.Services.Interfaces.Interfaces;
using StudetnTable.Infrastucture.Business.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HW4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        IUserServices userServices;

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IUserServices userServices)
        {
            _logger = logger;

            //this.userServices = userServices;
            //this.userServices.CreateUser(new UserDto
            //{
            //    Login = "admin@gmail.com",
            //    Password = "12345",
            //    Role = StudetnTable.Domain.Core.Base.Role.AuthRole.Admin
            //});

            //this.userServices.CreateUser(new UserDto
            //{
            //    Login = "qwerty@gmail.com",
            //    Password = "12345",
            //    Role = StudetnTable.Domain.Core.Base.Role.AuthRole.User
            //});

            //var tmp = this.userServices.GetAllUsers();
            ;
        }

        [HttpGet]
        [Authorize]
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
