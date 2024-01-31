# E-Commerce Simulator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Bearing in mind the relevance of the electronic industry for business purposes, having a tool that stores all of your sales information is heavily important nowadays. This E-commerce site allows the user to store his products in a database through a BackEnd application based on Express.JS as well as Sequelize and MySQL database to approach that. 

## Table of Contents:
- [The Challenge](#Challenges-Faced)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [Mock-Up](#Mock-Up)
- [License](#License)
- [Author](#Author)

## Challenges Faced
Once the application has been seeded and connected to the database (Schema.sql), the endpoints for either update or delete the products and interact with them were struggled at the beginning.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database.
```

## Installation Process
Being a BackEnd application that is not being deployed, all the code will be runned through CLI:

1. Clone the repository created on Github on your VSC code to start working on it.
2. Install the following through CLI:
- Node JS.
- Express.JS
- MySQL
- Nodemon.
- Insomnia.
- Sequelize and Dependencies (dotenv).
3. Make sure to modify your .env file to ensure you're storing your Username and Password information to have access to your database.

## Usage Instructions
Once having those dependencies and packages installed in your machine:

1. Open the terminal and access to your mysql database at `mysql -u root -p` + `your-password`.
2. Once opening your database sql, quit from mysql and run `npm run seed` for easier purposes => That's gonna run your seeded index.js file.
3. Open Insomnia and start testing your database requests for all the endpoints pointed out => Create, Post, Put and Delete.

## Built With
- Visual Studio Code VSC for code edition.
- JavaScript.
- Node JS.
- Express JS
- MySQL.
- Sequelize

## Mock Up
[Descriptive Video](https://drive.google.com/file/d/1LAjg45Ebf1EKmjqGdNRwZQ4x_BWB7o1Y/view?usp=sharing)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author
[Maria Angulo](https://github.com/maferadr)
