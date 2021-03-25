const monsterModel = require("../models/monster");
const imageModel = require("../models/image");

module.exports = {
    async showMonsters(request, response) {
        const page = request.query.page;
        const limit = request.query.limit;
        const monsters = await monsterModel
            .find({}, { _id: false, info: false })
            .sort("id");
        const result = monsters.slice((page - 1) * limit, page * limit);
        response.json(result);
    },

    async findMonster(request, response) {
        const search = request.query.search;
        let result = [];
        const monsters = await monsterModel.find({}, { _id: false, info: false }).sort("id");
        monsters.forEach((monster) => {
            if (monster.name.ptBr.toLowerCase().includes(search)) {
                result.push(monster);
            } else if (monster.name.en.toLowerCase().includes(search)) {
                result.push(monster)
            }
        });
        response.json(result);
    },

    async monsterInfo(request, response) {
        const monster = await monsterModel.findOne({ id: request.params.id });

        if (monster) {
            response.json(monster);
        } else {
            response.sendStatus(404);
        }
    },

    async monsterGif(request, response) {
        const image = await imageModel.findOne({ id: request.params.id });
        if (image) {
            const img = Buffer.from(image.img.data, "base64");
            response.writeHead(200, {
                "Content-Type": "image/png",
                "Content-Length": img.length,
            });
            response.end(img);
        }
    },
};
