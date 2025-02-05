/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(
    firstname,
    lastname,
    birth_date,
    email,
    hashPassword,
    phone_number,
    address,
    postal_code,
    city,
    country,
    img_url,
    role
  ) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname,
        lastname,
        birth_date,
        email,
        hashPassword,
        phone_number,
        address,
        postal_code,
        city,
        country,
        img_url,
        role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        birth_date,
        email,
        hashPassword,
        phone_number,
        address,
        postal_code,
        city,
        country,
        img_url,
        role,
      ]
    );
    return result;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select *, DATE_FORMAT(birth_date, '%d-%m-%Y') AS birth_date from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(
      `select *, DATE_FORMAT(birth_date, '%d-%m-%Y') AS birth_date from ${this.table}`
    );

    // Return the array of users
    return rows;
  }

  getUserBookingsById(id) {
    return this.database.query(
      `select u.id, u.firstname, u.lastname, u.city, b.booking_date, b.cancellation_insurance from user as u inner join booking as b on u.id = b.id where u.id= ${id}`
    );
  }

  getUserById(id) {
    return this.database.query(
      `select id, firstname, lastname, birth_date, img_url, email, phone_number, address, postal_code, city, country, hashPassword, role from ${this.table} where id=?`,

      [id]
    );
  }

  getUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email=?`, [
      email,
    ]);
  }

  getAllBookingsByUser(id) {
    return this.database.query(
      `SELECT 
    u.id AS user_id,
    u.firstname,
    u.lastname,
    u.email,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'booking_id', b.id,
            'booking_date', b.created_at,
            'destination_name', t.destination_name,
            'quantity', p.quantity,
            'date_departure', pr.date_departure,
            'date_return', pr.date_return,
            'total_price', FORMAT(p.quantity * pr.unit_price, 2)
        )
    ) AS bookings
FROM 
    user AS u
JOIN 
    booking AS b ON u.id = b.id_user
JOIN 
    payment AS p ON p.id = b.id_payment
JOIN 
    travel AS t ON t.id = b.id_travel
JOIN 
    period AS pr ON pr.id = b.id_period
WHERE 
    u.id = ${id}`
    );
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // editUserWithoutPassword(id, userWithoutpassword) {
  //   const columns = Object.keys(userWithoutpassword);
  //   const valuesColumns = Object.values(userWithoutpassword);
  //   const values = columns.map((column) => `${column} = ?`).join(", ");

  //   return this.database.query(
  //     `UPDATE ${this.table} set ${values} where id=?`,
  //     [...valuesColumns, id]
  //   );
  // }

  editUserWithoutPassword(
    id,
    firstname,
    lastname,
    phone_number,
    address,
    postal_code,
    city,
    country
  ) {
    return this.database.query(
      `UPDATE ${this.table} set firstname = ?, lastname = ?, phone_number = ?, address = ?, postal_code = ?, city = ?, country = ? where id=?`,
      [
        firstname,
        lastname,
        phone_number,
        address,
        postal_code,
        city,
        country,
        id,
      ]
    );
  }

  editProfilPicture(img_url) {
    return this.database.query(
      `UPDATE ${this.table} SET img_url = ?`,
      // eslint-disable-next-line camelcase
      [img_url]
    );
  }

  editUserOnlyPassword(id, hashPassword) {
    return this.database.query(
      `UPDATE ${this.table} set hashPassword = ? where id=?`,
      [hashPassword, id]
    );
  }

  queryGetUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }

  deleteUser(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = userManager;
