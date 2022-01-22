## Run
```cmd
docker-compose -up -d
```
http://localhost:3000/api/v1
## deploy db
```cmd
sqitch deploy
```
## Rollback db
```cmd
sqitch revert
```
## Test db
```cmd
sqitch verify
```