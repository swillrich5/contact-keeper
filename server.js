const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.json({ msg: 'Welcome to the ContactKeeper API...'}));

// define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4999;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));