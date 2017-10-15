# Streamable Object

A server-side and client-side Node.js utility to stream data from MongoDB using:
* Express
* Mongoose

The stream is using [Mongoose's Cursor](http://mongoosejs.com/docs/api.html#query_Query-cursor) and logs the output to console.

### Database
The database **streamableDb** contains 3 collections:
* Users
* Cars
* Restaurants
Corresponding Schemas appear in `db.js`

The pre-made database is located in the `backup/` folder.
Please use the following command to restore the database:

```
mongorestore backup/
```

### Usage

```
npm install
npm start
Open http://localhost:3000
```

After filling the credentials and picking the desired tables, the readable stream should be printed to the server's console.