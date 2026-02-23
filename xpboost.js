const XPBoostButtons = [ //The stats of every single xp boost button, also they are found on tab 2.3 ig
    { name: "XPBbutton0", xpBGain: [1, -1], cooldown: 600, unlock: 12 }, //0.1-10m, level 100
    { name: "XPBbutton1", xpBGain: [2.5, -1], cooldown: 1800, unlock: 13 }, //0.25-30m, level 150
    
]

function xpBButton(x) {
    game.xpBoost.amount = addBig(game.xpBoost.amount, calculateXPBGain(x)) //Adds your xpboost
    game.xpBoost.buttonCooldowns[x] = XPBoostButtons[x].cooldown / game.xpBoost.cooldown //Sets the xp button cooldown to the required time
    game.player.buttonClicks += 1
}

function calculateXPBGain(x) { //You insert this command with the desired xp amount and it returns the gain after multipliers
    let result = multiplyBig(XPBoostButtons[x].xpBGain, game.xpBoost.multiplier)
    return result
}

function calculateXPBStats() {
    let baseMulti = [1, 0] //This has to be multiplied by each factor, 1 line at a time
    //baseMulti = multiplyBig(baseMulti, (stat))
    game.xpBoost.multiplier = baseMulti
    game.xpBoost.cooldown = 1 //Calculates the cooldown divider, nothing about it for now
    game.xpBoost.effectExpo = [1, 0] //Sets the exponent
    game.xpBoost.effectiveBoost = exponentBig(game.xpBoost.amount, game.xpBoost.effectExpo) //Amount^Expo
}
setInterval(calculateXPBStats, 50)

function XPBoostEffects() {
    let result = ("XPBoost: " + displayBig(game.xpBoost.amount))
    if (compareBig(game.xpBoost.effectExpo, [1, 0])) {result += "<br>Exponent: ^" + displayBig(game.xpBoost.effectExpo)}
    result += "<br>XP Multi: " + displayBig(game.xpBoost.effectiveBoost)
    return result
}