/* eslint-disable prettier/prettier */
const tables = require("../tables");

const choosePeriod = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { id_travel, id_period, type_transport } = req.body;
    const result = await tables.travel_period.choosePeriod(
      id_travel,
      id_period,
      type_transport
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

module.exports = { choosePeriod };
