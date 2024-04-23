/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class PeriodManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "travel" as configuration
    super({ table: "period" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all travels from the "user" table
    const [rows] = await this.database.query(
      `select *, DATE_FORMAT(date_departure, '%d-%m-%Y') AS date_departure, DATE_FORMAT(date_return, '%d-%m-%Y') AS date_return from ${this.table}`
    );

    // Return the array of period
    return rows;
  }

   getPeriodById(id) {
    return this.database.query(
      `select * from ${this.table} where id=?`,
      [id]
    );
  }
}

module.exports = PeriodManager;
