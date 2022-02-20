def on_on_overlap(sprite3, otherSprite):
    global Ghost_Speed
    info.change_life_by(-1)
    Ghost_Speed = 20
    tiles.place_on_random_tile(Hero, sprites.dungeon.collectible_insignia)
    for Wert16 in sprites.all_of_kind(SpriteKind.enemy):
        Wert16.destroy()
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

def on_overlap_tile(sprite, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    info.change_score_by(50)
    tiles.set_tile_at(location2, sprites.dungeon.dark_ground_center)
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
        for Wert7 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north_east):
            tiles.set_tile_at(Wert7, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert7, False)
        for Wert8 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_east1):
            tiles.set_tile_at(Wert8, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert8, False)
        for Wert9 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_west1):
            tiles.set_tile_at(Wert9, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert9, False)
        for Wert10 in tiles.get_tiles_by_type(sprites.dungeon.green_outer_north1):
            tiles.set_tile_at(Wert10, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert10, False)
        for Wert11 in tiles.get_tiles_by_type(sprites.dungeon.purple_outer_north_west):
            tiles.set_tile_at(Wert11, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert11, False)
        for Wert12 in tiles.get_tiles_by_type(sprites.dungeon.purple_outer_west0):
            tiles.set_tile_at(Wert12, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert12, False)
        for Wert13 in tiles.get_tiles_by_type(sprites.dungeon.purple_outer_north1):
            tiles.set_tile_at(Wert13, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert13, False)
        for Wert14 in tiles.get_tiles_by_type(sprites.dungeon.purple_outer_north_east):
            tiles.set_tile_at(Wert14, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert14, False)
        for Wert15 in tiles.get_tiles_by_type(sprites.dungeon.purple_outer_east0):
            tiles.set_tile_at(Wert15, sprites.dungeon.dark_ground_center)
            tiles.set_wall_at(Wert15, False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile2)

def Set_Level(level2: number):
    if level2 == 1:
        tiles.set_tilemap(tilemap("""
            Level1
        """))
    elif level2 == 2:
        tiles.set_tilemap(tilemap("""
            Level0
        """))
    else:
        game.over(True)
def Floor_Tile(level: number):
    global Floor_Tile_Return
    Floor_Tile_Return = 0
    if level == 1:
        Floor_Tile_Return = 0
    elif level == 2:
        pass
    return 0
def NextLevel():
    info.change_score_by(200)
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    Set_Level(2)
Ghost: Sprite = None
Floor_Tile_Return = 0
TileX = 0
TileY = 0
Ghost_Speed = 0
Hero: Sprite = None
Hero = sprites.create(assets.image("""
    Normal
"""), SpriteKind.player)
controller.move_sprite(Hero)
Hero.set_bounce_on_wall(True)
scene.camera_follow_sprite(Hero)
tiles.place_on_random_tile(Hero, sprites.dungeon.collectible_insignia)
info.set_life(3)
Ghost_Speed = 20
Set_Level(1)

def on_forever():
    global Ghost, Ghost_Speed
    Ghost = sprites.create(assets.image("""
        skellyFront
    """), SpriteKind.enemy)
    Ghost.follow(Hero, Ghost_Speed)
    Ghost_Speed += 5
    pause(10000)
forever(on_forever)
