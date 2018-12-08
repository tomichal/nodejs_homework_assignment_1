# nodejs_homework_assignment_1

A simple implementation of a HTTP server in NodeJS per Homework Assignment #1 of the NodeJS Master Class course.
It only runs the server using a HTTP protocol.
Code is naturally largely inspired by the videos in the course up to this point.


# How to run it.
1. Clone the code with:<br/>
`git clone git@github.com:tomichal/nodejs_homework_assignment_1.git`

1. `cd nodejs_homework_assignment_1 && node app/index.js`
1. Open another terminal window and run:<br/>
`curl -X GET http://localhost:3000/hello`
1. You should get a response from the server printed out to the terminal saying:<br/>
`{"message":"Hello There"}`
