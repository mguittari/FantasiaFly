/* eslint-disable camelcase */
const fs = require("fs");
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
    const [travel] = await tables.travel.read(req.params.id);
    console.info(travel);

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
    const { destination_name, country, description, nb_of_total_seats } =
      req.body;
    const img_url = req.file.path;
    const result = await tables.travel.createByAdmin(
      destination_name,
      country,
      description,
      nb_of_total_seats,
      img_url
    );
    console.info(req.file);
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
      res.status(200).json({ message: "Le voyage a bien été mis à jour !" });
    } else {
      res.status(401).send("probleme");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateTravelPicture = async (req, res) => {
  try {
    console.info("try?");
    const { id } = req.params;
    console.info("id:", id);
    const img_url = req.file.path;
    console.info("img_url:", img_url);
    const [travel] = await tables.travel.read(id);
    console.info("travel:", travel);

    if (travel.length) {
      console.info("je suis dans if");
      fs.unlinkSync(travel[0].img_url);
      await tables.travel.editTravelPicture(id, img_url);
      res.send("Image mise à jour avec succès");
    } else {
      fs.unlinkSync(req.file.path);

      res.status(401).send("Vérifiez vos données");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);
    res.status(500).send(error);
  }
};
const deleteByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tables.travel.delete(id);
    if (result.affectedRows) {
      res.status(200).json({
        message: " Le voyage a bien été supprimé !",
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
  updateTravelPicture,
};
