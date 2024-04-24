DROP DATABASE IF EXISTS fantasiafly_db;

CREATE DATABASE fantasiafly_db;

USE fantasiafly_db;

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
    role ENUM("user", "admin"),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table payment(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cancellation_insurance BOOLEAN NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table travel(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    destination_name VARCHAR(100),
    description VARCHAR(300),
    img_url VARCHAR(300),
    country VARCHAR(100),
    nb_of_total_seats INT
);

create table period(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_departure TIMESTAMP,
    date_return TIMESTAMP,
    duration_stay INT,
    unit_price DECIMAL(10,2)
);

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

INSERT INTO travel (destination_name, country, description, nb_of_total_seats, img_url)
VALUES
('Poudlard', 'Scotland', 'Embarquez pour Poudlard en compagnie de Henry, Aaron et Hermine. On augmente le prix du billet si vous êtes fan de l''univers.', 50, 'uploads/1712578931695-876118117-Poudlard.png'),
('Ifrane', 'Morocco', 'Redécouvrez Winterfell comme si vous y étiez.', 40, 'uploads/1712578956255-428889354-Ifrane.png'),
('Astapor', 'Morocco', 'Visitez la cité d''Astapor en compagnie de Daenerys comme un vrai touriste de passage au Maroc.', 30, 'uploads/1712578620497-190554078-Astapor.png'),
('Twin Peaks', 'USA', 'Percez les mystères de Twin Peaks dans une expérience hors du commun.', 60, 'uploads/1712579004905-336890596-Twin.png'),
('Planète des Singes', 'Space', 'Rejoignez une armée de singes et menez la rébellion contre la domination humaine.', 35, 'uploads/1712579031458-397918641-Singes.png'),
('Anor Londo', 'Lordran', 'Plongez dans Dark Souls IRL et confrontez-vous à la mort. Aller simple uniquement...', 1, 'uploads/1712579099522-637720771-Londo.png'),
('Astéroide B612', 'Space', 'Si vous aimez le Petit Prince vous allez adorer passer 3 jours sur un astéroïde vide et gelé.', 5, 'uploads/1712579114541-912240527-Astero.png'),
('Hopital psychiatrique Briarcliff', 'USA', 'Faites-vous interner le temps d''un séjour inoubliable.', 100, 'uploads/1712579129700-629422774-Briarcliff.png'),
('Loompaland', 'Loompa (Pacific Ocean)', 'Si vous avez aimé Charlie et la Chocolaterie et Super Mario Sunshine.', 28, 'uploads/1712579186776-26497043-Oompa.png'),
('Westworld', 'USA', 'Vous avez toujours rêvé d''être un cowboy, un vrai ? Sensations garanties !', 15, 'uploads/1712579213368-353406905-Westworld.png'),
('Plum Creek', 'USA', 'Baignez-vous dans la rivière de Plum Creek et rencontrez la famille Ingalls.', 40, 'uploads/1712579516894-36053817-Ingalls.png'),
('Fenêtre d''azur', 'Malta', 'Baignez-vous dans la rivière de Plum Creek et rencontrez la famille Ingalls.', 51, 'uploads/1712579529995-57265564-Azur.png'),
('Maison Picassiette', 'France', 'Falaises impressionnantes, plages cachées, temples mégalithiques aux mystérieuses légendes...', 35, 'uploads/1712579558138-539205857-Picassiette.png'),
('Vice City', 'USA', 'Partez à la rencontre du banditisme et admirez des couchers de soleil rose et bleu toute la journée.', 55, 'uploads/1712579731978-735304598-Vice.png');

INSERT INTO period (date_departure, date_return, duration_stay, unit_price)
VALUES
('2025-01-01', '2025-01-05',  6, 350.00),
('2025-04-21', '2025-04-28',  8, 400.00),
('2025-07-10', '2025-07-20',  11, 750.80),
('2025-09-01', '2025-09-15',  16, 990.90),
('2025-01-02', '2025-01-11', 10, 125.00),
('2025-03-03', '2025-03-09', 7, 175.00),
('2025-05-05', '2025-05-15', 11, 225.00),
('2025-08-10', '2025-08-22', 13, 600.00),
('2024-06-01', '2024-06-05', 5, 500.50),
('2024-09-01', '2024-09-10', 10, 990.00),
('2024-12-01', '2024-12-12', 12, 1150.75),
('2025-03-01', '2025-03-17', 17, 2100.00),
('2025-11-15', '2025-11-25', 11, 450.00),
('2025-12-20', '2026-01-05', 17, 800.00),
('2026-02-10', '2026-02-18', 9, 300.00),
('2026-04-05', '2026-04-15', 11, 700.00),
('2026-06-01', '2026-06-10', 10, 1550.00),
('2026-08-15', '2026-08-25', 11, 1720.00),
('2026-10-01', '2026-10-15', 15, 2950.50),
('2026-12-05', '2026-12-15', 11, 1480.00),
('2025-01-05', '2025-01-13', 9, 380.00),
('2025-02-15', '2025-02-25', 11, 670.00),
('2025-03-10', '2025-03-20', 11, 530.00),
('2025-04-25', '2025-05-06', 12, 850.00),
('2025-05-10', '2025-05-20', 11, 1720.00),
('2025-06-15', '2025-07-02', 18, 3400.00),
('2025-07-10', '2025-07-19', 10, 1340.00),
('2025-08-15', '2025-08-25', 11, 2500.50),
('2025-09-01', '2025-09-15', 15, 1020.50),
('2025-10-05', '2025-10-15', 11, 550.00),
('2025-11-20', '2025-11-28', 9, 450.00),
('2025-12-15', '2025-12-25', 11, 740.00),
('2026-01-10', '2026-01-20', 11, 590.00),
('2026-02-25', '2026-03-08', 12, 920.00),
('2026-03-15', '2026-03-25', 11, 780.00),
('2026-04-10', '2026-04-26', 17, 1150.00),
('2026-05-01', '2026-05-05', 5, 320.00),
('2026-06-01', '2026-06-05', 5, 420.50),
('2026-07-10', '2026-07-14', 5, 180.00),
('2026-08-20', '2026-08-25', 6, 310.00),
('2026-09-05', '2026-09-10', 6, 380.00),
('2026-10-15', '2026-10-19', 5, 220.00),
('2026-11-01', '2026-11-05', 5, 420.00),
('2026-12-10', '2026-12-14', 5, 290.00),
('2025-01-05', '2025-01-09', 4, 333.40),
('2025-03-15', '2025-03-24', 9, 750.00),
('2025-05-10', '2025-05-27', 17, 1416.50),
('2025-07-22', '2025-07-30', 8, 560.00),
('2025-08-02', '2025-08-14', 12, 1000.00),
('2025-10-05', '2025-10-20', 15, 1250.00),
('2025-11-28', '2025-12-10', 12, 1000.00),
('2025-12-21', '2025-12-31', 10, 833.30),
('2025-07-10', '2025-07-20',  11, 750.80),
('2025-09-01', '2025-09-15',  16, 990.90),
('2025-01-02', '2025-01-11', 10, 125.00),
('2025-03-03', '2025-03-09', 7, 175.00);


create table travel_period(
    id_travel INT,
    CONSTRAINT fk_travel_period FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_period_travel FOREIGN KEY (id_period) REFERENCES period(id),
    type_transport VARCHAR(50)
);

SET foreign_key_checks = 0;
 
INSERT INTO travel_period (id_travel, id_period, type_transport)
VALUES
(1, 1, 'Train'),
(1, 2, 'Train'),
(1, 3, 'Train'),
(1, 4, 'Train'),
(2, 5, 'Plane'),
(2, 6, 'Plane'),
(2, 7, 'Plane'),
(2, 8, 'Plane'),
(3, 9, 'Plane'),
(3, 10, 'Plane'),
(3, 11, 'Plane'),
(3, 12, 'Plane'),
(4, 13, 'Plane'),
(4, 14, 'Plane'),
(4, 15, 'Plane'),
(4, 16, 'Plane'),
(5, 17, 'Spaceship'),
(5, 18, 'Spaceship'),
(5, 19, 'Spaceship'),
(5, 20, 'Spaceship'),
(6, 21, 'Vortex'),
(6, 22, 'Vortex'),
(6, 23, 'Vortex'),
(6, 24, 'Vortex'),
(7, 25, 'Spaceship'),
(7, 26, 'Spaceship'),
(7, 27, 'Spaceship'),
(7, 28, 'Spaceship'),
(8, 29, 'Plane'),
(8, 30, 'Plane'),
(8, 31, 'Plane'),
(8, 32, 'Plane'),
(9, 33, 'Plane'),
(9, 34, 'Plane'),
(9, 35, 'Plane'),
(9, 36, 'Plane'),
(10, 37, 'Plane'),
(10, 38, 'Plane'),
(10, 39, 'Plane'),
(10, 40, 'Plane'),
(11, 41, 'Plane'),
(11, 42, 'Plane'),
(11, 43, 'Plane'),
(11, 44, 'Plane'),
(12, 45, 'Boat'),
(12, 46, 'Boat'),
(12, 47, 'Boat'),
(12, 48, 'Boat'),
(13, 49, 'Train'),
(13, 50, 'Train'),
(13, 51, 'Train'),
(13, 52, 'Train'),
(14, 53, 'Plane'),
(14, 54, 'Plane'),
(14, 55, 'Plane'),
(14, 56, 'Plane');

INSERT INTO user (firstname, lastname, birth_date, email, hashPassword, phone_number, address, postal_code, city, country, role) 
VALUES ('John', 'Doe', '1990-05-15', 'john.doe@example.com', 'pa$$worD1', '1234567890', '123 Main Street', '12345', 'Anytown', 'France', 'user'),
('Emily', 'Brown', '1998-03-25', 'emily.brown@example.com', 'pa$$worD3', '1112223333', '321 Elm Street', '98765', 'Villagetown', 'France', 'user'),
('Jane', 'Smith', '1985-10-20', 'jane.smith@example.com', 'pa$$worD3', '9876543210', '456 Oak Street', '54321', 'Bigcity', 'France', 'admin');

INSERT INTO payment (cancellation_insurance, quantity) 
VALUES (TRUE, 2),
(TRUE, 4),
(FALSE, 3);

INSERT INTO booking (id_payment, id_user, id_travel, id_period) 
VALUES (1, 1, 1, 1),
(2, 2, 3, 9),
(3, 2, 4, 14);

SET foreign_key_checks = 1;