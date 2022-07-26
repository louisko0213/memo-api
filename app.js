const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const memoRoutes = require('./routes/memo');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/memo', memoRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});