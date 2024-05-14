/* eslint-disable prettier/prettier */
const tables = require("../tables");
// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all booking from the database
    const periods = await tables.period.readAll();

    // Respond with the periods in JSON format
    res.json(periods);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readById = async (req, res) => {
  try {
    const { id } = req.params;

    const [period] = await tables.period.getPeriodById(parseInt(id, 10));

    if (period.length) {
      res.status(200).json(period);
    } else {
      res.status(401).json("verfier vos données");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { browse, readById };
