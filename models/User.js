const Sequelize = require('sequelize');
const db = require('../database/db.js');
const Event = require('../models/Events');

var User  = db.sequelize.define(
    'users',
    {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        contact: {
            type: Sequelize.STRING
        },
        email_id: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        eid: {
            type: Sequelize.STRING,
            
        },
        role_id: {
            type: Sequelize.INTEGER
        }
    },
    { underscored: true },
    {
        timestamps: false
    }
);

User.belongsTo(Event, {foreignKey: 'eid'});
//Event.hasMany(User);

module.exports = User;
    