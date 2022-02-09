
- # Templates d'api 
#### une serie de quickstarter d'api

   - ## branch ```express-postgres-pug```      
        -  Une api express/pug/postgres simple avec 2 routes "/" => affiche la home page  , "/api" => api et une bdd postgres sur le port 6543

        -  Packages : express / pug / pg / axios / cors / jest
               

## Commandes Globales :
- ### Demarrer les containeurs
allez dans le repertoire, 
selectionner la branch que vous souhaitez
```git branch <name>```
### copier le fichier '.env.example' et le renommer en '.env'
        docker-compose up -d
http://localhost:3000/

- ### afficher la console 
ouvrir un terminal dans le repertoire

        docker ps
        -- recuperer le nom du container puis
        docker attach <names>


- ### Initialiser la bdd
        sqitch deploy
- ### Rollback de la bdd
        sqitch revert
- ### Test de la bdd
        sqitch verify
- ### Arretez touts les containeurs
        docker stop $(docker ps -a -q)