
- # Templates d'api 
#### une serie de quickstarter d'api
   - ## branch ```express-postgres```
        -  Une api express/postgres simple avec 2 routes "/" , "/api" et une bdd postgres sur le port 6543

        -  Packages : express / pg / axios / cors / jest
          

## Commandes Globales :
### Demarrer
### copier le fichier '.env.example' et le renommer en '.env'
```cmd
docker-compose up -d
```
http://localhost:3000/
## Initialiser la bdd
```cmd
sqitch deploy
```
## Rollback de la bdd
```cmd
sqitch revert
```
## Test de la bdd
```cmd
sqitch verify
```