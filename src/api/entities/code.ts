import type { Languages } from '#/common/languages';

import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { UserEntity } from '#/api/entities/user';

@Entity()
class CodeEntity {
  @PrimaryColumn({
    type: String,
    length: 32
  })
  name: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.id,
    {
      nullable: true
    }
  )
  @Column({
    type: Number,
    unsigned: true,
    nullable: true
  })
  owner: number;

  @Column({
    type: String,
    length: 32
  })
  lang: Languages;

  @Column({
    type: String
  })
  code: string;
}

export type CodeModel = {
  read: boolean;
  name: string;
  lang: string;
  code: string;
};

export { CodeEntity };
