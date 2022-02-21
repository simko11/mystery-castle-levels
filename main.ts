scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    Safe_at_ms = game.runtime()
    NextLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite3, otherSprite) {
    LifeLost()
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
    Safe_at_ms = game.runtime()
    NextLevel()
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
        for (let Wert6 of tiles.getTilesByType(sprites.dungeon.greenOuterEast0)) {
            tiles.setTileAt(Wert6, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert6, false)
        }
        for (let Wert6 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthEast)) {
            tiles.setTileAt(Wert6, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert6, false)
        }
        for (let Wert6 of tiles.getTilesByType(sprites.dungeon.greenOuterSouthWest)) {
            tiles.setTileAt(Wert6, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert6, false)
        }
        for (let Wert6 of tiles.getTilesByType(sprites.dungeon.greenOuterWest1)) {
            tiles.setTileAt(Wert6, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert6, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    LifeLost()
})
function LifeLost () {
    if (game.runtime() - Safe_at_ms > 200) {
        Safe_at_ms = game.runtime()
        info.changeLifeBy(-1)
        Ghost_Speed = 20
        tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
}
function NextLevel () {
    info.changeScoreBy(200)
    Level += 1
    info.changeLifeBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Ghost_Number += 1
    if (Level == 1) {
        tiles.setTilemap(tilemap`Level_1`)
    } else if (Level == 2) {
        tiles.setTilemap(tilemap`Level_2`)
    } else if (Level == 3) {
        tiles.setTilemap(tilemap`Level_3`)
    } else if (Level == 4) {
        tiles.setTilemap(tilemap`Level_4`)
    } else if (Level == 5) {
        tiles.setTilemap(tilemap`Level_5`)
    } else if (Level == 6) {
        tiles.setTilemap(tilemap`Level_6`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
    Ghost_Speed = 20
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    Safe_at_ms = game.runtime()
    NextLevel()
})
let Ghost: Sprite = null
let Ghost_Speed = 0
let TileX = 0
let TileY = 0
let Safe_at_ms = 0
let Level = 0
let Hero: Sprite = null
Hero = sprites.create(assets.image`Normal`, SpriteKind.Player)
controller.moveSprite(Hero)
Hero.setBounceOnWall(true)
scene.cameraFollowSprite(Hero)
info.setLife(2)
Level = 4
Safe_at_ms = 0
info.setScore(-200)
let Ghost_Number = 1
NextLevel()
game.onUpdateInterval(10000, function () {
    for (let index = 0; index < Ghost_Number; index++) {
        Ghost = sprites.create(assets.image`skellyFront`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Ghost, sprites.dungeon.greenOuterNorth2)
        Ghost.follow(Hero, Ghost_Speed)
    }
    Ghost_Speed += 5
})
