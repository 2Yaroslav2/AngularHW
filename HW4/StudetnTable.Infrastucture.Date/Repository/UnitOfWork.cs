using StudentTable.Infrastucture.Date.Database;
using StudentTable.Infrastucture.Date.Repository.Interface;
using System;

namespace StudentTable.Infrastucture.Date.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private StudentTableContext context;
        private UserRepository userRepository;
        private JournalRepository journalRepository;
    
        public UnitOfWork(StudentTableContext context)
        {
            this.context = context;
        }


        public UserRepository UserRepository
            => userRepository ?? (userRepository = new UserRepository(context));

        public JournalRepository JournalRepository 
            => journalRepository ?? (journalRepository = new JournalRepository(context));

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
