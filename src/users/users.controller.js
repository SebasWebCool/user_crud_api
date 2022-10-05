const uuid = require('uuid');
const { hashPassword } = require('../tools/crypt');

const Users = require('../models/users.model');

const getAllUsers = async () => {
    const data = await Users.findAll({
        attributes: {
            exclude: ['password'],
        },
    });
    return data;
};

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id,
        },
        attributes: {
            exclude: ['password'],
        },
    });
    return data;
};

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: hashPassword(data.password),
        birthday: data.birthday
    });
    return newUser;
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};
