import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.ts';

const Todos = sequelize.define('todos', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    task:{type: DataTypes.STRING},
    isComplete:{type: DataTypes.BOOLEAN}
})

const SubTodos = sequelize.define('sub_todos', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    task:{type: DataTypes.STRING},
    isComplete:{type: DataTypes.BOOLEAN}
})

SubTodos.belongsTo(Todos, {foreignKey: 'todo_id'});

export { SubTodos, Todos };
