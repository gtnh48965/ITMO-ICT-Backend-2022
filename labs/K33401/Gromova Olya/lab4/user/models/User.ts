import { Table, Model, PrimaryKey, Column, Unique, NotNull, AllowNull } from "sequelize-typescript";

@Table
class User extends Model {
    @PrimaryKey
    @Column
    id: number

    @Unique
    @AllowNull(false)
    @Column
    email: string

    @AllowNull(false)
    @Column
    password: string

    @Unique
    @AllowNull(false)
    @Column
    username: string

    @Column
    firstName: string

    @Column
    middleName: string

    @Column
    lastName: string

    @Column
    role: string
}

export default User