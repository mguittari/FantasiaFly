const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all travels from the database
    const travels = await tables.travel.readAll();

    // Respond with the travels in JSON format
    res.json(travels);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    // Fetch a specific travel from the database based on the provided ID
    const travel = await tables.travel.read(req.params.id);

    // If the travel is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the travel in JSON format
    if (travel == null) {
      res.sendStatus(404);
    } else {
      res.json(travel);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const createByAdmin = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { destination_name, country, nb_of_total_seats } = req.body;
    const result = await tables.travel.createByAdmin(
      destination_name,
      country,
      nb_of_total_seats
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
const updateByAdmin = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { destination_name, country, nb_of_total_seats } = req.body;
    const { id } = req.params;
    const [result] = await tables.travel.update(
      destination_name,
      country,
      nb_of_total_seats,
      id
    );
    if (result.affectedRows) {
      res.status(200).json({ message: "Travel updated !" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.travel.delete(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " La suppression du voyage à été prise en compte",
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
  createByAdmin,
  updateByAdmin,
  deleteByAdmin,
};
