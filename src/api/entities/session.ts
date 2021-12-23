import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '#/api/transform';

import { UserEntity } from '#/api/entities/user';

@Entity({
  name: 'sessions'
})
export class SessionEntity {
  @PrimaryGeneratedColumn({
    unsigned: true
  })
  id!: string;

  @Column({
    type: String,
    unique: true
  })
  sessionToken: string;

  @Column({
    type: Number
  })
  userId: number;

  @Column({
    type: String,
    transformer: transformer.date
  })
  expires: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.sessions
  )
  user: UserEntity;
}
