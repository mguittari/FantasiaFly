| route                   | Verbe  | Front | Back | Description                                                                   | status |
| ----------------------- | ------ | ----- | ---- | ----------------------------------------------------------------------------- | ------ |
| /                       | /      | oui   | non  | consulter la page d'accueil                                                   |        |
| /inscription            | /      | oui   | non  | accéder à la page d'inscription                                               |        |
| /profile                | /      | oui   | non  | accéder à mes informations                                                    |        |
| /newsletter             | /      | oui   | non  | s'inscrire à la newsletter                                                    |        |
| /travel                 | /      | oui   | non  | afficher la page des voyages proposés                                         |        |
| /travel/nom_destination | /      | oui   | non  | afficher la page d'un voyage en particulier, avec toutes les infos et un quiz |        |
| /booking                | /      | oui   | non  | consulter mes réservations                                                    |        |
| /paiement               | /      | oui   | non  | afficher plusieurs méthodes de paiement                                       |        |
| /contact                | /      | oui   | non  | contacter le service client via un formulaire                                 |        |
| /cgu                    | /      | oui   | non  | affichage des conditions générales d'utilisation                              |        |
| /users                  | post   | non   | oui  | enregistrer un user                                                           |        |
| /users                  | patch  | non   | oui  | mettre à jour les informations de user sans le mot de passe                   |        |
| /users/update-password  | patch  | non   | oui  | mettre à jour le mot de passe                                                 |        |
| /login                  | post   | non   | oui  | verifier si user existe et recup de token                                     |        |
| /logout                 | post ? | non   | oui  | deconnecter le user en modifiant la date d'exp de token                       |        |
| /me                     | get    | non   | oui  | get les informations de user avec un token                                    |        |
| /users                  | delete | non   | oui  | suppression du compte                                                         |        |
| /travels                | get    | non   | oui  | consulter la liste des voyages disponibles                                    |        |
| /travels/:id            | get    | non   | oui  | consulter le détail d'un voyage                                               |        |
| /bookings               | get    | non   | oui  | afficher l'historique et la réservation en cours                              |        |
| /bookings               | post   | non   | oui  | effectuer une réservation en payant et envoyer mail confirm                   |        |
| /bookings/:id           | delete | non   | oui  | annuler une réservation                                                       |        |
| /bookings/:id           | put    | non   | oui  | modifier une réservation                                                      |        |
| /travels                | post   | non   | oui  | ajouter un voyage (admin)                                                     |        |
| /travels/:id            | put    | non   | oui  | modifier un voyage (admin)                                                    |        |
| /travels/:id            | delete | non   | oui  | supprimer un voyage (admin)                                                   |        |
| /users                  | get    | non   | oui  | voir la liste des utilisateurs enregistrés (admin)                            |        |
| /users/:id              | get    | non   | oui  | voir en détail le profil d'un utilisateur enregistré (admin)                  |        |

#USE CASES

| En tant que ...  | J'ai besoin de ...                                                 | Afin de ...                                         | Sprint |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------- | ------ |
| visiteur x       | consulter la page d'acceuil                                        | visualiser le contenu                               | 1      |
| visiteur x       | consulter la liste des voyages disponibles                         | prendre une idée sur les voyages disponibles        | 1      |
| visiteur x       | avoir accés à la page d'inscription                                | pouvoir s'incrire                                   | 1      |
| visiteur x       | avoir accés à la page de connexion                                 | pouvoir se connecter                                | 1      |
| visiteur x       | avoir accés à s'inscrire à newsletter                              | recevoir les nouvelles du site                      | 1      |
| voyageur x       | avoir accés à la page profil                                       | afficher mon profil                                 | 2      |
| voyageur x       | de me déconnecter                                                  | quitter l'espace client                             | 2      |
| voyageur x       | modifier mes informations                                          |                                                     | 2      |
| voyageur x       | supprimer mon compte                                               |                                                     | 2      |
| voyageur x       | pouvoir mettre à jour informations du profil dont mon mot de passe |                                                     | 2      |
| voyageur         | pouvoir récupérer mon mdp si je l'ai oublié                        |                                                     | 2      |
| voyageur x       | choisir un voyage à une date proposé et lieu d'embarquement        | planifier mes vacances                              | 2      |
| voyageur x       | faire une réservation du voyage                                    |                                                     | 2      |
| voyageur x       | effectuer le paiement en ligne pour confirmer ma réservation       |                                                     | 2      |
| voyageur x       | annuler ma réservation                                             | prevenir tout imprevue                              | 2      |
| voyageur x       | pouvoir modifier ma réservation existante                          | rectifier en cas d'erreur                           | 2      |
| voyageur x       | etre informé du nombre du place restantes pour chaque voyage       | reagir en cas de rupture des places                 | 2      |
| voyageur x       | afficher le prix total du voyage                                   | pouvoir payer                                       | 2      |
| voyageur x       | voir l'historique et la réservation en cours                       |                                                     | 2      |
| voyageur x       | avoir plusieurs options de paiement(cartes de crédit, PayPal)      |                                                     | 2      |
| voyageur x       | Pouvoir contacter le service client via un formulaire en ligne     |                                                     | 2      |
| voyageur x       | Recevoir un mail de confirmation de ma réservation                 |                                                     | 2      |
| voyageur x       | Pouvoir lire les CGU du site                                       |                                                     | 2      |
| voyageur x       | Pouvoir jouer à un quiz                                            | tester ses connaissances sur le lieu de destination | 2      |
| administrateur x | pouvoir ajouter/modifier/supprimer un voyage                       |                                                     | 2      |
| administrateur x | pouvoir voir la liste des utilisateurs enregistrés                 |                                                     | 2      |
| administrateur x | gérer/ supprimer des comptes                                       |                                                     | 2      |
| administrateur x | pouvoir voir la liste des réservations par chaque voyageur         |                                                     | 2      |
