
Ghost_2: Sprite = None
Ghost: Sprite = None
Ghost_Speed = 0
TileX = 0
TileY = 0
Ghost_Number = 0
Safe_at_ms = 0
Level = 0
Hero: Sprite = None
game.show_long_text("Befreie dich aus der Höhle der Geisterskelette! Schlage mit deinem Schwert(A) die Geister und Mauern um sie zu zerstören. Sammle alle Kisten um auf das nächste Level zu kommen. Nach jedem Level bekommst du ein Leben mehr.  Los geht´s",
    DialogLayout.FULL)
Hero = sprites.create(assets.image("""
    Normal
"""), SpriteKind.player)
controller.move_sprite(Hero)
animation.run_image_animation(Hero,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    100,
    True)
Hero.set_bounce_on_wall(True)
scene.camera_follow_sprite(Hero)
info.set_life(2)
Level = 0
Safe_at_ms = 0
info.set_score(-1000)
Ghost_Number = 1
NextLevel()

def on_overlap_tile(sprite, location):
    global Safe_at_ms
    Safe_at_ms = game.runtime()
    NextLevel()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_north,
    on_overlap_tile)

def on_on_overlap(sprite3, otherSprite):
    LifeLost()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_overlap_tile2(sprite6, location5):
    global Safe_at_ms
    Safe_at_ms = game.runtime()
    NextLevel()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_south,
    on_overlap_tile2)

def on_overlap_tile3(sprite5, location4):
    global Safe_at_ms
    Safe_at_ms = game.runtime()
    NextLevel()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile3)

def on_a_pressed():
    global TileY, TileX
    TileY = int(Hero.y / 16)
    TileX = int(Hero.x / 16)
    if Hero.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        myTile
    """)):
        Hero.set_image(assets.image("""
            Attack Right
        """))
        pause(100)
        tiles.set_tile_at(tiles.get_tile_location(TileX + 1, TileY),
            sprites.dungeon.dark_ground_center)
        tiles.set_wall_at(tiles.get_tile_location(TileX + 1, TileY), False)
        info.change_score_by(1)
    elif Hero.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile
    """)):
        Hero.set_image(assets.image("""
            Attack Left
        """))
        pause(100)
        tiles.set_tile_at(tiles.get_tile_location(TileX - 1, TileY),
            sprites.dungeon.dark_ground_center)
        tiles.set_wall_at(tiles.get_tile_location(TileX - 1, TileY), False)
        info.change_score_by(1)
    elif Hero.tile_kind_at(TileDirection.TOP, assets.tile("""
        myTile
    """)):
        Hero.set_image(assets.image("""
            Attack Up
        """))
        pause(100)
        tiles.set_tile_at(tiles.get_tile_location(TileX, TileY + -1),
            sprites.dungeon.dark_ground_center)
        tiles.set_wall_at(tiles.get_tile_location(TileX, TileY + -1), False)
        info.change_score_by(1)
    elif Hero.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile
    """)):
        Hero.set_image(assets.image("""
            Attack Down
        """))
        pause(100)
        tiles.set_tile_at(tiles.get_tile_location(TileX, TileY - -1),
            sprites.dungeon.dark_ground_center)
        tiles.set_wall_at(tiles.get_tile_location(TileX, TileY - -1), False)
        info.change_score_by(1)
    for Wert2 in sprites.all_of_kind(SpriteKind.enemy):
        if abs(Hero.x - Wert2.x) < 28 and abs(Hero.y - Wert2.y) < 28:
            Hero.set_image(assets.image("""
                Attack Left
            """))
            pause(100)
            sprites.change_data_number_by(Wert2, "Life", -1)
            if sprites.read_data_number(Wert2, "Life") == 0:
                Wert2.destroy()
            info.change_score_by(50)
    Hero.set_image(assets.image("""
        Normal
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile4(sprite22, location22):
    info.change_score_by(250)
    tiles.set_tile_at(location22, sprites.dungeon.dark_ground_center)
    if len(tiles.get_tiles_by_type(sprites.dungeon.chest_closed)) == 0:
        for Wert22 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north_west):
            tiles.set_tile_at(Wert22, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert22, False)
        for Wert3 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_west0):
            tiles.set_tile_at(Wert3, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert3, False)
        for Wert4 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north0):
            tiles.set_tile_at(Wert4, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert4, False)
        for Wert5 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_south0):
            tiles.set_tile_at(Wert5, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert5, False)
        for Wert6 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_south_east):
            tiles.set_tile_at(Wert6, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert6, False)
        for Wert62 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_east0):
            tiles.set_tile_at(Wert62, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert62, False)
        for Wert63 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north_east):
            tiles.set_tile_at(Wert63, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert63, False)
        for Wert64 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_south_west):
            tiles.set_tile_at(Wert64, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert64, False)
        for Wert65 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_west1):
            tiles.set_tile_at(Wert65, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert65, False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile4)

