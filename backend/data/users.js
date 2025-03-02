import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sanketh",
    email: "sanketh@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Karthik",
    email: "karthik@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;  
