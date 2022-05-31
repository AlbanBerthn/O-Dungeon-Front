# O'Dungeons front

## Présentation

Bienvenue sur le projet O'Dungeon. Ce projet a vu le jour pour le derniers mois de la formation de Developpeur Web et Web Mobile de l'Ecole O'clock.

Composé de 5 personnes, notre équipe avais un moi afin de rendre un projet qui pouvais mettre en valeur tout ce que l'on avais appris au cours de notre formation.

Nous etions séparé en 2 groupes : - 3 personnes pour le Front avec React
                                  - 2 personnes pour le back avec Symfony

Le but de ce projet est de créer un site pour permettre au joueurs du jeu de rôle Donjon et Dragon, qu'il sois confirmé ou débutant, de créer une fiche personnage utilisable de n'importe ou, mais également d'avoir des renseignement sur les races/classe disponible dans le jeu.

## Ce qui est fait sur le site

Nous avons donc mis en place la création de fiche personnage (incomplete mais j'en parlerais plus bas dans la catégorie " Ce qu'il reste a faire"). Dans cette fiche personnage l'utilisateur a accès a un menu déroulant lui permettant de choisis sa Race/Classe ainsi que son historique.
Il peut également lancer des dès afin de choisir aléatoirement les stats de son personnage, a savoir : Force, Déxtérité, Constitution, Intélligence, Charisme et Sagesse.

Dans les onglets race et classes, il a accès a tout les informations les concernants ainsi que tout les sous-classes/sous-races disponibles.

Nous avons également mis en place la possibilité de créer un compte utilisateurs et donc, de ce connecter.

L'utilisateur peut également modifier ses informations (nom, email, mot de passe) ainsi que son avatar ( a choisir parmis ceux disponible en BDD).

## Ce qui reste a faire

Le site n'est pas en ligne pour l'instant car afin de tenir les délais, nous avons du simplifier la base de données. De ce fait, toutes les informations concernant l'equipement par exemple ne sont pas totalement exact. 
La BDD va donc devoir être en grande partis recréer avant une mise en ligne.

Mais a terme nous aimerions rajouter un descriptif des monstres dipsonibles dans le jeu, ainsi que la description complete des historiques disponible et des capacités de chaque classes.

De plus nous voudrions permettre a l'utilisateur d'imprimer sa fiche personnage dans un premiers temps. 
Dans un second temps, nous souhaiterions qu'il puisse également l'avoir sous format PDF, ainsi que la sauvegarder sur son compte afin d'y avoir acces n'importe quand de n'importe ou.

A terme, nous aimerions mettre en place la possibilité pour les joueurs et mj de jouer directement sur le site et mettre a disposition une map interactive.

## Déroulement du projet

Le projet c'est déroulé en 4 sprint :

Sprint 0 : Nous avons, developpeurs front et back, rédigé le cahier des charges. Ce dernier contenait une presentation du projet, ainsi que tout les technologies utilisés.
Il contient également les wireframes que nous avons créers pour l'occasions, ainsi que l'arborescence du front et du backoffice et les routes.

Coté back, nous avons aidés nos 2 developpeur symfony a redigé le MVP et le dictionnaire de données, mais également le MCD et le MLD.

Sprint 1: C'est la que nous avons commencer a developper. Nous avons mis en place la page d'accueil, et les onglets races/classes de manière statiques.

Sprint 2: Nous avons fais la dynamisations des pages créer précédement, et ensuite nous avons crées la page "Création de personnage" ainsi que la page "Mon Compte", "Connexions" et "Créer un compte". Ensuite nous avons tout relier à l'API.

Sprint 3: Derniere étapes avec la fin de l'Apothéose (nom donnée par l'Ecole O'Clock au mois qu'il nous donne pour faire notre projet), nous avons fais surtout beaucoup de mise en page, afin de rendre le site plus agréable, que ce sois en version mobile ou en version desktop. Nous avons également réparé les quelques petites erreurs qui restait içi ou la (par exemple le menu burger en version mobile qui ne ce fermais pas au moment ou l'on cliquais sur un lien).

## Liste des technologies et outils utilisées (coté Front)

Les technologies :

- Javascript
- HTML
- React
- Redux
- Axios
- Scss
- React Router Dom

Les outils :

- Babel Transpiler
- Yarn
- ESlint
- Webpack

## Pour afficher le site

- Une fois le repo télécharger, ouvrir un terminal et taper la commande : yarn.
Cela permettra de telecharger toute les dépendances dont le projet a besoin.

- Ensuite taper la commande: yarn start
Cela permettra de lancer le serveur.

Il n'y a plus qu'a allez sur le lien suivant : "locahost:8080" afin d'afficher le site.