def LifeLost():
    global Safe_at_ms, Ghost_Speed
    if game.runtime() - Safe_at_ms > 200:
        Safe_at_ms = game.runtime()
        info.change_life_by(-1)
        Ghost_Speed = 20
        tiles.place_on_random_tile(Hero, sprites.dungeon.collectible_insignia)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
def NextLevel():
    global Level, Ghost_Number, Ghost_Speed
    info.change_score_by(1000)
    Level += 1
    info.change_life_by(1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    if Ghost_Number < 5:
        Ghost_Number += 1
    if Level == 1:
        tiles.set_tilemap(tilemap("""
            Level_1
        """))
    elif Level == 2:
        tiles.set_tilemap(tilemap("""
            Level_2
        """))
    elif Level == 3:
        tiles.set_tilemap(tilemap("""
            Level_3
        """))
    elif Level == 4:
        tiles.set_tilemap(tilemap("""
            Level_4
        """))
    elif Level == 5:
        tiles.set_tilemap(tilemap("""
            Level_5
        """))
    elif Level == 6:
        tiles.set_tilemap(tilemap("""
            Level_6
        """))
    elif Level == 7:
        tiles.set_current_tilemap(tilemap("""
            Level_7
        """))
    elif Level == 8:
        tiles.set_current_tilemap(tilemap("""
            Level_8
        """))
    elif Level == 9:
        tiles.set_current_tilemap(tilemap("""
            Level_9
        """))
    elif Level == 10:
        tiles.set_current_tilemap(tilemap("""
            Level_10
        """))
    elif Level == 11:
        tiles.set_current_tilemap(tilemap("""
            Level_11
        """))
    elif Level == 12:
        tiles.set_current_tilemap(tilemap("""
            Level_12
        """))
    elif Level == 13:
        tiles.set_current_tilemap(tilemap("""
            Level_13
        """))
    elif Level == 14:
        tiles.set_current_tilemap(tilemap("""
            Level_14
        """))
    elif Level == 15:
        tiles.set_current_tilemap(tilemap("""
            Level_15
        """))
    elif Level == 16:
        tiles.set_current_tilemap(tilemap("""
            Level_16
        """))
    elif Level == 17:
        tiles.set_current_tilemap(tilemap("""
            Level_17
        """))
    elif Level == 18:
        tiles.set_current_tilemap(tilemap("""
            Level_18
        """))
    elif Level == 19:
        tiles.set_current_tilemap(tilemap("""
            Level_19
        """))
    elif Level == 20:
        tiles.set_current_tilemap(tilemap("""
            Level_20
        """))
    elif Level == 21:
        tiles.set_current_tilemap(tilemap("""
            Level_21
        """))
    elif Level == 22:
        tiles.set_current_tilemap(tilemap("""Level_0"""))
    else:
        for index in range(info.life()):
            info.change_score_by(10000)
        game.over(True)
    tiles.place_on_random_tile(Hero, sprites.dungeon.collectible_insignia)
    Ghost_Speed = 20

def on_overlap_tile5(sprite2, location2):
    if controller.B.is_pressed():
        for Wert in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north2):
            tiles.set_tile_at(Wert, sprites.dungeon.chest_closed)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Schalter
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite4, location3):
    LifeLost()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile6)

def on_update_interval():
    global Ghost, Ghost_Speed
    if len(tiles.get_tiles_by_type(sprites.dungeon.green_outer_north2)) > 0:
        for index2 in range(Ghost_Number):
            Ghost = sprites.create(assets.image("""
                skellyFront
            """), SpriteKind.enemy)
            animation.run_image_animation(Ghost,
                [img("""
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
                    """),
                    img("""
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
                    """),
                    img("""
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
                    """),
                    img("""
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
                    """)],
                100,
                True)
            tiles.place_on_random_tile(Ghost, sprites.dungeon.green_outer_north2)
            Ghost.follow(Hero, Ghost_Speed)
            sprites.set_data_number(Ghost, "Life", 1)
        Ghost_Speed += 5
game.on_update_interval(10000, on_update_interval)

def on_update_interval2():
    global Ghost_2, Ghost_Speed
    if len(tiles.get_tiles_by_type(assets.tile("""
        Spawn
    """))) > 0:
        Ghost_2 = sprites.create(assets.image("""
            skellyFront0
        """), SpriteKind.enemy)
        animation.run_image_animation(Ghost_2, assets.animation("""
            enemy_2
        """), 100, True)
        tiles.place_on_random_tile(Ghost_2, assets.tile("""
            Spawn
        """))
        Ghost_2.follow(Hero, Ghost_Speed)
        sprites.set_data_number(Ghost_2, "Life", 3)
        Ghost_Speed += 5
game.on_update_interval(10000, on_update_interval2)
