using AutoMapper;

namespace StudetnTable.Infrastucture.Business.AutoMapper
{
    public class AutoMap
    {
        private static AutoMap instance;

        public static AutoMap Instance
            => instance ?? (new AutoMap(new MapProfile()));

        public IMapper Mapper { get; }

        public AutoMap(Profile profile)
        {
            var mapConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(profile);
            });

            Mapper = mapConfig.CreateMapper();
        }
    }
}
