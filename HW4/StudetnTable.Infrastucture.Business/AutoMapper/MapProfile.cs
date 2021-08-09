using AutoMapper;
using StudetnTable.Domain.Core.Entities;
using StudetnTable.Infrastucture.Business.DTO;

namespace StudetnTable.Infrastucture.Business.AutoMapper
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}
