import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Abid",
      email: "abid@gmail.com",
      // password: bcrypt.hashSync("1234", 8),
      password: "1234",
      isAdmin: true,
    },
    {
      name: "Nadia",
      email: "nadia@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
    {
      name: "Aakash",
      email: "aakash@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
    {
      name: "Rafi",
      email: "rafi@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
};
export default data;
