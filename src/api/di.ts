import type { DeepPartial, EntityTarget, ObjectID, Repository } from 'typeorm';

import { default as memo } from 'memoize-one';

import { connect } from '#/api/database';
import { CodeEntity, UserEntity } from '#/api/entities';

type EnhancedRepositoryMethods<T> = {
  createAndSave: (create: DeepPartial<T>) => Promise<T>;
  findOrCreate: (id: string | number | Date | ObjectID, create: T) => Promise<T>;
};

type EnhancedRepository<T> = Repository<T> & EnhancedRepositoryMethods<T>;

const enhance = <T>(repo: Repository<T>): EnhancedRepository<T> => {
  const methods: EnhancedRepositoryMethods<T> = {
    async createAndSave(create) {
      return await repo.save(repo.create(create));
    },
    async findOrCreate(id, create) {
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
  code: repository(CodeEntity),
  user: repository(UserEntity)
} as const;
