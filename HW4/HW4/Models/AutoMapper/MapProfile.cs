using AutoMapper;
using HW4.Models.View.Auth;
using HW4.Models.View.Journal;
using StudentTable.Infrastucture.Business.DTO;

namespace HW4.Models.AutoMapper
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<UserDto, UserViewModel>();
            CreateMap<UserViewModel, UserDto>();

            CreateMap<JournalDto, JournalViewModel>();
            CreateMap<JournalViewModel, JournalDto>();
        }
    }
}
