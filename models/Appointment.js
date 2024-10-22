const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Appointment = sequelize.define('Appointment', {
    patient_id: { type: DataTypes.INTEGER },
    doctor_id: { type: DataTypes.INTEGER },
    appointment_date: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('scheduled', 'cancelled', 'completed') }
});

module.exports = Appointment;
