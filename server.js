const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const User = require('./models/User');
const Appointment = require('./models/Appointment');
const MedicalRecord = require('./models/MedicalRecord');

const app = express();
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.use(express.static('public'));

// Sync Database
sequelize.sync({ force: false }).then(() => {
    console.log("Tables have been created.");
});

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to HealthWatch!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
