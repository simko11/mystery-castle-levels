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
    for Wert in sprites.all_of_kind(SpriteKind.enemy):
        if abs(Hero.x - Wert.x) < 28 and abs(Hero.y - Wert.y) < 28:
            Hero.set_image(assets.image("""
                Attack Left
            """))
            pause(100)
            Wert.destroy()
            info.change_score_by(5)
    Hero.set_image(assets.image("""
        Normal
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    global Safe_at_ms
    Safe_at_ms = game.runtime()
    NextLevel()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile2)

def on_overlap_tile3(sprite22, location22):
    info.change_score_by(50)
    tiles.set_tile_at(location22, sprites.dungeon.dark_ground_center)
    if len(tiles.get_tiles_by_type(sprites.dungeon.chest_closed)) == 0:
        for Wert2 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north_west):
            tiles.set_tile_at(Wert2, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert2, False)
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
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location3):
    LifeLost()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
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
    info.change_score_by(200)
    Level += 1
    info.change_life_by(1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
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
    else:
        game.over(True)
    tiles.place_on_random_tile(Hero, sprites.dungeon.collectible_insignia)
    Ghost_Speed = 20

def on_overlap_tile5(sprite5, location4):
    global Safe_at_ms
    Safe_at_ms = game.runtime()
    NextLevel()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_south,
    on_overlap_tile5)

Ghost: Sprite = None
Ghost_Speed = 0
TileX = 0
TileY = 0
Safe_at_ms = 0
Level = 0
Hero: Sprite = None
Hero = sprites.create(assets.image("""
    Normal
"""), SpriteKind.player)
controller.move_sprite(Hero)
Hero.set_bounce_on_wall(True)
scene.camera_follow_sprite(Hero)
info.set_life(2)
Level = 4
Safe_at_ms = 0
info.set_score(-200)
Ghost_Number = 1
NextLevel()

def on_update_interval():
    global Ghost, Ghost_Speed
    for index in range(Ghost_Number):
        Ghost = sprites.create(assets.image("""
            skellyFront
        """), SpriteKind.enemy)
        tiles.place_on_random_tile(Ghost, sprites.dungeon.green_outer_north2)
        Ghost.follow(Hero, Ghost_Speed)
    Ghost_Speed += 5
game.on_update_interval(10000, on_update_interval)
