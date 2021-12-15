import type { EntityTarget, ObjectID, Repository } from 'typeorm';

import { default as memo } from 'memoize-one';

import { connect } from '#/api/database';
import { Code } from '#/api/models/code';

type EnhancedRepositoryMethods<T> = {
  instance: (create: T) => Promise<T>;
  findOrCreate: (id: string | number | Date | ObjectID, create: T) => Promise<T>;
};

type EnhancedRepository<T> = Repository<T> & EnhancedRepositoryMethods<T>;

const enhance = <T>(repo: Repository<T>): EnhancedRepository<T> => {
  const methods: EnhancedRepositoryMethods<T> = {
    async instance(create: T) {
      return await repo.save(repo.create(create));
    },
    async findOrCreate(id: string | number, create: T) {
      let model: T;

      try {
        model = await repo.findOneOrFail(id);
      } catch {
        model = await repo.save(repo.create(create));
      }

      return model;
    }
  };

  return Object.assign(repo, methods);
};

const repository = <T>(target: EntityTarget<T>) => {
  return memo(async () => {
    return enhance((await connect).getRepository(target));
  });
};

export const DI = {
  code: repository(Code)
} as const;
