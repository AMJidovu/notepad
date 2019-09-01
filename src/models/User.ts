import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  IsUUID,
  HasMany,
  Scopes,
  Unique,
  IsEmail,
} from 'sequelize-typescript'
import { Article } from './Article'

@Scopes(() => ({
  withoutPassword: {
    attributes: {
      exclude: ['password'],
    },
  },
}))
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

  @Unique
  @IsEmail
  @Column
  email: string

  @Column
  password!: string

  @HasMany(() => Article)
  articles!: Article[]

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
