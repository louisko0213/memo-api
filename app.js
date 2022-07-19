const express = require('express');
const cors = require('cors');
const memoRoutes = require('./routes/memoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(memoRoutes);

app.listen(3002, () => {
    console.log('server is running on port 3002');
});