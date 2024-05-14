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
      `select *, DATE_FORMAT(date_departure, '%d-%m-%Y') AS date_departure, DATE_FORMAT(date_return, '%d-%m-%Y') AS date_return from ${this.table} join period on period.id = ${this.table}.id_period JOIN travel on travel.id = ${this.table}.id_travel WHERE id_travel = ?`,
      [id]
    );
    return periods;
  }

  async getTravelByIdPeriod(id) {
    const travel = await this.database.query(
      `select *, DATE_FORMAT(date_departure, '%d-%m-%Y') AS date_departure, DATE_FORMAT(date_return, '%d-%m-%Y') AS date_return from ${this.table} join travel on travel.id = ${this.table}.id_travel join period on period.id = ${this.table}.id_period WHERE id_period = ?`,
      [id]
    );
    return travel;
  }
}

module.exports = TravelPeriodManager;
