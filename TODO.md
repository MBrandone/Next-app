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
- ###Story 4 : MasterDoggyMind

- ###Story _ : 
  - Intégrer un linter à la CI
  - Ajouter des tests API end-to-end
  - mettre des import @
  - Afficher le test coverage dans le README Github
  - Mettre des animations avec spring (entre les pages, entre 2 états)
  - Le site doit être en https
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire un workflow de todo list journalière et exposer une api DDD avec Rest HATEOAS
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire faire le doggy quiz
  - S'inspirer de ce [talk](https://www.youtube.com/watch?v=7qqzqse1hgc) pour faire le masterdoggymind (équivalent mastermind)
  - Installer une nouvelle BDD pour chaque nouvelle branche
