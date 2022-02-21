// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level_1":
            case "Level1":return tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0b020b0a0a0a0a0c0a0a0a0a0a0a0a0a0b0b0b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04070a0a0a0a0a0a0a0a0a0a0a0a0a0a05060a0a0a0a0a0a0a0a0a0a0a0a0a0a09080b030a0a0a0a0a0a0a0a0a0a0a0a0a0a02030a0a0a0a0a0a0a0a0a0a0a0a0a0a03030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0b0b0a0a0a0a0a0a0a0a0a0a0a0a0a0b020b0a0a0a0a0a0a0a0a0a0a0a0a0a0b0b0b0a0a0a0a010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
. . . . . . . . 2 . 2 . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . 2 . 2 . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.darkGroundCenter,myTiles.tile1,sprites.dungeon.greenOuterNorth2], TileScale.Sixteen);
            case "Level_2":
            case "Level3":return tiles.createTilemap(hex`1000100004040404040405050504040404040404040104040404050205040404040404040404040404040502050404040404040404040405050505050504040404040404040404050205040405050504040404040404040505050404050205040404040404040404040404040505050404040404040404050505040505050405050504040404040502050405020504050205040404040405050504050505040505050404040404040404040404050505040404040404040505050404040502050505050404040405020504040405050505020504040404050505040404040404050505040404040404040407080a040404040404060404040404040b0309040404040404`, img`
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . 2 2 2 2 2 2 . . . . . . . 
. . . 2 . 2 . . 2 2 2 . . . . . 
. . . 2 2 2 . . 2 . 2 . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . 2 2 2 . 2 2 2 . 2 2 2 . . 
. . . 2 . 2 . 2 . 2 . 2 . 2 . . 
. . . 2 2 2 . 2 2 2 . 2 2 2 . . 
. . . . . . . . . 2 2 2 . . . . 
. . . 2 2 2 . . . 2 . 2 2 2 2 . 
. . . 2 . 2 . . . 2 2 2 2 . 2 . 
. . . 2 2 2 . . . . . . 2 2 2 . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.stairNorth,sprites.dungeon.darkGroundCenter,myTiles.tile1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest0], TileScale.Sixteen);
            case "Level_3":
            case "Level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020204020102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020204020202020202020202020202020204040402020202020202020202020202020402020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205060702020202020204020202020202080309020202020204`, img`
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
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "Level_4":
            case "Level_4":return tiles.createTilemap(hex`10001000020202020202020202020202020202020203030303030301010103030303030202030b03030303010a010303030b0302020303030303030101010303030303020203030303020202020202030303030202010101010203080c090203030303020201010a0102030605070201010101020201010101020303030302010a0101020203030303020303040302010101010202030303030203030303020303030302020303030302030303030203030303020201010101020303030302030303030202010a01010203030303030101010102020101010102030b03030301010a01020203030303020303030303010101010202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 . . 2 . 2 . . . . . . 
. 2 2 . 2 . . 2 2 2 . 2 2 2 2 . 
. 2 2 2 2 . . . . . . 2 . 2 2 . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. 2 . 2 2 . . . . . . 2 2 2 2 . 
. 2 2 2 2 . . . . . . 2 2 . 2 . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "Level_5":
            case "Level_5":return tiles.createTilemap(hex`1000100009050a03030303030303030303030303060807030303030303030303030303030303010101010103030303030303030303030103030303010101010101030303030301030303030301010103030303030303010303030301010101010303030303030104030304030303030301010101030301030101010403030303030303010303010301030101010103030303030103030103010303030301010101030301030301030103010201030303010103010303010301030103010303030301040103030103010301030103030303010101030301010101010301030303030303030303010403030303010303030303030303030101010101010103030303030303`, img`
2 . 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . 
. . 2 . . . . 2 2 2 2 2 2 . . . 
. . 2 . . . . . 2 2 2 . . . . . 
. . 2 . . . . 2 2 2 2 2 . . . . 
. . 2 . . . . . . . . . 2 2 2 2 
. . 2 . 2 2 2 . . . . . . . . 2 
. . 2 . 2 . 2 2 2 2 . . . . . 2 
. . 2 . 2 . . . . 2 2 2 2 . . 2 
. . 2 . 2 . 2 . 2 . . . 2 2 . 2 
. . 2 . 2 . 2 . 2 . . . . 2 . 2 
. . 2 . 2 . 2 . 2 . . . . 2 2 2 
. . 2 2 2 2 2 . 2 . . . . . . . 
. . 2 . . . . . 2 . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth2,sprites.dungeon.chestClosed,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "Level5":
            case "Level5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Level_6":
            case "Level4":return tiles.createTilemap(hex`1000100004010101010101010101010101010104010201010105050501010101010101010101010105050d05010101010101010101010101050d05050105050501010101010101010505050101050d050101010101010103010101010105050501010101010101010101010101010101010101010101010101010104030c010105050501010101010303010b060a0101050d05010101010101010307080901010505050101010101010101030101010101010101050501010101010101010101010101010d05010105050501010101010101010105050101050d050101010101010101010101010105050501010101010101020104010101010101010101010101010104`, img`
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . 2 2 . 2 . . . . . . . . 
. . . . 2 . 2 2 . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 . 2 . . . . 
. . . . . . . . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . 2 2 2 . 
. . . . . . . 2 . 2 . . 2 . 2 . 
. . . . . . . 2 2 2 . . 2 2 2 . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. 2 . . 2 2 2 . . . . . . . . . 
2 2 . . 2 . 2 . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0,sprites.dungeon.greenOuterNorth2,myTiles.tile1,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
