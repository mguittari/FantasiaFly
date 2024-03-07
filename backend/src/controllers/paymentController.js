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

const create = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { payment_date, unit_price, quantity, cancellation_insurance } =
      req.body;

    if (
      !payment_date ||
      !unit_price ||
      !quantity ||
      cancellation_insurance === undefined
    ) {
      res
        .status(400)
        .send("Veuillez fournir toutes les informations nécessaires.");
      return;
    }

    const result = await tables.payment.create(
      payment_date,
      unit_price,
      quantity,
      cancellation_insurance
    );
    if (result.affectedRows) {
      res.status(201).send(`Payment ok with id : ${result.insertId} `);
    } else {
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { browse, create };
