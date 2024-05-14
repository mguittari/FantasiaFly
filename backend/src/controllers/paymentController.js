/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
const tables = require("../tables");
// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all payments from the database
    const payments = await tables.payment.readAll();
    // Respond with the payments in JSON format
    res.json(payments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const createPayment = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { totalPrice, quantity } = req.body;

    if (!totalPrice || !quantity) {
      res
        .status(400)
        .send("Veuillez fournir toutes les informations nécessaires.");
      return;
    }
    const result = await tables.payment.create(totalPrice, quantity);

    if (result.affectedRows) {
      res.status(201).json(result.insertId);
    } else {
      res.status(401).json("erreur lors de l'enregistrement");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePaymentAndBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.payment.delete(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La réservation a bien été annulée",
      });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  browse,
  createPayment,
  deletePaymentAndBooking,
};
