import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  address: string;
  age: number;
}
interface UserCreationAttributes
  extends Optional<UserAttributes, 'email'> { }

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    }
  }
);

export default User