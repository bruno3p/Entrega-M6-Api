import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Contact } from "./contact.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 15, unique: true })
  telefone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (Contacts) => Contacts.user)
  @JoinTable()
  contact: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
