function collectToken() {
    game.tokens.amount += game.tokens.bankAmount
    game.tokens.bankAmount = 0
    game.tokens.ticks = 0
}

function addTicks(x) {
    let roundAmount = 0
    if (Math.random() < x % 1) {
        roundAmount = Math.ceil(x)
    }
    else {
        roundAmount = Math.floor(x)
    }
    game.tokens.ticks += roundAmount
    for (let i = 1; i <= roundAmount; i++) {
        game.tokens.bankAmount += game.tokens.gain
        calculateTokenGain()
    }
}

function calculateTokenGain() {
    let baseAmount = 0.1
    baseAmount *= game.tokenBonuses.tokens
    baseAmount *= game.dailyBonuses.tokenBonus
    if (!!pets[game.pets.equipped].tokenMulti) {baseAmount *= pets[game.pets.equipped].tokenMulti}
    if (game.tokens.bankAmount > 1) {baseAmount = (baseAmount/game.tokens.bankAmount)}
    if (game.tokens.bankAmount >= 5 && game.tokens.upgrades[8] > 0) {baseAmount *= (1 + Math.log(game.tokens.ticks))}
    game.tokens.gain = baseAmount
}
setInterval(calculateTokenGain, 50) //Runs 20 times a sec

function showTokenCost(x) {
    let result = ""
    if (game.tokens.upgrades[x] == tokenUpgrades[x].levels) {result += "Maxed"}
    else {
        result += (numberShort(game.tokens.amount) + " / " + numberShort(tokenUpgrades[x].baseCost * (tokenUpgrades[x].costScaling ** game.tokens.upgrades[x])))
        if (tokenUpgrades[x].costScaling != 1) {result += "; Cost scaling: x" + numberShort(tokenUpgrades[x].costScaling)}
    }
    return result
}

function buyTokenUpgrade(x) {
    if (game.tokens.upgrades[x] < tokenUpgrades[x].levels) {
        let buyableLevels = 0
        if (tokenUpgrades[x].costScaling == 1) {
            buyableLevels = Math.min(Math.floor(game.tokens.amount/tokenUpgrades[x].baseCost), tokenUpgrades[x].levels - game.tokens.upgrades[x])
        }
        else {
            buyableLevels = purchasableTerms(x)
        }
        if (buyableLevels >= 1) {
            game.tokens.amount -= sumTerms(x, game.tokens.upgrades[x], buyableLevels)
            game.tokens.upgrades[x] += buyableLevels
        }
    }
}

function sumTerms(x, m, n) { //Takes token upgrade x base cost + base scaling and calculates the sum from m until (m+n), arreglar
    let s = 0
    if (tokenUpgrades[x].costScaling == 1) {
        s = tokenUpgrades[x].baseCost * n
    }
    else {
        s = tokenUpgrades[x].baseCost * ((tokenUpgrades[x].costScaling ** (n+m) - 1) / (tokenUpgrades[x].costScaling - 1))
        s -= tokenUpgrades[x].baseCost * ((tokenUpgrades[x].costScaling ** m - 1) / (tokenUpgrades[x].costScaling - 1))
    }
    return s
}

function purchasableTerms(x) { //Takes upgrade id x, returns how many you can buy
    let k = Math.floor(Math.log(1 + (game.tokens.amount * (tokenUpgrades[x].costScaling - 1)) / (tokenUpgrades[x].baseCost * tokenUpgrades[x].costScaling ** game.tokens.upgrades[x]))/Math.log(tokenUpgrades[x].costScaling))
    console.log(k)
    k = Math.min(k, tokenUpgrades[x].levels - game.tokens.upgrades[x])
    console.log(k)
    return k
}

function tokenUpgradeAvailable(x) {
    let result = false
    if (game.tokens.upgrades[x] < tokenUpgrades[x].levels && game.player.unlocks >= tokenUpgrades[x].unlock) {
        if (tokenUpgrades[x].reqs == 0) {result = true}
        else {
            let completed = true
            let list = tokenUpgrades[x].recList
            for (let i = 0; i < list.length; i++) {
                if (game.tokens.upgrades[list[i]] < tokenUpgrades[list[i]].levels) {
                    completed = false
                }
            }
            result = completed
        }
    }
    return result
}

function calculateTokenUpgradeBoosts() {
    let baseXP = [1, 0]
    baseXP = multiplyBig(baseXP, 1 + 0.1 * game.tokens.upgrades[1])
    baseXP = multiplyBig(baseXP, 1 + 0.25 * game.tokens.upgrades[5])
    baseXP = multiplyBig(baseXP, 1 + game.tokens.upgrades[9])
    game.tokenBonuses.xp = baseXP
    let baseXPcooldown = 1
    baseXPcooldown *= (1 + 0.05 * game.tokens.upgrades[2])
    game.tokenBonuses.xpCooldown = baseXPcooldown
    let baseXPBoost = [1, 0]
    baseXPBoost = multiplyBig(baseXPBoost, 1 + 0.1 * game.tokens.upgrades[3])
    baseXPBoost = multiplyBig(baseXPBoost, 1 + 0.25 * game.tokens.upgrades[6])
    baseXPBoost = multiplyBig(baseXPBoost, 1 + 0.75 * game.tokens.upgrades[10])
    game.tokenBonuses.xpBoost = baseXPBoost
    let baseTokens = 1
    baseTokens *= (1 + 0.25 * game.tokens.upgrades[4])
    game.tokenBonuses.tokens = baseTokens
    let baseLuck = 1
    baseLuck *= (1 + 0.1 * game.tokens.upgrades[7])
    baseLuck *= (1 + 0.1 * game.tokens.upgrades[10])
    game.tokenBonuses.luck = baseLuck
}
setInterval(calculateTokenUpgradeBoosts, 50)