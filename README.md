# The Drone API

## Description

There is a major new technology that is destined to be a disruptive force in the field of
transportation: **the drone**. Just as the mobile phone allowed developing countries to leapfrog
older technologies for personal communication, the drone has the potential to leapfrog
traditional transportation infrastructure.
Useful drone functions include delivery of small items that are (urgently) needed in locations
with difficult access.

We have a fleet of **10 drones**. A drone is capable of carrying devices, other than cameras,
and capable of delivering small loads. For our use case **the load is medications**.

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

### NOTE: 

To run the app locally by passing valid MySQL credentials to the `database.config.ts` file, you can follow these steps:

1. Locate the `database.config.ts` file in your project directory. Typically, this file contains the configuration settings for connecting to your MySQL database.
2. Open the `database.config.ts` file and look for the fields related to database credentials. These fields might include `dbPassword`, `dbName`, `dbUserName`. Adjust the file according to your project's structure.
3. Replace the placeholders or empty values with your actual MySQL credentials.

## Technologies

The following technologies are being used in this project:

- [TypeScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- MySql
- Sequelise
- redis
- [HapiJoi](https://github.com/hapijs/joi)

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

npm run watch

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

Click the link below to see the postman Documentation.

[Postman API Documentation](https://documenter.getpostman.com/view/19330071/2s93zB62ef "Postman Documentation")
