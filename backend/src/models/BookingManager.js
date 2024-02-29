const AbstractManager = require("./AbstractManager");

class BookingManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "booking" as configuration
    super({ table: "booking" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all bookings from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific booking by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the booking
    return rows[0];
  }

  // eslint-disable-next-line camelcase
  async create(booking_date) {
    const [result] = await this.database.query(
      `insert into ${this.table} (booking_date ) values (?)`,
      // eslint-disable-next-line camelcase
      [booking_date]
    );
    return result;
  }
}
module.exports = BookingManager;
