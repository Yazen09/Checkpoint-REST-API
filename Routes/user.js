const express = require('express');
const User = require("../Model/user");
const Router = express.Router();

Router.get('/test', (req, res) => {
    res.send('hello');
});

Router.post('/add', async (req, res) => {
    try {
        const { firstname, name, email, password } = req.body;
        const newUser = new User({ firstname, name, email, password });
        await newUser.save();
        res.status(200).send({ msg: 'User added', newUser });
    } catch (error) {
        res.status(400).send({ msg: 'Cannot add this user' });
    }
});

Router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ msg: 'Users retrieved successfully', users });
    } catch (error) {
        res.status(400).send({ msg: 'Cannot retrieve users' });
    }
});

Router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).send({ msg: 'User deleted' });
    } catch (error) {
        res.status(400).send({ msg: 'Cannot delete this user' });
    }
});

Router.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const updateUser = await User.updateOne(
            { _id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: 'User updated' });
    } catch (error) {
        res.status(400).send({ msg: 'Cannot update this user' });
    }
});

Router.get('/:_id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params._id });
        res.status(200).send({ msg: 'User retrieved', user });
    } catch (error) {
        res.status(400).send({ msg: 'Cannot retrieve this user' });
    }
});

module.exports = Router;
