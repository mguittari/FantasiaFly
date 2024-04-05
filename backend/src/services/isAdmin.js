/* eslint-disable prettier/prettier */
const tables = require("../tables");
/* eslint-disable prettier/prettier */
const isAdmin = async (req, res, next) => {
  try {
    const id = req.payload;
    const [user] = await tables.user.getUserById(id);
    console.info(user);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: "Accès non autorisé" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
  //   if (req.user && req.user.role === "admin") {
  //     next();
  //   } else {
  //     res.status(403).json({ message: "Accès non autorisé" });
  //   }
};
module.exports = isAdmin;
