## Ragnarok Database API
----
An API to get monster information from "Ragnarok Online (Pre-renewal)" game.

**Base URL** `https://ragnarokapi.bravan.cloudns.cl`

### Methods:
  
#### `GET` List Monsters

`BaseURL/monsters/?page=value&limit=value`

| Query   | Type   | Description        |
|---------|--------|--------------------|
| `page`  | number | set current page   |
| `limit` | number | set indexs per page|

**Response:**
```json
[
    {
        "name": {
            "ptBr": "Portuguese name",
            "en": "English name"
        },
        id: "monster id"
    }
]
```

#### `GET` Monster search

`BaseURL/monster/find/?search=value`

| Query    | Type   | Description                  |
|----------|--------|------------------------------|
| `search` | string | monster name or partial name |

**Response:**
```json
[
    {
        "name": {
            "ptBr": "Portuguese name",
            "en": "English name"
        },
        id: "monster id"
    },
    {
        "name": {
            "ptBr": "Portuguese name",
            "en": "English name"
        },
        id: "monster id"
    }
]
```

#### `GET` Monster info

`BaseURL/monster/info/:id`

| Query | Type   | Description |
|-------|--------|-------------|
| `id`  | number | monster id  |

**Response:**
```json
{
    "name": {
        "ptBr": "Portuguese name",
        "en": "English name"
    },{
        info: {
            "stats": {
                "atk": {
                    "min": Number,
                    "max": Number
                },
                "exp": {
                    "base": Number,
                    "job": Number
                },
                "element": {
                    "name": String,
                    "level": Number
                },
                "level": Number,
                "hp": Number,
                "def": Number,
                "mdef":Number,
                "agi": Number,
                "vit": Number,
                "int": Number,
                "dex": Number,
                "luk": Number,
                "flee": Number,
                "hit": Number,
                "race": String,
                "size": String
            },
            "others": {
                "agressive": Boolean,
                "helpAllies": Boolean,
                "castDetect": Boolean,
                "looter": Boolean,
                "changeTarget": Boolean,
                "positionFixed": Boolean,
                "hidenDetect": Boolean,
                "antiSteal": Boolean,
                "boss": Boolean
            },
            "drops": Array,
            "respawn": Array
        }
    }
    id: "monster id"
}
```

#### `GET` Monster image

`BaseURL/monster/image/:id`

| Query | Type   | Description |
|-------|--------|-------------|
| `id`  | number | monster id  |

**Response:**
Monster image

**Developed by Matheus Ishiyama**