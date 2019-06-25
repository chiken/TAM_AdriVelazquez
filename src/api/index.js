const express = require('express');

const userDef = require('./routes/users')
const { checkToken, checkPermisions } = require('./middleware')

module.exports = (mongoService) => {

    const app = express();

    app.use(checkToken)
    app.use('/users', checkPermisions, userDef(mongoService))

    return app;
}