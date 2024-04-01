import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    "todo",
    "root",
    "eduunit1!",
    {
        dialect: "mysql",
        host:"147.45.190.87",
        port: 3306
    }
)

export default sequelize;