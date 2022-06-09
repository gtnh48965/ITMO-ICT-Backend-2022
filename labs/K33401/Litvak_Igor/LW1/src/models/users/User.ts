import {Model, Table, Column, Unique, AllowNull, BeforeCreate, BeforeUpdate, DefaultScope} from 'sequelize-typescript'
import generateSalt from "../../utils/generateSalt";
import encodePassword from "../../utils/encodePassword";

@DefaultScope(() => ({
    attributes: ['id', 'firstName', 'lastName', 'email']
}))
@Table
class User extends Model {
    @AllowNull(false)
    @Column
    firstName: string

    @AllowNull(false)
    @Column
    lastName: string

    @AllowNull(false)
    @Unique
    @Column
    email: string

    @AllowNull(false)
    @Column
    password: string

    @Column
    salt: string

    @BeforeCreate
    static setPasswordInitial(instance: User) {
        instance.salt = generateSalt()
        const {password} = instance
        instance.password = encodePassword(password, instance.salt)
        console.log(instance.salt)
        console.log(instance.password)
    }

    @BeforeUpdate
    static setPasswordUpdate(instance: User) {
        const {password} = instance
        if (instance.changed('password')) {
            instance.password = encodePassword(password, instance.salt)
        }
    }
}

export default User
