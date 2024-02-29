const tables = require("../tables");
// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all booking from the database
    const bookings = await tables.booking.readAll();

    // Respond with the bookings in JSON format
    res.json(bookings);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    // Fetch a specific booking from the database based on the provided ID
    const booking = await tables.booking.read(req.params.id);

    // If the booking is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the booking in JSON format
    if (booking == null) {
      res.sendStatus(404);
    } else {
      res.json(booking);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const create = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { booking_date } = req.body;
    const result = await tables.booking.create(booking_date);
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { browse, read, create };
