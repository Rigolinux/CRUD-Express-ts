import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('Project_Travel', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 30306,
});


export default sequelize;