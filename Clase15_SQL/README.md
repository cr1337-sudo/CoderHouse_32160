
# Correr imagen MySQL

```
Syntaxis: docker run -d -p $clientPort:3306 --name $containerName -e MYSQL_ROOT_PASSWORD=$password mysql
```

# Verificar conexión ingresando a mysql por consola

```
docker exec -it $containerName mysql -p
```

