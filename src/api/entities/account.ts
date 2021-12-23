import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from '#/api/entities/user';

import { transformer } from '#/api/transform';

@Entity({
  name: 'accounts'
})
class AccountEntity {
  @PrimaryGeneratedColumn({
    unsigned: true
  })
  id: string;

  @Column({
    type: Number,
    unsigned: true
  })
  userId: number;

  @Column({
    type: String
  })
  type: string;

  @Column({
    type: String
  })
  provider: string;

  @Column({
    type: String
  })
  providerAccountId: string;

  @Column({
    type: String,
    nullable: true
  })
  refresh_token: string | null;

  @Column({
    type: String,
    nullable: true
  })
  access_token: string | null;

  @Column({
    type: 'bigint',
    nullable: true,
    transformer: transformer.bigint
  })
  expires_at: number | null;

  @Column({
    type: String,
    nullable: true
  })
  token_type: string | null;

  @Column({
    type: String,
    nullable: true
  })
  scope: string | null;

  @Column({
    type: String,
    nullable: true
  })
  id_token: string | null;

  @Column({
    type: String,
    nullable: true
  })
  session_state: string | null;

  @Column({
    type: String,
    nullable: true
  })
  oauth_token_secret: string | null;

  @Column({
    type: String,
    nullable: true
  })
  oauth_token: string | null;

  @ManyToOne(
    () => UserEntity,
    (user) => user.accounts
  )
  user: UserEntity;
}

export { AccountEntity };
