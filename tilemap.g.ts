// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

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
            case "Level_4":
            case "Level_4":return tiles.createTilemap(hex`100010000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c02020202020201010102020202020c0c020a020202020109010202020a020c0c02020202020201010102020202020c0c020202020c0c0c0c0c0c020202020c0c010101010c02070b080c020202020c0c010109010c020504060c010101010c0c010101010c020202020c010901010c0c020202020c020203020c010101010c0c020202020c020202020c020202020c0c020202020c020202020c020202020c0c010101010c020202020c020202020c0c010901010c0202020202010101010c0c010101010c020a020202010109010c0c020202020c0202020202010101010c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
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
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairSouth,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "Level_7":
            case "Level5":return tiles.createTilemap(hex`10001000010101010101010101010101010101010101010c0c010c0c01010101010101010101010c0505050c0101010101010101010101010504050103030301010101010101010c0505050c03020301010107080101010c0c010c0c030303010101090601030303010101010505050101010a0b010302030303030105040501010101010103020202020301050505010101010101030303030303010101010101010101010101010101030303010101050505010101010101010302030101010504050101010101010103030301010105050501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . 2 . 2 . . . 2 2 
. . . . . . . . 2 2 2 . . . 2 . 
. 2 2 2 . . . . . . . . . . 2 2 
. 2 . 2 2 2 2 . . . . . . . . . 
. 2 . . . . 2 . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "Level_8":
            case "Level6":return tiles.createTilemap(hex`10001000010101010101010101010101010101010101010101010101010101010101010101010101010a010404040101010101010101010101010104030401010101010101010104040404040404010101010101010101040303040101010101010101010a0a0a040403040101010101040404010202020a0404040a0a0a0a01040304010a0a0a0a0c0c0a020202020a040404010c0c0a0c0c0c010a0a0a0a01010101010c0c0c0c0c0404040c0c0404040101010c010101010403040c0c0403040404010c010101010404040c0c0404030304040c01010c0c0c0c0c0c0c0c04040403030506070c0c0c0c0c0c0c0c0c0c04040408090b0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 2 . 2 . . . . . 2 2 2 . 
. . . . 2 2 2 . . . . . 2 . 2 . 
. . . . . . . . . . . . 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . 2 2 2 . . . 
. . . . . 2 . 2 . . 2 . 2 2 2 . 
. . . . . 2 2 2 . . 2 2 . . 2 2 
. . . . . . . . . . . 2 2 2 . . 
2 2 2 . . . . . . . . . . 2 2 2 
2 . 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast0,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "Level_9":
            case "Level13":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010206020101010101010101010101010105040301010101010101010101010101090909010101010101010101010101010a0a0a0101010101010101010101010107070701010101010101010101010101070707010101010101010101010101010708070101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "Level_11":
            case "Level8":return tiles.createTilemap(hex`10001000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104080701010101010101010101010101050a0601010101010101010101010101010201010101010101010101010101010103010101010101010101010101010101090101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
            case "Level_13":
            case "Level10":return tiles.createTilemap(hex`1000100001010201010101010101010101020101010102010404040404040401010201010202020403030303030303040102020201010403010101010101010304010101010403010505050505010101030401010104030506060606060501010304010101040305060101010605010103040101010403050601060106050101030401010104030506010101060501010304010101040305060606060605010103040101010403010505050505010101030401010101040301010101010101030401010101010104030303030303030401010101020202010404040404040401010202020101020101070809010101010102010101010201010b0c0a0101010101020101`, img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . 2 . . . . . . . . . 2 . . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.hazardLava0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "Level_10":
            case "Level7":return tiles.createTilemap(hex`10001000020202020202020202020202020202020203030303030303030303030303030202030404040404040404040404040402020304030303030303030303030104020203040304040404040404040301040202030403040404040404040403010708020304030404040404040404030105090203040304040403030404040301060a0203040304040403030404040301040202030403040404040404040403010402020304030404040404040404030104020203040304040404040404040301040202030403030303030303030303010402020304040404040404040404040404020203030303030303030303030303030202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairWest,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
            case "Level_14":
            case "Level19":return tiles.createTilemap(hex`1000100006030101010101010101010101010107080401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101050101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairNorth,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
            case "Level_15":
            case "Level16":return tiles.createTilemap(hex`1000100003040401040401040404010404040101040202040202040204020402020204010402040204020404020404020404040104020404040204040204040202020401040204010402040402040404040204010104010101040101040104020202040104040401040404010104040404040101020202040202020404020202040101010402040402040401040204020401010104020404020202040402020204010101010401040204040104020402040101010101010402020204040204040204010101010101040404010104040104010101010101040204020401010101010101010101010104020401010101010107080501010104040204040101010101090a06`, img`
. . . 2 . . 2 . . . 2 . . . 2 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . 2 . . . . . . . . . . . 2 
2 . 2 2 2 . 2 2 . 2 . . . . . 2 
. . . 2 . . . 2 2 . . . . . 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . 2 . . . . . 2 2 2 
. . . . . . . . . . . . . 2 2 2 
2 . 2 . . . . 2 . . . . . 2 2 2 
2 2 2 . . . . . . . . . . . 2 2 
2 2 2 2 . . . 2 2 . . 2 . 2 2 2 
2 2 2 . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "Level_16":
            case "Level18":return tiles.createTilemap(hex`100010000a0103030301030303010303030101010103020202030202020302020203010101030203030302030203020303030101010302030303020202030202020301010103020202030203020303030203010101010303030103030303020202030101010101010101010101010303030101010103030301010303030101030303010103020202030302030303030202020301010302030103020303010302030301010103020303030203030303020202030101030203030302030301030203030101010103010303020202030302020203010101010101010303030101030b0b01010101010101010101010101010108090701010101010101010101010101060405`, img`
. 2 . . . 2 . . . 2 . . . 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 . . . 2 . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 
2 . . . 2 2 . . . 2 2 . . . 2 2 
. . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . 2 . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 . . . . 2 2 
2 2 . 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "Level_12":
            case "Level9":return tiles.createTilemap(hex`10001000010102020303030303030303030302010201010202030303030303030302020102020102020303030303030303020101030202010203030303030303020201020a0202010202020303030202020101020303020201020202030202010101020203030202020102020202010102020203030303020201010201010102020303030303030302020101010202020303030303030303020201010101020202030303030303020201010202010102020203030303020201020202020201010202020303020201010203030302020201010202030201010202030303030202020101020809050202030303030303030202010107040603030303030303030303020202`, img`
. . 2 2 . . . . . . . . . . 2 . 
2 . . 2 2 . . . . . . . . 2 2 . 
2 2 . 2 2 . . . . . . . . 2 . . 
. 2 2 . 2 . . . . . . . 2 2 . 2 
. 2 2 . 2 2 2 . . . 2 2 2 . . 2 
. . 2 2 . 2 2 2 . 2 2 . . . 2 2 
. . 2 2 2 . 2 2 2 2 . . 2 2 2 . 
. . . 2 2 . . 2 . . . 2 2 . . . 
. . . . 2 2 . . . 2 2 2 . . . . 
. . . . 2 2 . . . . 2 2 2 . . . 
. . . 2 2 . . 2 2 . . 2 2 2 . . 
. . 2 2 . 2 2 2 2 2 . . 2 2 2 . 
. 2 2 . . 2 . . . 2 2 2 . . 2 2 
. 2 . . 2 2 . . . . 2 2 2 . . 2 
2 2 2 2 2 . . . . . . . 2 2 . . 
2 . 2 . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "Level_17":
            case "Level11":return tiles.createTilemap(hex`1000100001010101010101010101010101010803010303030303030303030303030303030101010101010101010101010101010103030303030303030303030303030301010101010101010101010101010101010103030303030303030303030303030301010101010101010101010101010101030303030303030303030303030303010101010101010101010101010101010101030303030303030303030303030303010101010101010101010101010101010303030303030303030303030303030101010101010101010101010101010101010101030303030303030303030303030705010101010101010101010101010104060303030303030303030303030302`, img`
. . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,myTiles.tile2], TileScale.Sixteen);
            case "Level_18":
            case "Level12":return tiles.createTilemap(hex`1000100003020202020202020202020202020203020202020202020202020202020202020205050505050505050505050505050502050404040504040505040504040405020504050505040504050405040505050205040404050401040504050404040502050405050504050504040504050505020504040405040505050405040404050205050505050505050505050505050502050505050505050505050505050505020504040504040505040504050505050205040504050405050504050505050502050405050504050505040505050505020504050505040505050405050505050806050505050505050505050505050509070202020202020202020202020203`, img`
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
2 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,myTiles.tile3,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "Level_19":
            case "Level14":return tiles.createTilemap(hex`100010000102020202020202020202020208090602020202020202020202020202050a070202040204020404040204020402020202020204020204020402040204020202020202040202040404020404040202020202020202020202020202020202020204020402040404020402040204040402040404020402040204020402040202020402040204040402020402020404040202020202040204020202020204020202020402020402020202020202040404020204040204020204040402020202020202040204040202040204020202020202020402020402020404040202020202020202020202020202020202020202020202020202020202020202020202020203`, img`
. . . . . . . . . . . . . 2 . 2 
. . . . . . . . . . . . . 2 2 2 
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
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
            case "Level_20":
            case "Level15":return tiles.createTilemap(hex`100010000303030303030303030303030307040803020202030203020302020203050a060302030303020202030201020303030303020303030203020302020203030303030202020302030203020302030303030303030303030303030303030303030303030303030303030303030303030303030202030302030202020302020203030302030203020302030303020303030303020303020203020303030202020303030203030302030202020302030303030303030303030303030303020202030303030303030303030303030303030303030303030303030303030303030303030302020202030203030202020203020303030303030303030903030303030303`, img`
. . . . . . . . . . . . . 2 . 2 
. . . . . . . . . . . . . 2 2 2 
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
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterSouth0], TileScale.Sixteen);
            case "Level20":
            case "Level20":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "Level_21":
            case "Level17":return tiles.createTilemap(hex`10001000020606060606060606060606060b070c0606060606060606060606060608090a0606010101010101010101010101060606060104040404040404040404010606060601040501010303010105040106060606010401050101010105010401060606060104010105010105010104010606060601040301010505010103040106060606010403010105050101030401060606060104010105010105010104010606060601040105010101010501040106060606010405010103030101050401060606060104040404040404040404010606060601010101010101010101010106060606060606060606060606060606060606060606060606060606060606060606`, img`
. . . . . . . . . . . . . 2 . 2 
. . . . . . . . . . . . . 2 2 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . 2 2 . . 2 2 . . 2 . . 
. . 2 . 2 . 2 2 2 2 . 2 . 2 . . 
. . 2 . 2 2 . 2 2 . 2 2 . 2 . . 
. . 2 . . 2 2 . . 2 2 . . 2 . . 
. . 2 . . 2 2 . . 2 2 . . 2 . . 
. . 2 . 2 2 . 2 2 . 2 2 . 2 . . 
. . 2 . 2 . 2 2 2 2 . 2 . 2 . . 
. . 2 . . 2 2 . . 2 2 . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "Level_0":
            case "Level24":return tiles.createTilemap(hex`1000100007070707070707070707070707070701070202020202020202020202020202020707070707070707070707070707070702020202020202020202020202020207070707070707070707070707070707070702020202020202020202020202020207070707070707070707070707070707020202020202020202020202020202070707070707070707070707070707070707020202020202020202020202020202070707070707070707070707070707070202020202020202020202020202020707070707070707070707070707070707070202020202020202020202020202020707070707070707070707070707050607070707070707070707070707080403`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile4,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "Level_22":
            case "Level_22":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "Schalter":
            case "tile2":return tile2;
            case "Spawn":
            case "tile3":return tile3;
            case "Barrikade":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
