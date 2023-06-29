# The Drone API

## Description

This is a RESTful API for The Drone.

## Technologies

The following technologies are being used in this project:

- [TypeScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- MySql
- Sequelise
- redis
- [joi](- https://github.com/hapijs/joi)

The following technologies will be be used in this project:

- [Docker](https://www.docker.com//)
- [Docker Compose](https://docs.docker.com/compose/)
- [Jest](https://www.postgres.com/)

## Requirements

Before starting, you need to create a .env file in the root directory of the project, and provide the environment variables in .env.example file.
Kindly ensure that you are in the root directory before running the following commands.

## Note

Ensure you have the used technologies listed above installed on your local machine to run this application on your local machine.

## Install Dependencies and Run the Application

```bash
npm install
```

## Run migrations

```bash
npm run migration:generate && migration:up
```

## Run MySql docker Container

`docker run --name mysql -e MYSQL_ROOT_PASSWORD=Fammieyjuliey12@# -d mysql:latest`

## Start the Application (Dev mode)

```bash
npm run watch
```

## Revert migrations

```bash
npm run migration:up
```

## Try It

* Open your browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/` endpoint

```shell
curl http://localhost:3000/
```

## Key Features (At the time)

1. Registering a drone.
2. Loading a drone with medication items.
3. Checking loaded medication items for a given drone.
4. Checking available drones for loading.
5. Checking drone battery level for a given drone.
6. Preventing drone from being loaded with more weight that it can carry.
7. Preventing drone from being in LOADING state if the battery level is **below 25%.**
8. Periodic task to check drones battery levels and create history/audit event log for
   this.
