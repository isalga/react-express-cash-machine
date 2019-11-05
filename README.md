Project includes a web client(React) and a server(Express, node).

#### server

Runs at port 5000 and takes the requested amount at the route `/notes` using a search query string. Example: `?search=50`.

A query would be: `https://localhost:5000/notes?search=50`

#### client

Runs on port 3000 `https://localhost:3000`.
Consist in a react component that uses a hook to call the server API.

## How to run

Install dependencies

`cd server` `npm install`
`cd client` `npm install`

run server: `cd server` `npm start`

To run client: `cd client` `npm start`
