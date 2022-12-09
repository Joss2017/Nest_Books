import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id?: number; /* ? pour mettre l'id en facultatif */
  @Column({ nullable: false })
  title: string;

  @Column({
    nullable: false,
    type: 'date',
  })
  dateParution: string;
}
