import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  class Company {
    @ObjectIdColumn()
    _id: ObjectID;
  
    @Column()
    name: string;
  
    @Column()
    phone: string;
  
    @Column()
    cnpj: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Company;