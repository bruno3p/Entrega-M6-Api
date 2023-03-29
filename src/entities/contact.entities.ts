import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { User } from "./user.entities";



@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true, nullable: true })
  email: string;

  @Column({ length: 50})
  name: string;

  @Column({ length: 15, unique: true })
  telefone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contact, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinTable()
  user: User;
}

export { Contact };