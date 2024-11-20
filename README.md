# Tartarelli-Shop
## TODO: 
### Cart
### Admin Panel
### Products
### Design
### API
### ~~Migrate to Railway~~
### Sessions

```js
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const app = express();

// Connect to MongoDB (make sure to replace this with your actual MongoDB URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Use express-session and configure MongoDB as session store
app.use(session({
secret: process.env.SESSION_SECRET, // Secret for signing the session ID cookie
resave: false, // Don't save session if it's unmodified
saveUninitialized: false, // Don't store uninitialized sessions
store: MongoStore.create({
mongoUrl: process.env.MONGODB_URI, // MongoDB URI where sessions will be stored
collectionName: 'sessions', // Optional: Name of the collection to store sessions in
}),
cookie: {
maxAge: 24 * 60 * 60 * 1000, // Session expiration time (e.g., 1 day)
},
}));

app.get('/', (req, res) => {
if (req.session.views) {
req.session.views++;
res.send(`You have visited this page ${req.session.views} times`);
} else {
req.session.views = 1;
res.send('Welcome to the session demo. Refresh the page!');
}
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
```