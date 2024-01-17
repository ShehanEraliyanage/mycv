import {
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('inserted user id is', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('Updated user id is', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove user id is', this.id);
  }
}
