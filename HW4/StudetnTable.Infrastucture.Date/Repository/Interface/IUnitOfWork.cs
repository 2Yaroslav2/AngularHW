using System;

namespace StudentTable.Infrastucture.Date.Repository.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        UserRepository UserRepository { get; }
        JournalRepository JournalRepository { get; }
    }
}
