using Microsoft.EntityFrameworkCore;
using StudentTable.Domain.Interfaces.Interfaces;
using StudentTable.Infrastucture.Date.Database;
using System.Collections.Generic;
using System.Linq;

namespace StudentTable.Infrastucture.Date.Repository.Base
{
    public abstract class BaseRepository<TValue, TKey> : IRepository<TValue, TKey>
        where TValue : class
        where TKey : struct
    {
        protected StudentTableContext context;
        protected DbSet<TValue> table => context.Set<TValue>();

        protected BaseRepository(StudentTableContext context)
        {
            this.context = context;
        }

        public virtual void Create(TValue value)
        {
            context.Entry(value).State = EntityState.Added;
            context.SaveChanges();
        }

        public virtual void Delete(TKey id)
        {
            var value = Get(id);
            context.Entry(value).State = EntityState.Deleted;
            context.SaveChanges();
        }

        public abstract TValue Get(TKey id);

        public IEnumerable<TValue> GetAll()
        {
            return context.Set<TValue>().ToList();
        }

        public abstract void Update(TValue value);
    }
}
