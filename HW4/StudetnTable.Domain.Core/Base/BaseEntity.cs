﻿namespace StudetnTable.Domain.Core.Base
{
    public class BaseEntity<T> where T : struct
    {
        public T Id { get; set; }
    }
}
