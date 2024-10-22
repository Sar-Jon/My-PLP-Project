const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const MedicalRecord = sequelize.define('MedicalRecord', {
    patient_id: { type: DataTypes.INTEGER },
    doctor_id: { type: DataTypes.INTEGER },
    visit_date: { type: DataTypes.DATE },
    notes: { type: DataTypes.TEXT }
});

module.exports = MedicalRecord;
