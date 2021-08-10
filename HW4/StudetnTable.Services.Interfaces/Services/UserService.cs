using StudentTable.Infrastucture.Date.Repository;
using StudentTable.Services.Interfaces.Interfaces;
using StudentTable.Domain.Core.Entities;
using StudentTable.Infrastucture.Business.AutoMapper;
using StudentTable.Infrastucture.Business.DTO;
using System.Collections.Generic;
using StudentTable.Infrastucture.Date.Repository.Interface;

namespace StudentTable.Services.Interfaces.Services
{
    public class UserService : IUserServices
    {
        AutoMap mapper = AutoMap.Instance;
        IUnitOfWork unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public void CreateUser(UserDto userDto)
        {
            var user = mapper.Mapper.Map<User>(userDto);
            if (user != null)
                unitOfWork.UserRepository.Create(user);
        }

        public void DeleteUser(int id)
        {
            var user = unitOfWork.UserRepository.Get(id);
            if (user != null)
                unitOfWork.UserRepository.Delete(user.Id);
        }

        public IEnumerable<UserDto> GetAllUsers()
        {
            var users = unitOfWork.UserRepository.GetAll();
            return mapper.Mapper.Map<IEnumerable<UserDto>>(users);
        }

        public UserDto GetUser(int id)
        {
            var user = unitOfWork.UserRepository.Get(id);
            return mapper.Mapper.Map<UserDto>(user);
        }

        public UserDto GetUser(string login, string password)
        {
            var user = unitOfWork.UserRepository.Get(login, password);
            return mapper.Mapper.Map<UserDto>(user);
        }

        public void UpdateUser(UserDto userDto)
        {
            var user = mapper.Mapper.Map<User>(userDto);
            unitOfWork.UserRepository.Update(user);
        }
    }
}
