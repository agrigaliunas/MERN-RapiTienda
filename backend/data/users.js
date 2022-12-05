import bcrypt from 'bcryptjs';

const users = [
{
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
},
{
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('123456',10),
},
{
    name: 'Rox Land',
    email: 'roxland1@example.com',
    password: bcrypt.hashSync('123456',10),
},
]

export default users