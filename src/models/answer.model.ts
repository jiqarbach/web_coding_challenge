import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import User from './user.model';
import Question from './question.model';

class Answer extends Model {
  public answerId!: number;
  public content!: string;
  public userId!: number;
  public questionId!: number;

  // Add any additional attributes you need

  // Add associations (e.g., belongsTo, hasMany) with other models
}

Answer.init(
  {
    answerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    // Add additional attributes
  },
  {
    sequelize,
    tableName: 'answers',
    timestamps: true,
  }
);

Answer.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Answer.belongsTo(Question, { foreignKey: 'questionId', as: 'question' });

export default Answer;
