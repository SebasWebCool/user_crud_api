const userControllers = require('./users.controllers');

const getAll = (req, res) => {
    userControllers
        .getAllUsers()
        .then((response) => {
            res.status(200).json({ items: response.length, users: response });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    userControllers
        .getUserById(id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(() => {
            res.status(404).json({
                message: `Invalid ID`,
            });
        });
};

const register = (req, res) => {
    const data = req.body;
    if (!Object.keys(data).length) {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                id: 'uuid',
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                password: 'string',
                birthday: 'YYYY/MM/DD'
            },
        });
    } else if (
        !data.first_name ||
        !data.last_name ||
        !data.email ||
        !data.password ||
        !data.birthday
    ) {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields:{
                id: 'uuid',
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                password: 'string',
                birthday: 'YYYY/MM/DD'
            },
        });
    } else {
        userControllers
            .createUser(data)
            .then((response) => {
                res.status(201).json({
                    message: `User created succesfully with id: ${response.id}`,
                    user: response,
                });
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }
};

module.exports = {
    getAll,
    getById,
    register,
};
