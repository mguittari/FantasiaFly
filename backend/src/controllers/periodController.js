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
module.exports = { browse };
