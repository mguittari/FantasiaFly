/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class TravelPeriodManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "travel" as configuration
    super({ table: "travel_period" });
  }

  // eslint-disable-next-line camelcase
  async choosePeriod(id_travel, id_period, type_transport) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id_travel, id_period, type_transport) values (?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [id_travel, id_period, type_transport]
    );
    return result;
  }

  async getPeriodsByIdTravel(id) {
    const periods = await this.database.query(
      `select * from ${this.table} join period on period.id = ${this.table}.id_period JOIN travel on travel.id = ${this.table}.id_travel WHERE id_travel = ?`,
      [id]
    );
    return periods;
  }
}

module.exports = TravelPeriodManager;
