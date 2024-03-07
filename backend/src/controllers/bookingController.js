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

const getAllInfo = async (req, res) => {
  try {
    const bookings = await tables.booking.queryGetAllInfo();
    res.json(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getFactureById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tables.booking.queryGetFactureById(id);

    if (result[0] != null) {
      res.json(result);
    } else {
      res.status(401).send("Bill does not exist");
    }
  } catch (error) {
    res.status(500).send(error);
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
    const { booking_date, id_user, id_travel, id_payment, id_period } =
      req.body;
    const result = await tables.booking.create(
      booking_date,
      id_user,
      id_travel,
      id_payment,
      id_period
    );
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
// const updateBooking = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {booking_date} = req.body;
//     const
//   } catch (error) {}
// };

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.booking.deleteBooking(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " Réservation supprimée !",
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
  read,
  create,
  getAllInfo,
  getFactureById,
  deleteBooking,
};
