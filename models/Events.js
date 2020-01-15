const Sequelize = require('sequelize')
const db = require('../database/db.js')

var Event = db.sequelize.define(
    'events', {
    eid: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE
    },
    time: {
        type: Sequelize.TIME
    },
    venue: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    requirement: {
        type: Sequelize.STRING
    }
},
    { underscored: true },
    {
        timestamps: false
    }
);

module.exports = Event;
