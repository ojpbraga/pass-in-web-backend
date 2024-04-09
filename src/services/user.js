let users = []; // Ainda iremos conectar com o bd

export const listUsers = () => {
    return users;
}

export const createUser = (user) => {
    users.push(user);
}
