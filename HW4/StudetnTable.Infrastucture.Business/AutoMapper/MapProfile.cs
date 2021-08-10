using AutoMapper;
using StudentTable.Domain.Core.Entities;
using StudentTable.Infrastucture.Business.DTO;


namespace StudentTable.Infrastucture.Business.AutoMapper
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();

            CreateMap<Journal, JournalDto>();
            CreateMap<JournalDto, Journal>();
        }
    }
}
