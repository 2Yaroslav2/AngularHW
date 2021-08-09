using StudetnTable.Infrastucture.Date.Database;
using System;

namespace StudentTable.Infrastucture.Date.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private StudentTableContext context;
        private UserRepository userRepository;

        private static UnitOfWork instance;

        public UnitOfWork(StudentTableContext context)
        {
            this.context = context;
        }

        //public static EfUnitOfWork Instance
        //    => instance ?? (instance = new EfUnitOfWork());

        public UserRepository UserRepository
            => userRepository ?? (userRepository = new UserRepository(context));

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
                this.disposed = true;
            }
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
