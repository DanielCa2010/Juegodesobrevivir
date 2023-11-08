// Código generado automáticamente. No editar.
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
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200000000010100000000000000000202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.skillmap.islandTile7,sprites.dungeon.hazardLava1], TileScale.Sixteen);
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100001010103030101010101010101010101010201030303030101010201010303010101010301010301010101030303030301010103010303030303030301010103010303030104040404040401020101030301020101040404040404030101030303010101010404050704040303030301030101010304040608040401010101010303010103040404040404010201010101030301030404040404040301010101010101020103010301030303010101010101010101090909090909010101010101010101010909090909090301010101010101030303010103030101010201010102010301010201010301010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,myTiles.tile3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.builtin.brick], TileScale.Sixteen);
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
// Código generado automáticamente. No editar.
