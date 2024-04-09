import databaseConnection from '../utils/database.js';
import User from '../models/user.js';

export const listUsers = async () => {
    await databaseConnection();
    const users = await User.find();
    return users;
}

export const createUser = async (user) => {
    await databaseConnection();
    const createdUser = await User.create(user);

    return createUser;
}

export const deleteUser = async (id) => {
    await databaseConnection();
    await User.findByIdAndDelete(id);
}

export const updateUser = async (id, newBody) => {
    await databaseConnection();
    await User.findByIdAndUpdate(id, newBody);
}
