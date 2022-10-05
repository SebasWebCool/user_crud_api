const { DataTypes } = require('sequelize');

const { db } = require('../tools/database');

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    first_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    last_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    birthday: {
        allowNull: false,
        type: DataTypes.DATEONLY,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
    },
});

module.exports = Users;
