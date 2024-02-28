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
    img_url,
    hashPassword,
    phone_number,
    address,
    postal_code,
    city,
    country
  ) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, birth_date, email, img_url, hashPassword, phone_number, address, postal_code, city, country) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        birth_date,
        email,
        img_url,
        hashPassword,
        phone_number,
        address,
        postal_code,
        city,
        country,
      ]
    );
    // Return the ID of the newly inserted user
    return result;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  getUserById(id) {
    return this.database.query(
      `select firstname, lastname,img, email from ${this.table} where id=?`,
      [id]
    );
  }

  getUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email=?`, [
      email,
    ]);
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  editUserWithoutPassword(id, userWithoutpassword) {
    const columns = Object.keys(userWithoutpassword);
    const valuesColumns = Object.values(userWithoutpassword);
    const values = columns.map((column) => `${column} = ?`).join(", ");

    return this.database.query(
      `UPDATE ${this.table} set ${values} where id=?`,
      [...valuesColumns, id]
    );
  }

  editUserOnlyPassword(id, hashPassword) {
    return this.database.query(
      `UPDATE ${this.table} set hashPassword = ? where id=?`,
      [hashPassword, id]
    );
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
