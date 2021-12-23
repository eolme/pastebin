import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CodeEntity } from '#/api/entities/code';
import { SessionEntity } from '#/api/entities/session';
import { AccountEntity } from '#/api/entities/account';

import { transformer } from '#/api/transform';

@Entity({
  name: 'users'
})
class UserEntity {
  @PrimaryGeneratedColumn({
    unsigned: true
  })
  id: number;

  @Column({
    type: String,
    nullable: true
  })
  name: string | null;

  @Column({
    type: String,
    nullable: true,
    unique: true
  })
  email: string | null;

  @Column({
    type: String,
    nullable: true,
    transformer: transformer.date
  })
  emailVerified: string | null;

  @Column({
    type: String,
    nullable: true
  })
  password: string | null;

  @Column({
    type: String,
    nullable: true
  })
  image: string | null;

  @OneToMany(
    () => SessionEntity,
    (session) => session.userId
  )
  sessions: SessionEntity[];

  @OneToMany(
    () => AccountEntity,
    (account) => account.userId
  )
  accounts: AccountEntity[];

  @ManyToOne(
    () => CodeEntity,
    (code) => code.owner
  )
  codes: CodeEntity[];
}

export { UserEntity };
