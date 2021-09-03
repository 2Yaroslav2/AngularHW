using HW4.Models.AutoMapper;
using HW4.Models.Utils;
using HW4.Models.View.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StudentTable.Services.Interfaces.Services;
using StudentTable.Domain.Core.Base;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace HW4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        UserService userService;
        AutoMap mapper = AutoMap.Instance;

        public AuthController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(UserViewModel model)
        {
            var identity = GetIdentity(model.Login, model.Password);
            if (identity is null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromSeconds(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JsonResult(new
            {
                access_token = encodedJwt,
                username = identity.Name
            });
        }

        private ClaimsIdentity GetIdentity(string login, string password)
        {
            var person = mapper.Mapper.Map<UserViewModel>(userService.GetUser(login, password));
            
            if (person is null)
            {
                // если пользователя не найдено
                return null;
            }
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, person.Login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, Enum.GetName(typeof(Role.AuthRole), person.Role))
                };
            ClaimsIdentity claimsIdentity =
            new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);

            return claimsIdentity;
        }
    }
}
