# Pour bien démarrer

C'est un projet [Next.js](https://nextjs.org/) démarré avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Lancer un serveur local
Pour lancer le projet :
- Avoir une base de données Postgres [disponible en local](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-macos) ou bien connaître l'url de la base de données de dev hébergée sur [Heroku](https://data.heroku.com/)
- Renseigner la DATABASE_URL dans `./.env.local`
- Jouer les migrations avec `npm run migrate deploy`
- Lancer le serveur de développement `npm run dev`


- Ouvrir [http://localhost:3000](http://localhost:3000) avec le navigateur pour voir le résultat.
- [Les routes API du BFF](https://nextjs.org/docs/api-routes/introduction) peuvent être requêtées [http://localhost:3000/api/healthcheck](http://localhost:3000/api/healthcheck). 

## Lancer les tests

Lancer les tests: `npm run test`

La commande lance une bases de données local pour les tests d'intégrations, puis joue les tests, puis éteint la base.

## Déploiement

### Prod
À chaque fois qu'on merge/commit sur master, l'environnement de `prod` est redéployé avec le nouveau code.
Il est disponible ici : https://next-app-delta-one.vercel.app/

### Dev
À chaque fois qu'on commit sur une nouvelle branche et qu'on la pousse, une nouvelle RA est déployé. 
Pour accéder à cette env de déploiement, il faut aller sur le site de Vercel, et vir les [déploiements](https://vercel.com/mbrandone/next-app/deployments)

## Pour en savoir +
### Dev Web
- Serveur web : [Next.js](https://nextjs.org/docs)
- Libraries Composants Web : [React.js](https://fr.reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html)

### Bases de données
- Base de données : [Postgre SQL](https://www.postgresql.org/docs/14/index.html)
- QueryBuilder, Migrations de base de données & interface de bases de données : [Prisma](https://www.prisma.io/docs/getting-started)

### CI/CD
- [Github Actions](https://docs.github.com/en/actions)

### Deploiement
- [Tableau de bord Vercel](https://vercel.com/mbrandone/next-app)
- [Documentation Vercel](https://vercel.com/docs)

### Versionning de code
- [Github](https://github.com/MBrandone/Next-app)
