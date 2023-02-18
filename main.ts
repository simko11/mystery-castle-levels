scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    Safe_at_ms = game.runtime()
    NextLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite3, otherSprite) {
    LifeLost()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite6, location5) {
    Safe_at_ms = game.runtime()
    NextLevel()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite5, location4) {
    Safe_at_ms = game.runtime()
    NextLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    TileY = Math.trunc(Hero.y / 16)
    TileX = Math.trunc(Hero.x / 16)
    if (Hero.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Right`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX + 1, TileY), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX + 1, TileY), false)
        info.changeScoreBy(1)
    } else if (Hero.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Left`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX - 1, TileY), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX - 1, TileY), false)
        info.changeScoreBy(1)
    } else if (Hero.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Up`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX, TileY + -1), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX, TileY + -1), false)
        info.changeScoreBy(1)
    } else if (Hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        Hero.setImage(assets.image`Attack Down`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(TileX, TileY - -1), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.getTileLocation(TileX, TileY - -1), false)
        info.changeScoreBy(1)
    }
    for (let Wert2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.abs(Hero.x - Wert2.x) < 28 && Math.abs(Hero.y - Wert2.y) < 28) {
            Hero.setImage(assets.image`Attack Left`)
            pause(100)
            sprites.changeDataNumberBy(Wert2, "Life", -1)
            if (sprites.readDataNumber(Wert2, "Life") == 0) {
                Wert2.destroy()
            }
            info.changeScoreBy(50)
        }
    }
    Hero.setImage(assets.image`Normal`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite22, location22) {
    info.changeScoreBy(250)
    tiles.setTileAt(location22, sprites.dungeon.darkGroundCenter)
    if (tiles.getTilesByType(sprites.dungeon.chestClosed).length == 0) {
        for (let Wert22 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthWest)) {
            tiles.setTileAt(Wert22, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert22, false)
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
        for (let Wert62 of tiles.getTilesByType(sprites.dungeon.greenOuterEast0)) {
            tiles.setTileAt(Wert62, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert62, false)
        }
        for (let Wert63 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthEast)) {
            tiles.setTileAt(Wert63, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert63, false)
        }
        for (let Wert64 of tiles.getTilesByType(sprites.dungeon.greenOuterSouthWest)) {
            tiles.setTileAt(Wert64, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert64, false)
        }
        for (let Wert65 of tiles.getTilesByType(sprites.dungeon.greenOuterWest1)) {
            tiles.setTileAt(Wert65, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(Wert65, false)
        }
    }
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
    info.changeScoreBy(1000)
    Level += 1
    info.changeLifeBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (Ghost_Number < 5) {
        Ghost_Number += 1
    }
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
    } else if (Level == 7) {
        tiles.setCurrentTilemap(tilemap`Level_7`)
    } else if (Level == 8) {
        tiles.setCurrentTilemap(tilemap`Level_8`)
    } else if (Level == 9) {
        tiles.setCurrentTilemap(tilemap`Level_9`)
    } else if (Level == 10) {
        tiles.setCurrentTilemap(tilemap`Level_10`)
    } else if (Level == 11) {
        tiles.setCurrentTilemap(tilemap`Level_11`)
    } else if (Level == 12) {
        tiles.setCurrentTilemap(tilemap`Level_12`)
    } else if (Level == 13) {
        tiles.setCurrentTilemap(tilemap`Level_13`)
    } else if (Level == 14) {
        tiles.setCurrentTilemap(tilemap`Level_14`)
    } else if (Level == 15) {
        tiles.setCurrentTilemap(tilemap`Level_15`)
    } else if (Level == 16) {
        tiles.setCurrentTilemap(tilemap`Level_16`)
    } else if (Level == 17) {
        tiles.setCurrentTilemap(tilemap`Level_17`)
    } else if (Level == 18) {
        tiles.setCurrentTilemap(tilemap`Level_18`)
    } else if (Level == 19) {
        tiles.setCurrentTilemap(tilemap`Level_19`)
    } else if (Level == 20) {
        tiles.setCurrentTilemap(tilemap`Level_20`)
    } else if (Level == 21) {
        tiles.setCurrentTilemap(tilemap`Level_21`)
    } else if (Level == 22) {
        tiles.setCurrentTilemap(tilemap`Level_22`)
    } else {
        for (let index = 0; index < info.life(); index++) {
            info.changeScoreBy(10000)
        }
        game.over(true)
    }
    tiles.placeOnRandomTile(Hero, sprites.dungeon.collectibleInsignia)
    Ghost_Speed = 20
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Schalter`, function (sprite2, location2) {
    if (controller.B.isPressed()) {
        for (let Wert of tiles.getTilesByType(sprites.dungeon.greenOuterNorth2)) {
            tiles.setTileAt(Wert, sprites.dungeon.chestClosed)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite4, location3) {
    LifeLost()
})
let Ghost_2: Sprite = null
let Ghost: Sprite = null
let Ghost_Speed = 0
let TileX = 0
let TileY = 0
let Ghost_Number = 0
let Safe_at_ms = 0
let Level = 0
let Hero: Sprite = null
game.showLongText("Befreie dich aus der Höhle der Geisterskelette! Schlage mit deinem Schwert(A) die Geister und Mauern um sie zu zerstören. Sammle alle Kisten um auf das nächste Level zu kommen. Nach jedem Level bekommst du ein Leben mehr.  Los geht´s", DialogLayout.Full)
Hero = sprites.create(assets.image`Normal`, SpriteKind.Player)
controller.moveSprite(Hero)
animation.runImageAnimation(
Hero,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f e . . 
    f b f e f 2 2 2 2 e d d 4 e . . 
    f b f 4 f 2 2 2 2 e d d e . . . 
    f c f . f 4 4 5 5 f e e . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f f f f d d d 4 e f . . . 
    . . f d d d d f 2 2 2 f e f . . 
    . . f b b b b f 2 2 2 f 4 e . . 
    . . f b b b b f 5 4 4 f . . . . 
    . . . f c c f f f f f f . . . . 
    . . . . f f . . . f f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f f . 
    . . e f e 4 d d d d 4 e f f d f 
    . . e 4 d d e 2 2 2 2 f e f b f 
    . . . e d d e 2 2 2 2 f 4 f b f 
    . . . . e e f 5 5 4 4 f . f c f 
    . . . . . f f f f f f f . f f . 
    . . . . . . . . . f f f . . . . 
    `],
100,
true
)
Hero.setBounceOnWall(true)
scene.cameraFollowSprite(Hero)
info.setLife(2)
Level = 0
Safe_at_ms = 0
info.setScore(-1000)
Ghost_Number = 1
NextLevel()
game.onUpdateInterval(10000, function () {
    if (tiles.getTilesByType(sprites.dungeon.greenOuterNorth2).length > 0) {
        for (let index = 0; index < Ghost_Number; index++) {
            Ghost = sprites.create(assets.image`skellyFront`, SpriteKind.Enemy)
            animation.runImageAnimation(
            Ghost,
            [img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111ffff.....
                ......fffcdb1bc111cf....
                ....fc111cbfbf1b1b1f....
                ....f1b1b1ffffbfbfbf....
                ....fbfbfffffff.........
                .........fffff..........
                ..........fff...........
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .....ffff111111bf.......
                ....fc111cdb1bdfff......
                ....f1b1bcbfbfc111cf....
                ....fbfbfbffff1b1b1f....
                .........fffffffbfbf....
                ..........fffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            true
            )
            tiles.placeOnRandomTile(Ghost, sprites.dungeon.greenOuterNorth2)
            Ghost.follow(Hero, Ghost_Speed)
            sprites.setDataNumber(Ghost, "Life", 1)
        }
        Ghost_Speed += 5
    }
})
game.onUpdateInterval(10000, function () {
    if (tiles.getTilesByType(assets.tile`Spawn`).length > 0) {
        Ghost_2 = sprites.create(assets.image`skellyFront0`, SpriteKind.Enemy)
        animation.runImageAnimation(
        Ghost_2,
        assets.animation`enemy_2`,
        100,
        true
        )
        tiles.placeOnRandomTile(Ghost_2, assets.tile`Spawn`)
        Ghost_2.follow(Hero, Ghost_Speed)
        sprites.setDataNumber(Ghost_2, "Life", 3)
        Ghost_Speed += 5
    }
})
