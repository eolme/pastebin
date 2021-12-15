import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Code {
  @PrimaryColumn({
    type: String,
    length: 32
  })
  name: string;

  @Column({
    type: String,
    length: 32
  })
  lang: string;

  @Column({
    type: String
  })
  code: string;
}

export { Code };
