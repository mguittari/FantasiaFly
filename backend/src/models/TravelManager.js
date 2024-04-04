const AbstractManager = require("./AbstractManager");

class TravelManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "travel" as configuration
    super({ table: "travel" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all travels from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific travel by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the travel
    return rows[0];
  }

  // eslint-disable-next-line camelcase

  // eslint-disable-next-line camelcase
  async createByAdmin(destination_name, country, nb_of_total_seats) {
    const [result] = await this.database.query(
      `insert into ${this.table} (destination_name, country, nb_of_total_seats) values (?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [destination_name, country, nb_of_total_seats]
    );
    return result;
  }

  // eslint-disable-next-line camelcase
  update(destination_name, country, nb_of_total_seats, id) {
    return this.database.query(
      `UPDATE ${this.table} set destination_name = ?, country = ?, nb_of_total_seats = ? where id=?`,
      // eslint-disable-next-line camelcase
      [destination_name, country, nb_of_total_seats, id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = TravelManager;
