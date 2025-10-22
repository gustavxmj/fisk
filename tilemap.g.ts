// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140001010101010101010101010101010101010101010102000000000000000000010105050000000001010000000000000000000001010101010100010101010101010101010101000000000505010001010100000000000000000100010101010101000101010000010101010101010000010001010000010101000006010000000001000001000100000101010100010101000101010000000000000001010101010001000000000000000001000100000501010101000101010101010100010101010100010100010100000000000000010000000000010000000001010001010101010001000101010101010101000101000100000000000100000000000000010100010100010001000100000000010101010101010001010101000101010000010000010403040001000101000000000501000101010001010101000100010100010105050100000001000000000000010001010000010105010101000101010101010101000101050501010101010505010505050500000000010101010101010101010101010101010101010101`, img`
22222222222222222222
2..........22......2
2..........222222.22
2222222222......2.22
2........2.222222.22
2..2222222..2.22..22
2...2....2..2.2..222
2.222.222.......2222
2.2........2.2...222
2.2222222.22222.22.2
2.......2.....2....2
2.22222.2.22222222.2
2.2.....2.......22.2
2.2.2.2....2222222.2
222.222..2..2....2.2
2.....2.222.2222.2.2
2.22..2...2......2.2
2..22.222.22222222.2
2..22222..2........2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,myTiles.tile2,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
