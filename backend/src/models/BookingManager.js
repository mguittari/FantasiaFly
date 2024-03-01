const AbstractManager = require("./AbstractManager");

class BookingManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "booking" as configuration
    super({ table: "booking" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all bookings from the "user" table
    const [rows] = await this.database.query(
      `select id, DATE_FORMAT(booking_date, '%d-%m-%Y') AS booking_date, id_user, id_travel, id_payment from ${this.table}`
    );

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

  async queryGetAllInfo() {
    const [result] = await this.database.query(
      `SELECT u.id, u.firstname, u.lastname, u.email, u.phone_number, t.destination_name, tp.type_transport, DATE_FORMAT(pr.date_departure, '%d-%m-%y') AS date_departure, DATE_FORMAT(pr.date_return, '%d-%m-%y') AS date_return, DATE_FORMAT(b.booking_date, '%d-%m-%y') AS booking_date, p.unit_price, p.quantity, p.unit_price * p.quantity AS total_price
FROM booking as b
JOIN travel AS t ON t.id = b.id_travel
JOIN travel_period AS tp ON t.id = tp.id_travel
JOIN period AS pr ON tp.id_period = pr.id
JOIN user AS u ON u.id = b.id_user
JOIN payment AS p ON b.id_payment = p.id; `
    );
    return result;
  }

  async queryGetFactureById(id) {
    const [result] = await this.database.query(
      `SELECT u.id as id_user, u.firstname, u.lastname, u.email, u.phone_number, t.destination_name, tp.type_transport, DATE_FORMAT(pr.date_departure, '%d-%m-%y') AS date_departure, DATE_FORMAT(pr.date_return, '%d-%m-%y') AS date_return, DATE_FORMAT(b.booking_date, '%d-%m-%y') AS booking_date, p.unit_price, p.quantity, p.unit_price * p.quantity AS total_price
FROM booking as b
JOIN travel AS t ON t.id = b.id_travel
JOIN travel_period AS tp ON t.id = tp.id_travel
JOIN period AS pr ON tp.id_period = pr.id
JOIN user AS u ON u.id = b.id_user
JOIN payment AS p ON b.id_payment = p.id
WHERE u.id = ${id}`
    );
    return result;
  }
}
module.exports = BookingManager;
