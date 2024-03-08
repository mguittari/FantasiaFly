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
    img_url VARCHAR(150),
    role ENUM("user", "admin")
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
);

INSERT INTO user (firstname, lastname, birth_date, email, hashpassword, phone_number, address, postal_code, city, country, img_url, role)
VALUES
('Jean', 'Dupont', '1980-03-12', 'jean.dupont@example.com', 'M0tDeP@ss', '0612345678', '12 Rue de la République', '75001', 'Paris', 'France', 'user');

create table booking(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_payment INT,
    CONSTRAINT fk_booking_payment FOREIGN KEY (id_payment) REFERENCES payment(id) ON DELETE CASCADE,
    id_user INT,
    CONSTRAINT fk_booking_user FOREIGN KEY (id_user) REFERENCES user(id),
    id_travel INT,
    CONSTRAINT fk_booking_travel FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_booking_period FOREIGN KEY (id_period) REFERENCES period(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    quantity INT
);


INSERT INTO payment (payment_date, cancellation_insurance, quantity)
VALUES
('2024-02-14', true, 150.75, 3);

create table period(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    departure_date TIMESTAMP,
    return_date TIMESTAMP,
    duration_stay INT,
    unit_price DECIMAL(10,2)
);

INSERT INTO period (departure_date, return_date, departure_place, return_place, duration_stay, unit_price)
VALUES
(CONVERT_TZ('2025-01-01 00:00:00', 'France', 'Poudlard'), CONVERT_TZ('2025-01-05 00:00:00', 'Poudlard', 'France'), 6, 350.00),
(CONVERT_TZ('2025-04-21 00:00:00', 'France', 'Poudlard'), CONVERT_TZ('2025-04-28 00:00:00', 'UTC', 'Europe/Paris'), 8, 400.00),
(CONVERT_TZ('2025-07-10 00:00:00', 'France', 'Poudlard'), CONVERT_TZ('2025-07-20 00:00:00', 'UTC', 'Europe/Paris'), 11, 750.80),
(CONVERT_TZ('2025-09-01 00:00:00', 'France', 'Poudlard'), CONVERT_TZ('2025-09-15 00:00:00', 'UTC', 'Europe/Paris'), 16, 990.90);

('2025-01-02', '2025-01-11', 10, 125.00),
('2025-03-03', '2025-03-09', 7, 175.00),
('2025-05-05', '2025-05-15', 11, 225.00),
('2025-08-10', '2025-08-22', 13, 600.00),

('2025-11-15', '2025-11-25', 11, 450.00),
('2025-12-20', '2026-01-05', 17, 800.00),
('2026-02-10', '2026-02-18', 9, 300.00),
('2026-04-05', '2026-04-15', 11, 700.00),

('2026-06-01', '2026-06-10', 10, 550.00),
('2026-08-15', '2026-08-25', 11, 720.00),
('2026-10-01', '2026-10-15', 15, 950.50),
('2026-12-05', '2026-12-15', 11, 480.00),

('2027-02-20', '2027-02-28', 9, 380.00),
('2027-04-15', '2027-04-25', 11, 670.00),
('2027-06-10', '2027-06-20', 11, 530.00),
('2027-08-25', '2027-09-05', 12, 850.00),

('2027-10-10', '2027-10-20', 11, 720.00),
('2027-12-15', '2028-01-02', 19, 1100.00),
('2028-03-01', '2028-03-10', 10, 600.00),
('2028-05-15', '2028-05-25', 11, 780.00),

('2028-07-01', '2028-07-15', 15, 1020.50),
('2028-09-05', '2028-09-15', 11, 550.00),
('2028-11-20', '2028-11-28', 9, 450.00),
('2029-01-15', '2029-01-25', 11, 740.00),

('2029-03-10', '2029-03-20', 11, 590.00),
('2029-05-25', '2029-06-05', 12, 920.00),
('2029-07-10', '2029-07-20', 11, 780.00),
('2029-09-15', '2029-10-02', 17, 1150.00),

('2030-01-01', '2030-01-05', 3, 250.00),
('2030-03-15', '2030-03-20', 5, 320.00),
('2030-05-01', '2030-05-05', 4, 420.50),
('2030-07-10', '2030-07-15', 4, 180.00),

('2030-09-20', '2030-09-25', 6, 310.00),
('2031-01-05', '2031-01-10', 5, 380.00),
('2031-03-15', '2031-03-20', 4, 220.00),
('2031-06-01', '2031-06-05', 3, 420.00),

('2031-08-10', '2031-08-15', 4, 290.00),
('2031-10-20', '2031-10-25', 5, 350.00),
('2036-01-01', '2036-01-15', 15, 800.00),
('2036-03-15', '2036-04-01', 18, 1200.00),

('2036-06-01', '2036-06-30', 30, 2500.50),
('2036-09-01', '2036-09-30', 30, 2200.00),
('2036-12-01', '2036-12-31', 31, 2800.00),
('2037-03-01', '2037-03-30', 30, 2100.00),

('2037-06-01', '2037-07-01', 31, 3000.00),
('2037-09-01', '2037-09-30', 30, 2400.00),
('2038-01-01', '2038-02-01', 32, 3200.00),
('2038-04-01', '2038-04-30', 30, 2800.00);


create table travel_period(
    id_travel INT,
    CONSTRAINT fk_travel_period FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_period_travel FOREIGN KEY (id_period) REFERENCES period(id),
    type_transport VARCHAR(50),
    departure_place, VARCHAR(50),
    return_place, VARCHAR(50)
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