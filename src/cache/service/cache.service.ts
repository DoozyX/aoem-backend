import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

export type Milliseconds = number;

export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  set(key: string, value: unknown, ttl: Milliseconds): Promise<void> {
    return this.cache.set(key, value, ttl);
  }

  get<T>(key: string): Promise<T | undefined> {
    return this.cache.get<T>(key);
  }

  async has(key: string): Promise<boolean> {
    const value = await this.cache.get(key);
    return value !== undefined;
  }

  del(key: string): Promise<void> {
    return this.cache.del(key);
  }
}
