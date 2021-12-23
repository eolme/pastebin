import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { transformer } from '#/api/transform';

@Entity({
  name: 'verification_tokens'
})
class VerificationTokenEntity {
  @PrimaryGeneratedColumn({
    unsigned: true
  })
  id: number;

  @Column({
    type: String
  })
  token: string;

  @Column({
    type: String
  })
  identifier: string;

  @Column({
    type: String,
    transformer: transformer.date
  })
  expires: string;
}

export { VerificationTokenEntity };
