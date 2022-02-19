sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite3, otherSprite) {
    info.changeLifeBy(-1)
    Ghost_Speed = 20
    tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
    for (let Wert16 of sprites.allOfKind(SpriteKind.Enemy)) {
        Wert16.destroy()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    TileY = Math.trunc(Hero.y / 16)
    TileX = Math.trunc(Hero.x / 16)
    if (Hero.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Right`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX + 1, TileY), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX + 1, TileY), false)
    } else if (Hero.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Left`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX - 1, TileY), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX - 1, TileY), false)
    } else if (Hero.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Up`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX, TileY + -1), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX, TileY + -1), false)
    } else if (Hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Down`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX, TileY - -1), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX, TileY - -1), false)
    }
    for (let Wert of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.abs(Hero.x - Wert.x) < 28 && Math.abs(Hero.y - Wert.y) < 28) {
            Hero.setImage(assets.image`Attack Left`)
            pause(100)
            Wert.destroy()
            info.changeScoreBy(5)
        }
    }
    Hero.setImage(assets.image`Normal`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite2, location2) {
    info.changeScoreBy(50)
    tiles.setTileAt(location2, sprites.dungeon.darkGroundCenter)
    if (tiles.getTilesByType(sprites.dungeon.chestClosed).length == 0) {
        for (let Wert2 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthWest)) {
            tiles.setTileAt(Wert2, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert2, false)
        }
        for (let Wert3 of tiles.getTilesByType(sprites.dungeon.greenOuterWest0)) {
            tiles.setTileAt(Wert3, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert3, false)
        }
        for (let Wert4 of tiles.getTilesByType(sprites.dungeon.greenOuterNorth0)) {
            tiles.setTileAt(Wert4, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert4, false)
        }
        for (let Wert5 of tiles.getTilesByType(sprites.dungeon.greenOuterSouth0)) {
            tiles.setTileAt(Wert5, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert5, false)
        }
        for (let Wert6 of tiles.getTilesByType(sprites.dungeon.greenOuterSouthEast)) {
            tiles.setTileAt(Wert6, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert6, false)
        }
        for (let Wert7 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthEast)) {
            tiles.setTileAt(Wert7, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert7, false)
        }
        for (let Wert8 of tiles.getTilesByType(sprites.dungeon.greenOuterEast1)) {
            tiles.setTileAt(Wert8, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert8, false)
        }
        for (let Wert9 of tiles.getTilesByType(sprites.dungeon.greenOuterWest1)) {
            tiles.setTileAt(Wert9, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert9, false)
        }
        for (let Wert10 of tiles.getTilesByType(sprites.dungeon.greenOuterNorth1)) {
            tiles.setTileAt(Wert10, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert10, false)
        }
        for (let Wert11 of tiles.getTilesByType(sprites.dungeon.purpleOuterNorthWest)) {
            tiles.setTileAt(Wert11, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert11, false)
        }
        for (let Wert12 of tiles.getTilesByType(sprites.dungeon.purpleOuterWest0)) {
            tiles.setTileAt(Wert12, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert12, false)
        }
        for (let Wert13 of tiles.getTilesByType(sprites.dungeon.purpleOuterNorth1)) {
            tiles.setTileAt(Wert13, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert13, false)
        }
        for (let Wert14 of tiles.getTilesByType(sprites.dungeon.purpleOuterNorthEast)) {
            tiles.setTileAt(Wert14, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert14, false)
        }
        for (let Wert15 of tiles.getTilesByType(sprites.dungeon.purpleOuterEast0)) {
            tiles.setTileAt(Wert15, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert15, false)
        }
    }
})
function Set_Level (level2: number) {
    if (level2 == 1) {
        tiles.setTilemap(tilemap`Level1`)
    } else if (level2 == 2) {
        tiles.setTilemap(tilemap`Level0`)
    } else {
        game.over(true)
    }
}
function Floor_Tile (level: number) {
    Floor_Tile_Return = 0
    if (level == 1) {
        Floor_Tile_Return = 0
    } else if (level == 2) {
    	
    }
    return 0
}
function NextLevel () {
    info.changeScoreBy(200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Set_Level(2)
}
let Ghost: Sprite = null
let Floor_Tile_Return = 0
let TileX = 0
let TileY = 0
let Ghost_Speed = 0
let Hero: Sprite = null
Hero = sprites.create(assets.image`Normal`, SpriteKind.Player)
controller.moveSprite(Hero)
Hero.setBounceOnWall(true)
scene.cameraFollowSprite(Hero)
tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
info.setLife(3)
Ghost_Speed = 20
Set_Level(1)
forever(function () {
    Ghost = sprites.create(assets.image`skellyFront`, SpriteKind.Enemy)
    Ghost.follow(Hero, Ghost_Speed)
    Ghost_Speed += 5
    pause(10000)
})
