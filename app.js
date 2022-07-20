const express = require('express');
const cors = require('cors');
const memoRoutes = require('./routes/memoRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(memoRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});