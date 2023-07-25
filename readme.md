  
 
### DESCRIPTION

The purpose of this node application is to store the responses of the students from the survey form and also to display the question and options.

### INSTALLATION

clone the project - https://github.com/dhiksha1234/survey_app_sequelize.git
Give `yarn install` to install all the dependencies

### SETTING UP

For configuring the mysql with your node application, 

Create an env file with 

`MYSQL_HOST = localhost
 MYSQL_USER = your username
 MYSQL_PASSWORD = your password
 MYSQL_DATABASE = your database
 PORT = 8000`

To run the migration , give the command - `yarn migrate`

To run the seeders , give the command - `yarn seeders`
 
### PORT

Running on the port - 8000


### ENDPOINTS

>GET  http://localhost:8000/api/v1/question - to get the list of the question


>GET  http://localhost:8000/api/v1/response - to get the responses of the user

>GET  http://localhost:8000/api/v1/option - to get the list of the option

>GET  http://localhost:8000/api/v1/question/option/:questionId/:optionId - to get the questionOptionId


>POST http://localhost:8000/api/v1/response - to post the responses of the user


>POST http://localhost:8000/api/v1/user  - to create a user

### FINAL STEP

To start the server, give `yarn start`
