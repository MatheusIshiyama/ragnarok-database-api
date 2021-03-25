const express = require("express");
const routes = express.Router();

const monsterController = require("./controllers/monster");

routes.get("/", (req, res) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping at: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    res.send("Ragnarok Pre Renewal database developed by Bravan").status(200);
});

//* list monsters
routes.get("/monsters", (request, response) => {
    monsterController.showMonsters(request, response);
});

routes.get('/monsters/find', (request, response) => {
    monsterController.findMonster(request, response);
}) 

//* show monster info
routes.get('/monster/info/:id', (request, response) => {
    monsterController.monsterInfo(request, response)
})

//* show monster gif
routes.get("/monster/image/:id", (request, response) => {
    monsterController.monsterGif(request, response);
});

module.exports = routes;
