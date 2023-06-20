import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import User from './user.model';

class Question extends Model {
  public questionId!: number;
  public title!: string;
  public content!: string;
  public location!: string;
  public userId!: number;

  // Add any additional attributes you need

  // Add associations (e.g., belongsTo, hasMany) with other models
}

Question.init(
  {
    questionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    // Add additional attributes
  },
  {
    sequelize,
    tableName: 'questions',
    timestamps: true,
  }
);

Question.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Question;
