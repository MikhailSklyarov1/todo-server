import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.ts';

const Todos = sequelize.define('todos', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    task:{type: DataTypes.STRING},
    isComplete:{type: DataTypes.BOOLEAN}
})

export { Todos };
