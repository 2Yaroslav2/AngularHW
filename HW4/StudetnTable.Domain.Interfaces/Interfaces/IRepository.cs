using System.Collections.Generic;

namespace StudentTable.Domain.Interfaces.Interfaces
{
    public interface IRepository<TValue, TKey>
        where TValue : class
        where TKey : struct
    {
        void Create(TValue value);
        void Update(TValue value);
        void Delete(TKey id);
        TValue Get(TKey id);
        IEnumerable<TValue> GetAll();
    }
}
