create table user(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname varchar(50),
    lastname varchar(50),
    birth_date Date,
    email varchar(50),
    hashPassword varchar(50),
    address varchar(50),
    postal_code varchar(50),
    city varchar(150),
    country varchar(50)
);

INSERT INTO user (firstname, lastname, birth_date, email, hashpassword, phone_number, address, postal_code, city, country)
VALUES
( 'Jean', 'Dupont', '1980-03-12', 'jean.dupont@example.com', 'M0tDeP@ss', '0612345678', '12 Rue de la République', '75001', 'Paris', 'France'),
('Marie', 'Martin', '1985-08-22', 'marie.martin@email.com', 'S3cur!téP@ss', '0987654321', '456 Avenue des Roses', '69002', 'Lyon', 'France'),
('Pierre', 'Lefevre', '1993-02-10', 'pierre.lefevre@email.com', 'Ch@ng3M0tDeP@ss', '0654321098', '789 Boulevard du Soleil', '31000', 'Toulouse', 'France'),
('Sophie', 'Robert', '1980-11-28', 'sophie.robert@email.com', 'P@ssw0rd123', '0231547698', '101 Rue de beavisage', '44000', 'Nantes', 'France'),
('Thomas', 'Dubois', '1998-09-03', 'thomas.dubois@email.com', 'C0mpl3xP@ss!', '0765432189', '202 Chemin de la Paix', '33000', 'Bordeaux', 'France'),
('Emma', 'Garcia', '1995-04-20', 'emma.garcia@email.com', 'SécuR!téP@ss789', '0345678901', '567 Avenue de la Joie', '13001', 'Marseille', 'France'),
('Louis', 'Fournier', '1987-07-12', 'louis.fournier@email.com', 'P@ssw0rd!nCrYpt3d', '0789012345', '890 Boulevard de saul santé', '69003', 'Lyon', 'France'),
('Camille', 'Dumas', '1992-01-05', 'camille.dumas@email.com', 'C0d3S3cur!téXYZ', '0123456789', '123 Rue de la lune', '75002', 'Paris', 'France'),
('Hugo', 'Bertrand', '1983-10-15', 'hugo.bertrand@email.com', 'Ex@mpleP@ssw0rd', '0567890123', '456 Avenue du Bonheur', '59000', 'Lille', 'France'),
('Chloé', 'Moreau', '1996-08-28', 'chloe.moreau@email.com', 'M0t2P@ssCh@ll3ng3', '0890123456', '789 Rue de la Sérénité', '69004', 'Lyon', 'France');

create table booking(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    booking_date Date,
    id_payment INT,
    CONSTRAINT fk_booking_payment FOREIGN KEY (id_payment) REFERENCES payment(id),
    id_user INT,
    CONSTRAINT fk_booking_user FOREIGN KEY (id_user) REFERENCES user(id),
    id_travel INT,
    CONSTRAINT fk_booking_travel FOREIGN KEY (id_travel) REFERENCES travel(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO booking (booking_date, id_payment, id_user, id_travel)
VALUES
('2024-02-14', 1, 1, 1),
('2024-02-15', 2, 2, 2),
('2024-02-16', 3, 3, 3),
('2024-02-17', 4, 4, 4),
('2024-02-18', 5, 5, 5),
('2024-02-19', 6, 6, 6),
('2024-02-20', 7, 7, 7),
('2024-02-21', 8, 8, 8),
('2024-02-22', 9, 9, 9),
('2024-02-23', 10, 10, 10);

create table travel(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    destination_name varchar(50),
    destination_description varchar(250),
    nb_of_seats_purchased INT,
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
    cancellation_insurance Boolean,
    payment_date Date,
    unit_price DECIMAL(10,2),
    quantity INT
);


INSERT INTO payment (payment_date, cancellation_insurance, unit_price, quantity)
VALUES
('2024-02-14', true, 150.75, 3),
('2024-02-15', false, 200.50, 2),
('2024-02-16', true, 75.25, 1), 
('2024-02-17', false, 120.00, 2), 
('2024-02-18', false, 90.30, 4), 
('2024-02-19', false, 180.85, 1), 
('2024-02-20', true, 100.00, 6), 
('2024-02-21', true, 160.45, 2),
('2024-02-22', false, 130.20, 1), 
('2024-02-23', true, 220.75, 3) 

create table period(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_departure Date,
    date_return Date,
    duration_stay INT,
);

INSERT INTO period (date_departure, date_return, duration_stay)
VALUES
('2024-03-01', '2024-03-07', 6),
('2024-04-10', '2024-04-15', 5),
('2024-05-20', '2024-05-27', 7),
('2024-06-15', '2024-06-20', 5),
('2024-07-05', '2024-07-12', 7),
('2024-08-10', '2024-08-16', 6),
('2024-09-18', '2024-09-25', 7),
('2024-10-12', '2024-10-18', 6),
('2024-11-22', '2024-11-28', 6),
('2024-12-05', '2024-12-12', 7);

create table travel_period(
    id_travel INT,
    CONSTRAINT fk_travel_period FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_period_travel FOREIGN KEY (id_period) REFERENCES period(id),
    type_transport varchar(50)
);
 
INSERT INTO travel_period (id_travel, id_period, type_transport)
VALUES
(1, 1, 'Train'),
(2, 2, 'Bus'),
(3, 3, 'Flight'),
(4, 4, 'Car'),
(5, 5, 'Flight'),
(6, 6, 'Train'),
(7, 7, 'Bus'),
(8, 8, 'Flight'),
(9, 9, 'Car'),
(10, 10, 'Train');


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
