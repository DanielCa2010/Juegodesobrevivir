enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const aliado = SpriteKind.create()
    export const aliado2 = SpriteKind.create()
    export const proyectil2 = SpriteKind.create()
}
info.onCountdownEnd(function () {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.aliado2, function (sprite, otherSprite) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), effects.fire, 500)
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 f f . . . . . 
        . . . 2 2 2 2 2 2 f f . . . . . 
        . . . 2 2 2 2 2 2 f f . . . . . 
        . . . 2 2 2 2 2 2 f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 0)
})
let projectile: Sprite = null
game.splash("SOBREVIVE", "LA MISIÓN DEL JUEGO ES QUE PLAYER 2 SOBREVIVA 60 SEGUNDOS")
tiles.setCurrentTilemap(tilemap`nivel2`)
info.startCountdown(60)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 2 d d 2 d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 2 2 2 2 d d . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 . . . . 1 1 . . . . 
    . . . . 1 1 . . . . 1 1 . . . . 
    . . . 1 . . . . . . . . 1 . . . 
    `, SpriteKind.aliado))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 7 1 1 1 7 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 2 2 2 2 2 2 1 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 . . . . 9 9 . . . . 
    . . . . 9 9 . . . . 9 9 . . . . 
    . . . 1 . . . . . . . . 1 . . . 
    `, SpriteKind.aliado2))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(7, 9)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(146, 107)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
