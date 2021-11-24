## Stories

- ###Story 1 : Initier une CI
    - Une todo list non persisté et tester sur Next avec react-testing-library
    - Une CI avec:
        - Un job d'infos
        - Un job de test
        - un job de deploy prod depuis la branche master, non prod depuis les autres branches
        
- ###Story 2 : Une todo list persistée
  - [x] mettre une BDD Postgre
  - [x] migration avec [Prisma](https://www.prisma.io/nextjs)
  - [x] Créer un table todos
  - [x] Mettre des données dedans
  - [x] Les afficher dans la liste de todos
  - [x] Github actions doit deployer la BDD
    - [x] Deployer une BDD pg sur heroku utiliser par tous
    - [x] Jouer la dernière version des migrations après le déploiement
  - [x] Github actions doit jouer les migrations
  - [x] Comment on gère les secrets
    - [x] dans github, puis deployé avec Github actions
  - [x] Première archi avec infra / domain / app (Inspiration DILE et ce [lien](https://github.com/dimitridumont/clean-architecture-front-end))
  - [x] Test intégration BDD ? (1 jour max)
    - https://www.prisma.io/docs/guides/testing/integration-testing
  - [x] faire un endpoint get / todos
  - [x] Refaire readMe en pensant à MD10
  - [x] passer les endpoints en TS
  - [x] uniformiser le nommage task/todo => Tout renommer en tasks

- ###Story 3 : Ajouter une TODO dans la todo list persisté
  - [x] Ajouter un champ Input sur la page des todos persisté
  - [x] Au click sur "Ajouter" la tache s'ajoute dans la liste
  - [ ] Quand je rafraichis la page, la tache est présente
    - [x] créer le repo
    - [x] créer le usecase
    - [x] créer le endpoint
    - [x] Avoir un postman qui permet de tester
    - [x] Créer son test e2e Cypress
    - [x] Faire un appel depuis le composant
      - [x] Ecrire le test front cypress
      - [x] Faire passer le test cypress
    - [x] industrialiser les tests Cypress
      - [x] Run les tests dans la CI => On les lance sur l'app déployé (RA / Prod)
  - [x] Le composant devrait s'en foutre des ids et done => Typage différents (DTO / props / DatabaseEntity)
  - [x] Créer un TaskDTO qui est le contrat d'interface API de Task (done | title) 
    - S'inspirer de https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/
    - https://khalilstemmler.com/articles/categories/domain-driven-design/
  - [x] Trancher où on met les tests ?
    - [x] Dans un dossier test
  - [x] Trouver la place de /lib et /prisma

- ###Story 4 : On finit d'outiller
  - Intégrer un linter à la CI
  - mettre des import @
  - Le site doit être en https pour doggy-skool.fr
  - Quand j'ai pas de réseau, un message m'indique que je suis sans connexion
  - [ ] Gérer quand la BDD est pas dispo
    - [ ] Test d'intégration quand y a une erreur avec la BDD

- ###Story 5 : MasterDoggyMind
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire le masterdoggymind (équivalent mastermind)

- ###Story _ : 
  - Afficher le test coverage dans le README Github
  - Mettre des animations avec spring (entre les pages, entre 2 états)
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire un workflow de todo list journalière et exposer une api DDD avec Rest HATEOAS
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire faire le doggy quiz
  - Installer une nouvelle BDD pour chaque nouvelle branche
  - S'authentifier avec une app officiel
  - Mettre des observables pour les services
