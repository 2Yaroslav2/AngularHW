using System;
using System.Collections.Generic;
using System.Text;

namespace StudentTable.Infrastucture.Date.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        UserRepository UserRepository { get; }
    }
}
