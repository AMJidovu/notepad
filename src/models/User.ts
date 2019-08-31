import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  IsUUID,
} from 'sequelize-typescript'

@Table
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id!: string

  @Column
  firstName!: string

  @Column
  lastName!: string

  @Column
  email!: string

  @Column
  password!: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
