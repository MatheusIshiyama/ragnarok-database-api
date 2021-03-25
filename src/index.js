const app = require("./app");
const { port } = require("./config/config");

require('./database');

app.listen(port, () => {
    console.log("[Api] On port: " + port);
});
