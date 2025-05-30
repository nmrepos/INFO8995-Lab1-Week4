# Lab 1 (Week 4)
## Nidhun Murali - 8981611

## [Task 1](https://github.com/nmrepos/INFO8995-Lab1-Week4/tree/main/task1)
### Multiple Services:
Create a docker-compose.yml file to run a MySQL database (port 3306) and a PHPMyAdmin service (port 8081).
Configure the database credentials using environment variables.

## [Task 2](https://github.com/nmrepos/INFO8995-Lab1-Week4/tree/main/task2)
### Persistent Data:
Modify your docker-compose.yml to ensure that the MySQL database stores data in a volume, so that data is not lost when the container is restarted.

## [Task 3](https://github.com/nmrepos/INFO8995-Lab1-Week4/tree/main/task3)
### Application with Dependencies:
Define a Docker Compose setup for a pgAdmin4 GUI application that depends on a PostgreSQL database.
Ensure that the application only starts after the database is ready.

## [Task 4](https://github.com/nmrepos/INFO8995-Lab1-Week4/tree/main/task4)
### Scaling with Docker Compose:
Modify a docker-compose.yml file to run three replicas of your ReactJS application with NodeJS API as a back-end service.
Make sure either ReactJS or NodeJS application is following multi-stage build process
Ensure traffic is load-balanced across the replicas with appropriate port mappings
