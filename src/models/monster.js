const { Schema, model } = require("mongoose");

const monster = Schema(
    {
        id: Number,
        name: {
            ptBr: String,
            en: String,
        },
        info: {
            stats: {
                level: Number,
                hp: Number,
                atk: {
                    min: Number,
                    max: Number,
                },
                def: Number,
                mdef: Number,
                str: Number,
                agi: Number,
                vit: Number,
                int: Number,
                dex: Number,
                luk: Number,
                flee: Number,
                hit: Number,
                exp: {
                    base: Number,
                    job: Number,
                },
                race: String,
                element: {
                    name: String,
                    level: Number,
                },
                size: String,
            },
            others: {
                agressive: Boolean,
                helpAllies: Boolean,
                castDetect: Boolean,
                looter: Boolean,
                changeTarget: Boolean,
                positionFixed: Boolean,
                hidenDetect: Boolean,
                antiSteal: Boolean,
                boss: Boolean,
            },
            drops: Array,
            respawn: Array,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = model("Monster", monster);
