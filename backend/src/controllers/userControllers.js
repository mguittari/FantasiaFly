/* eslint-disable camelcase */
// Import access to database tables
const argon2 = require("argon2");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

console.info(process.env.SECRET_KEY_JWT);
// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const [user] = req.user;
    console.info(user);
    if (user.role === "admin") {
      // Fetch all users from the database
      const users = await tables.user.readAll();

      // Respond with the users in JSON format
      res.json(users);
    } else {
      res.status(401).send("Accès non authorisé");
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const readById = async (req, res) => {
  try {
    const id = req.payload;
    const [user] = await tables.user.getUserById(id);
    if (user.length) {
      res.status(200).json({ message: "isLogged", user: user[0] });
    } else {
      res.status(401).json("verfier vos données");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const readByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({ message: "remplir vos champs !" });
    } else {
      const [user] = await tables.user.getUserByEmail(email);
      if (user.length) {
        // check password
        const isVerify = await argon2.verify(user[0].hashPassword, password);

        if (typeof isVerify === "boolean" && isVerify) {
          const token = jwt.sign(
            { payload: user[0].id },
            process.env.SECRET_KEY_JWT,
            {
              expiresIn: "4h",
            }
          );

          res.status(200).json(token);
        } else {
          res.status(401).json("verifier vos données");
        }
      } else {
        res.status(401).json("addresse mail n'existe pas");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllBookingsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [bookings] = await tables.user.getAllBookingsByUser(id);
    console.info(id);
    console.info(bookings);

    if (bookings) {
      res.json(bookings);
    } else {
      res.status(401).json("client n'existe pas avec cette reservation");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
      expiresIn: "0h",
    });
    res.status(200).json({ message: "vous avez été déconnecté", token });
  } catch (error) {
    res.status(500).json(error);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const create = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      birth_date,
      email,
      hashPassword,
      phone_number,
      address,
      postal_code,
      city,
      country,
      role,
    } = req.body;
    console.info("controller create user:", req.body);
    console.info("role?:", req.body.role);

    let img_url = "";
    if (req.file) {
      img_url = req.file.path;
    }

    const result = await tables.user.create(
      firstname,
      lastname,
      birth_date,
      email,
      hashPassword,
      phone_number,
      address,
      postal_code,
      city,
      country,
      img_url,
      role
    );

    if (result.affectedRows) {
      res.status(201).json("created");
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).json("erreur lors de l'enregistrement");
    }
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstname,
      lastname,
      phone_number,
      address,
      postal_code,
      city,
      country,
    } = req.body;
    console.info(req.body);

    const [result] = await tables.user.editUserWithoutPassword(
      id,
      firstname,
      lastname,
      phone_number,
      address,
      postal_code,
      city,
      country
    );
    console.info("result-->", result);
    if (result.affectedRows) {
      res.status(200).json({ message: "Account updated !" });
    } else {
      res.status(401).json("probleme");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const editPassword = async (req, res) => {
  try {
    const id = req.payload;
    const { hashPassword } = req.body;
    console.info(id);
    console.info(hashPassword);
    const [result] = await tables.user.editUserOnlyPassword(id, hashPassword);

    if (result.affectedRows) {
      res.status(200).json({ message: "votre demande à été pris en compte" });
    } else {
      res.status(401).json("probleme");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const editOnlyPicture = async (req, res) => {
  try {
    const id = req.payload;
    console.info("id:", id);
    console.info(req.file);
    const img_url = req.file.path;
    console.info("img_url:", img_url);
    const [user] = await tables.user.getUserById(id);
    console.info("user:", user);

    if (user.length) {
      console.info("je suis dans if");
      await tables.user.editProfilPicture(img_url);
      res.json("Image mise à jour avec succès");
    } else {
      fs.unlinkSync(req.file.path);

      res.status(401).json("verifier vos données");
    }
  } catch (error) {
    // fs.unlinkSync(req.file.path);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.user.deleteUser(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La suppression du compte à été prise en compte",
      });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  create,
  read,
  readById,
  readByEmail,
  getAllBookingsByUser,
  edit,
  editPassword,
  editOnlyPicture,
  deleteUser,
  logout,
};
