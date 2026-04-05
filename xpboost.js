const XPBoostButtons = [ //The stats of every single xp boost button, also they are found on tab 2.3 ig
    { name: "XPBbutton0", xpBGain: [1, -1], cooldown: 600, unlock: 12 }, //0.1-10m, level 100
    { name: "XPBbutton1", xpBGain: [2.5, -1], cooldown: 1800, unlock: 13 }, //0.25-30m, level 150
    { name: "XPBbutton2", xpBGain: [5, -1], cooldown: 3600, unlock: 16 }, //0.5-1h, level 300
    { name: "XPBbutton3", xpBGain: [1, 0], cooldown: 9000, unlock: 17 }, //1-2.5h, level 400
    { name: "XPBbutton4", xpBGain: [2, 0], cooldown: 19800, unlock: 20 }, //2-5.5m, level 2000
]

function xpBButton(x) {
    if (game.xpBoost.buttonCooldowns[x] == 0) {
        game.xpBoost.amount = addBig(game.xpBoost.amount, calculateXPBGain(x)) //Adds your xpboost
        game.xpBoost.buttonCooldowns[x] = XPBoostButtons[x].cooldown / game.xpBoost.cooldown //Sets the xp button cooldown to the required time
        game.player.buttonClicks += 1
    }
}

function calculateXPBGain(x) { //You insert this command with the desired xp amount and it returns the gain after multipliers
    let result = multiplyBig(XPBoostButtons[x].xpBGain, game.xpBoost.multiplier)
    //result = exponentBig(result, game.xpBoost.expo)
    return result
}

function calculateXPBStats() {
    let baseMulti = [1, 0] //This has to be multiplied by each factor, 1 line at a time
    //baseMulti = multiplyBig(baseMulti, (stat))
    baseMulti = multiplyBig(baseMulti, game.tokenBonuses.xpBoost)
    baseMulti = multiplyBig(baseMulti, game.dailyBonuses.xpBoost)
    game.xpBoost.multiplier = baseMulti
    game.xpBoost.cooldown = 1 //Calculates the cooldown divider, nothing about it for now
    let baseEffectExpo = [1, 0]
    if (game.prestige.reset == true) {baseEffectExpo = multiplyBig(baseEffectExpo, game.prestige.xpBoostNerf)}
    game.xpBoost.effectExpo = baseEffectExpo //Sets the exponent
    game.xpBoost.effectiveBoost = exponentBig(game.xpBoost.amount, game.xpBoost.effectExpo) //Amount^Expo
    let baseExpo = [1, 0]
    game.xpBoost.expo = baseExpo
}
setInterval(calculateXPBStats, 50)

function XPBoostEffects() {
    let result = ("XPBoost: " + displayBig(game.xpBoost.amount))
    if (game.prestige.reset == true) { result += "<br>Effect Expo: ^" + displayBig(game.xpBoost.effectExpo) }
    result += "<br>XP Multi: " + displayBig(game.xpBoost.effectiveBoost) + "<br>"
    if (compareBig(game.xpBoost.multiplier, [1, 0])) { result += "<br>Multiplier: " + displayBig(game.xpBoost.multiplier) }
    if (compareBig(game.xpBoost.expo, [1, 0])) { result += "<br>Exponent: " + displayBig(game.xpBoost.expo) }
    return result
}