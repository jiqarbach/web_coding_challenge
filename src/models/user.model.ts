import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database';

interface UserAttributes {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> { }

interface UserModel
    extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes { }

const User = sequelize.define<UserModel>(
    'User',
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'users',
        timestamps: true, // Add timestamps
    }
);

export default User;