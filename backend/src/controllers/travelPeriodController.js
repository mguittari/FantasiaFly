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

const getPeriodsByIdTravel = async (req, res) => {
  try {
    const { id } = req.params;
    // console.info(id);
    const [periods] = await tables.travel_period.getPeriodsByIdTravel(
      parseInt(id, 10)
    );
    console.info(periods);
    if (periods.length) {
      res.status(200).json(periods);
    } else {
      console.info(id);
      res.status(401).json("erreur");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTravelByIdPeriod = async (req, res) => {
  try {
    const { id } = req.params;
    const [travel] = await tables.travel_period.getTravelByIdPeriod(
      parseInt(id, 10)
    );
    console.info("travel in controller getTravelByIdPeriod-->", travel);
    if (travel.length) {
      res.status(200).json(travel);
    } else {
      res.status(401).json("erreur");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { choosePeriod, getPeriodsByIdTravel, getTravelByIdPeriod };
