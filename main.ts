namespace SpriteKind {
    export const Jonarbuckle = SpriteKind.create()
    export const jude = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
        . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jonarbuckle, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.spray, 500)
    Oj.destroy()
    if (game.ask("Are you OJ gang")) {
        game.splash("Wow OJ gang, cringe")
    } else {
        game.splash("Oh, then why drink it")
    }
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 2 2 2 2 2 2 1 1 2 1 2 
        2 1 2 1 2 1 1 1 1 1 1 2 1 2 1 2 
        2 1 2 1 2 1 1 2 2 1 1 2 1 2 1 2 
        2 1 2 1 2 1 2 1 1 2 1 2 1 2 1 2 
        2 1 2 1 2 1 2 1 1 2 1 2 1 2 1 2 
        2 1 2 1 2 1 1 2 2 1 1 2 1 2 1 2 
        2 1 2 1 2 1 1 1 1 1 1 2 1 2 1 2 
        2 1 2 1 1 2 2 2 2 2 2 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `, mySprite, 200, 0)
    music.powerUp.play()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    ENSHIP_BOSS.destroy()
    ENSHIP_BOSS.destroy(effects.halo, 2000)
    info.changeScoreBy(500)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(3)
    game.splash("Congarats on surviving a minute")
})
info.onLifeZero(function () {
    if (game.ask("Do you want a pro tip")) {
        game.splash("Pro Tip: don't die")
    } else {
        game.splash("Fine be that way")
    }
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    heal.destroy()
    heal.destroy(effects.fire, 2000)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.warmRadial, 500)
    info.changeScoreBy(100)
    ENSHIP_BOSS.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let ENSHIP: Sprite = null
let ENSHIP_JUDE: Sprite = null
let heal: Sprite = null
let ENSHIP_BOSS: Sprite = null
let Oj: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 7 7 7 7 7 f f f f f f 
    f f f f 7 f f f f f 7 f f f f f 
    f f f f 7 f f f f f 7 f f f f f 
    f f f f 7 7 7 7 7 7 7 f f f f f 
    f f f f 7 f f f f f 7 f f f f f 
    f f f f 7 f f f f f 7 f f f f f 
    f f f f 7 f f f f f 7 f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(7)
for (let index = 0; index < 1; index++) {
    game.splash("SCILLER")
}
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 . . . . . . . . . . . . 
    . . 2 2 2 . . . . . . . . . . . 
    . . . 2 2 8 8 8 8 8 8 8 . . . . 
    . . 2 8 8 8 8 8 8 1 f f 8 . . . 
    . . 2 2 8 8 8 8 8 f 1 f f 8 . . 
    . . 2 2 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 2 2 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 2 8 8 8 8 8 8 2 8 8 2 . . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    ENSHIP_JUDE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . 2 2 8 . . . . . . 
        . . . . . . 2 f 2 2 . . . . . . 
        . . . . . . 2 2 8 2 . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ENSHIP_JUDE.vx = -5
    ENSHIP_JUDE.y = randint(10, scene.screenHeight() - 10)
    ENSHIP_JUDE.x = scene.screenWidth()
})
game.onUpdateInterval(200000, function () {
    ENSHIP_JUDE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 a 2 a a 2 a 8 . . . . 
        . . . . 8 a 4 2 2 4 a 8 . . . . 
        . 8 8 8 8 a 2 a a 2 a 8 8 8 8 8 
        . 8 2 2 2 8 8 8 2 8 8 8 2 2 2 8 
        . 8 8 8 2 2 2 2 2 2 2 2 2 8 8 8 
        . . . 8 8 8 8 8 2 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 2 8 8 8 8 8 8 . 
        . 8 2 2 2 2 2 2 2 2 2 2 2 2 8 . 
        . 8 2 8 8 8 8 8 8 8 8 8 8 2 8 . 
        . 8 2 8 . . . . . . . . 8 2 8 . 
        . 8 8 8 . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.jude)
    ENSHIP_JUDE.x = scene.screenWidth()
    ENSHIP_JUDE.vx = -20
    ENSHIP_JUDE.y = randint(10, scene.screenHeight() - 10)
    info.startCountdown(60)
})
game.onUpdateInterval(1500, function () {
    ENSHIP = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 8 8 . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . 2 2 2 2 2 2 2 8 8 . . 
        . . . . 2 f f 1 2 2 2 2 2 2 8 . 
        . . . 2 f f 1 f 2 2 2 2 2 8 8 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 8 8 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 8 8 . 
        . . . . 8 2 2 8 2 2 2 2 2 2 8 . 
        . . . . 8 8 8 8 . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        `, SpriteKind.Enemy)
    ENSHIP.x = scene.screenWidth()
    ENSHIP.vx = -20
    ENSHIP.y = randint(10, scene.screenHeight() - 10)
})
game.onUpdateInterval(30000, function () {
    Oj = sprites.create(img`
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 
        4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
        1 1 4 4 4 4 4 1 1 4 4 4 4 4 1 1 
        1 4 1 1 1 1 1 4 1 1 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 1 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 1 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 1 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 1 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 4 1 1 1 1 4 1 
        1 4 1 1 1 1 1 4 1 4 1 1 1 1 4 1 
        1 1 4 4 4 4 4 1 1 4 4 4 4 4 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Jonarbuckle)
    Oj.x = scene.screenWidth()
    Oj.vx = -20
    Oj.y = randint(10, scene.screenHeight() - 10)
})
game.onUpdateInterval(30000, function () {
    heal = sprites.create(img`
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 9 9 9 9 9 9 9 9 9 9 9 9 1 . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 1 9 . 
        . 1 1 1 1 1 1 1 1 1 9 1 9 1 1 . 
        . 1 1 9 1 9 1 1 9 1 9 1 9 1 1 . 
        . 1 9 1 9 1 9 1 1 1 9 1 9 1 9 . 
        . 1 9 1 9 1 9 1 9 1 9 1 9 9 1 . 
        . 1 9 1 1 1 9 1 9 1 9 1 9 1 9 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        `, SpriteKind.Food)
    heal.x = scene.screenWidth()
    heal.vx = -20
    heal.y = randint(10, scene.screenHeight() - 10)
})
game.onUpdateInterval(10000, function () {
    ENSHIP_BOSS = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 f 2 2 2 . . . . . . 
        . . . . 2 f d 2 2 2 2 . . . . . 
        . . . 2 f d f 2 2 2 . . . . . . 
        . . 2 f d f d 2 2 2 2 . . . . . 
        . . . 2 f d f 2 2 2 . . . . . . 
        . . . . 2 f f 2 2 2 2 . . . . . 
        . . . . . 2 f 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ENSHIP_BOSS.x = scene.screenWidth()
    ENSHIP_BOSS.vx = -100
    ENSHIP_BOSS.y = randint(10, scene.screenHeight() - 10)
})
