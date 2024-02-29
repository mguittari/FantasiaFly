/* eslint-disable camelcase */
// Import access to database tables
const argon2 = require("argon2");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
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
      res.status(401).send("verfier vos données");
    }
  } catch (error) {
    res.status(500).send(error);
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
              expiresIn: "0.5h",
            }
          );

          res.status(200).send(token);
        } else {
          res.status(401).send("verifier vos données");
        }
      } else {
        res.status(401).send("addresse mail n'existe pas");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllBookingsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [bookings] = await await tables.user.getAllBookingsByUser(id);
    if (bookings != null) {
      res.json(bookings);
    } else {
      res.status(401).send("client n'existe pas avec cette reservation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
      expiresIn: "0h",
    });
    res.status(200).send({ message: "vous avez été déconnecté", token });
  } catch (error) {
    res.status(500).send(error);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
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
    } = req.body;

    const img_url = req.file.path;

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
      img_url
    );
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);

    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.user.editUserWithoutPassword(id, req.body);
    if (result.affectedRows) {
      res.status(200).json({ message: "Account updated !" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
// eslint-disable-next-line consistent-return
const editAvatar = async (req, res) => {
  try {
    const { id } = req.params;

    const { path: img_url } = req.file;

    const [result] = await tables.user.editUserOnlyAvatar(id, img_url);

    if (result) {
      res.status(200).json({ message: "Image updated!" });
    } else {
      res.status(401).send("Problem updating image");
    }
  } catch (error) {
    res.status(500).send(error.message || "Internal Server Error");
  }
};
const editPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { hashPassword } = req.body;
    const [result] = await tables.user.editUserOnlyPassword(id, hashPassword);
    if (result.affectedRows) {
      res.status(200).json({ message: "votre demande à été pris en compte" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
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
  editAvatar,
  editPassword,
  deleteUser,
  logout,
};
