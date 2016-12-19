# PetShopBack

## Requirement
* Node v4.4.3
* Npm 3

## Installation
```
npm install
```
## Config
Change database informations in: config/connections.js
```Javascript
module.exports.connections = {
  mysql: {
    module    : 'sails-mysql',
    host      : 'localhost',
    port      : 3306,
    user      : 'username',
    password  : 'password',
    database  : 'MySQL Database Name'
  }
};
```
## Start app
```
sails lift
```
## API
Create
```
POST /pets
```
Find
```
GET /pets
```
Update
```
PUT /pets/:id
```
Delete
```
DELETE /pets/:id
```
## Stack
* Sails
* Grunt
