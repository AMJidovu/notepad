import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  IsUUID,
  PrimaryKey,
  BelongsTo,
} from 'sequelize-typescript'

import { User } from './User'

@Table
export class Article extends Model<Article> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id!: string

  @Column
  title!: string

  @Column
  content!: string

  @BelongsTo(() => User)
  author?: User

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
