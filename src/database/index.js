const mongoose = require("mongoose");
const { mongoUri } = require("../config/config");

mongoose
    .connect(mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(console.log("[Database] Connected"));