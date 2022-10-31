


import sequelize from "../Database/database"

import {DataTypes} from 'sequelize';

export const Travel = sequelize.define('Travel', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false

    },
    weather: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visibility:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Comments :{
        type: DataTypes.STRING,
    }
},
{
    //to show date changes in the database
    timestamps: false
}
);