scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
let fisk = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fisk)
scene.cameraFollowSprite(fisk)
game.setGameOverEffect(true, effects.smiles)
game.setGameOverEffect(false, effects.slash)
