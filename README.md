# Project Overview

####SG-Project

In order for Front-End to interact with Back-End. Run the app.py file available in FlaskProject folder and once the server is started copy the URL for your local machine and replace it with the url for my local server in the data.service.ts where it says "apiURL", make sure you keep "/client". data.service.ts file should be available in client-list folder 


## Project Description

This is an app which consists collection of all the clients in Sqlite db. User will be presented with a list of clients. User can add new clients on http://localhost:4200/add. Once user fills the form with appropriate information the form resets and user will able to view their submission in client-list page by clicking on the view clients button. 



### MVP

- A web page to display in a table or list all the clients inserted in the database using the form page
- Front-End: Web Application using Angular Framework
- Back-End: Python REST API using Flask framework
- Database: SQLite file database

### Highlights

- In the Client-list component HTML file there is simple bootstrap table with First name, Last name, Email, Age, Company as its Columns heading and in its body there is a tr tag on which i used *ngFor (Angular Structural Directive) to repeat same tags for multiple clients which we are getting from api call.

- In the Client-list component TS file i have imported service in which I have called API to fetch data from database through backend.

- In the Add-client component HTML file, I have simply used bootstrap form inputs and applied angular reactive form attribute (Angular Attribute Directive) so that I can bind my input fields and apply validations on them. And also to apply submit button disable property when input fields are not valid.

- In the Add-client component Ts file, I have imported formBuilder, formGroup, validators so that I can build a new form object and apply validators on it and after that when user click on submit button I have a submit function that calls a function in dataService which then call API to send form data to backend.




