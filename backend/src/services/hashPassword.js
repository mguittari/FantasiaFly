const argon2 = require("argon2");
const fs = require("fs");

const hashPassword = async (req, res, next) => {
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  try {
    const { password } = req.body;

    if (password) {
      const hashedPassword = await argon2.hash(password, hashOptions);
      delete req.body.password;

      req.body.hashedPassword = hashedPassword;

      next();
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("verifier vos données");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);

    res.status(500).send(error);
  }
};
module.exports = hashPassword;
