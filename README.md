# TipEase Front-End

***Pitch:*** Service workers need a way to collect tips directly, rather than through their employers. This app will allow payment processing directly to service workers as a tip.

***MVP:*** Service Employee can login and create, read and update a profile. Regular User can login and select a service employee and give them a tip.

***Stretch:*** Implement a payment feature that actually allows money exchange with a service like, paypal or stripe or venmo.

## Front-End Architect

| [<img src="https://avatars3.githubusercontent.com/u/43302456?s=460&v=4" align="center" width=100><br><b>Brett Madrid</b> ](https://github.com/brettmadrid) |
|---|

Register
https://tipease-server.herokuapp.com/api/register

Login
https://tipease-server.herokuapp.com/api/login

Image Upload - need a valid JWT to access
https://tipease-server.herokuapp.com/upload/:id


Customer endpoints - need a valid JWT to access

Access array of workers
GET - https://tipease-server.herokuapp.com/api/customer

Send worker a tip - need to put the id in the URL and pass in the id of the worker in the body
POST - https://tipease-server.herokuapp.com/api/customer/worker/:id



Worker endpoints - need a valid JWT to access

Gets worker data for their profile
GET - https://tipease-server.herokuapp.com/api/worker/:id

Deletes the workers profile - make sure you give them a prompt asking if they are sure they want to delete
DELETE - https://tipease-server.herokuapp.com/api/worker/delete/:id

Updates any fields that were changed and sent in with the PUT request
PUT - https://tipease-server.herokuapp.com/api/worker/update/:id
