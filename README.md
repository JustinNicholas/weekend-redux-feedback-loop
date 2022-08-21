## Project Name:
# Weekend Redux Feedback

## Description:
Duration: Weekend (Aug 19th - 21st)

For this project I created a feedback survey.

Visitors are funneled through the form by being required to answer the form and clicking the next button. there are three ratings that are required and an optional comments section. Users hit a review page where they can make any final edits. when a user submits their form they are routed to a complete page where they can click a button to go back through the form and enter new feedback.

The biggest problem I faced was getting the progress bar to match the progress throught the 5 pages. I was able to do this by getting updating the value in the redux store. This reducer was already referenced on the pages so I just had to add a key of 'progress' and update the value at each dispatch. 

# Screen Shot: [GIF of completed site](public/images/SurveyGIF.gif)

## Prerequisites and Installation:

Node.js

Fork and Clone this repo

"npm install" in the termianl of this project

"npm run server" to start the server.

"npm run client" to start the client.

npm run client will automatically open http://localhost:3000/ in your browser

Create a database named prime_feedback, The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, Open up your editor of choice and run an npm install

## Usage of website:

-A user can fill out a form
-Users can view all submission and delete entries in an admin page

## Built With:

React.js
Redux
Node.js
JSX
Material UI
PostgreSQL
Express.js
Axios
HTML
CSS
PG

## Support:

If you have suggestions or issues, please email me at nicholasj964@yahoo.com