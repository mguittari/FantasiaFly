/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class PaymentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "travel" as configuration
    super({ table: "payment" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all travels from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async create(total_price, quantity) {
    const [result] = await this.database.query(
      `insert into ${this.table} (total_price, quantity) values (?, ?)`,
      // eslint-disable-next-line camelcase
      [total_price, quantity]
    );
    console.info("result in manager -->", result);
    return result;
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = PaymentManager;
