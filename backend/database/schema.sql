create table user(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    birth_date DATE,
    email VARCHAR(50) UNIQUE NOT NULL,
    hashPassword VARCHAR(255) NOT NULL,
    phone_number VARCHAR(10),
    address VARCHAR(100),
    postal_code VARCHAR(5),
    city VARCHAR(150),
    country VARCHAR(50),
    img_url VARCHAR(150)
);

INSERT INTO user (firstname, lastname, birth_date, email, hashpassword, phone_number, address, postal_code, city, country, img_url)
VALUES
('Jean', 'Dupont', '1980-03-12', 'jean.dupont@example.com', 'M0tDeP@ss', '0612345678', '12 Rue de la République', '75001', 'Paris', 'France');

create table booking(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    booking_date DATE,
    id_payment INT,
    CONSTRAINT fk_booking_payment FOREIGN KEY (id_payment) REFERENCES payment(id),
    id_user INT,
    CONSTRAINT fk_booking_user FOREIGN KEY (id_user) REFERENCES user(id),
    id_travel INT,
    CONSTRAINT fk_booking_travel FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_booking_period FOREIGN KEY (id_period) REFERENCES period(id)
);

INSERT INTO booking (booking_date, id_payment, id_user, id_travel)
VALUES
('2024-02-14', 1, 1, 1);

create table travel(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    destination_name VARCHAR(100),
    country VARCHAR(100),
    nb_of_total_seats INT
);

INSERT INTO travel (destination_name, country, nb_of_total_seats)
VALUES
('Poudlard', 'Scotland', 50),
('Ifrane', 'Morocco', 40),
('Astapor', 'Morocco', 30),
('Twin Peaks', 'USA', 60),
('Planète des Singes', 'Space', 35),
('Anor Londo', 'Lordran', 1),
('Astéroide B612', 'Space', 5),
('Hopital psychiatrique Briarcliff', 'USA', 100),
('Loompaland', 'Loompa (Pacific Ocean)', 28),
('Westworld', 'USA', 15),
('Plum Creek', 'USA', 40),
('Fenêtre d/azur', 'Malta', 51),
('Maison Picassiette', 'France', 35);

create table payment(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cancellation_insurance BOOLEAN,
    payment_date DATE,
    unit_price DECIMAL(10,2),
    quantity INT
);


INSERT INTO payment (payment_date, cancellation_insurance, unit_price, quantity)
VALUES
('2024-02-14', true, 150.75, 3);

create table period(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_departure DATE,
    date_return DATE,
    duration_stay INT
);

INSERT INTO period (date_departure, date_return, duration_stay)
VALUES
('2024-03-01', '2024-03-07', 6);

create table travel_period(
    id_travel INT,
    CONSTRAINT fk_travel_period FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_period_travel FOREIGN KEY (id_period) REFERENCES period(id),
    type_transport VARCHAR(50)
);
 
INSERT INTO travel_period (id_travel, id_period, type_transport)
VALUES
(1, 1, 'Train');



-- UPDATE payment
-- SET cancellation_insurance = 
--   CASE
--     WHEN id IN (1, 4, 5) THEN true
--     WHEN id IN (2, 3, 6) THEN false
--     ELSE cancellation_insurance
--   END;

UPDATE TRAVEL
SET destination_description = 
  CASE
    WHEN id = 1 THEN 'Poudlard'
    WHEN id = 2 THEN 'Ifrane'
    WHEN id = 3 THEN 'Astapor'
    WHEN id = 4 THEN 'Twin Peaks'
    WHEN id = 5 THEN 'Planète des Singes'
    ELSE destination_name
  END;

  UPDATE travel
SET country =
CASE
WHEN id = 1 THEN 'Scotland'
WHEN id = 2 THEN 'Morocco'
WHEN id = 3 THEN 'Morocco'
WHEN id = 4 THEN 'USA'
WHEN id = 5 THEN 'Space'
WHEN id = 6 THEN 'Lordran'
WHEN id = 7 THEN 'Space'
WHEN id = 8 THEN 'USA'
WHEN id = 9 THEN 'Loompa (Pacific Ocean)'
WHEN id = 10 THEN 'USA'
WHEN id = 11 THEN 'USA'
WHEN id = 12 THEN 'Malta'
WHEN id = 13 THEN 'France'
ELSE country
END;

ALTER TABLE booking
ADD CONSTRAINT fk_booking_period
FOREIGN KEY (id_period)
REFERENCES  period(id)
ON DELETE CASCADE;

{
    "booking_date": "2024-03-06",
    "id_user": 3,
    "id_travel": 2,
    "id_payment": 51,
    "id_period": 4
  }