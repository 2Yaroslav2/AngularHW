﻿using Microsoft.AspNetCore.Mvc;
using StudentTable.Services.Interfaces.Interfaces;
using StudentTable.Infrastucture.Business.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        IUserServices userServices;

        public UserController(IUserServices userServices)
        {
            this.userServices = userServices; 
            ;
        }

        [HttpGet]
        public IEnumerable<UserDto> Get()
        {
            return userServices.GetAllUsers().Where(user => user.Role != StudentTable.Domain.Core.Base.Role.AuthRole.Admin).ToArray();
        }
    }
}
