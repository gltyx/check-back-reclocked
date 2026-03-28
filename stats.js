function openCloseStatsTab() {
    if (document.getElementById("statsDiv").style.display == "block") {
        document.getElementById("statsDiv").style.display = "none"
        document.getElementById("statsListInner").innerHTML = ""
    }
    else {
        document.getElementById("statsDiv").style.display = "block"
        displayStats()
    }
}

//Adds the squares for all the pets to the pets tab
function displayStats() {
    document.getElementById("statsListInner").innerHTML = ""
    let statsBox = document.createElement("div")
    statsBox.style.display = "inline-block"
    statsBox.style.position = "relative"
    statsBox.style.width = "128px"
    statsBox.style.height = "128px"
    statsBox.style.margin = "8px 0 0 8px"
    statsBox.style.border = "8px solid black"
    statsBox.style.cursor = "pointer"
    statsBox.style.backgroundColor = "#888"
    statsBox.style.backgroundImage = "url('img/halftoneDots.png')"
    statsBox.className += "statsBox"
    statsBoxes = document.getElementsByClassName("statsBox");
    for (let i = 1; i < stats.length; i++) {
        document.getElementById("statsListInner").appendChild(statsBox.cloneNode(true))
        statsBoxes[i - 1].setAttribute("id", i)
        statsBoxes[i - 1].addEventListener('click', function () { if (stats[parseInt(this.id)].unlock <= game.player.unlocks) { showStatInfo(parseInt(this.id)) } })
        if (game.player.unlocks >= stats[i].unlock) { //1st value is red, 2nd green and 3rd blue
            if (i == 4) { statsBoxes[i - 1].innerHTML = "<img src='img/pets/" + game.pets.equipped + ".png' style='width: 128px'>" }
            else if (i == 2) { statsBoxes[i - 1].innerHTML = "<img src='img/statImages/" + i + ".gif' style='width: 128px'>" }
            else { statsBoxes[i - 1].innerHTML = "<img src='img/statImages/" + i + ".png' style='width: 128px'>" }
            statsBoxes[i - 1].style.border = "8px outset #D6AE01"
        }
        else {
            statsBoxes[i - 1].innerHTML = "<img src='img/statImages/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
        }
    }
    j = stats.length - 1
}

function showStatInfo(x) {
    if (x == 0) { document.getElementById("statsInfo").innerHTML = "Hello World" }
    if (x == 1) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Player stats</span><br><br>" + playerStats() }
    if (x == 2) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Credits</span><br><br>" + credits() }
    if (x == 3) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>XP Stats</span><br><br>" + xpStats() }
    if (x == 4) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Pet Stats</span><br><br>" + petStats() }
    if (x == 5) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>XPBoost Stats</span><br><br>" + xpBoostStats() }
    if (x == 6) { document.getElementById("statsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Token Stats</span><br><br>" + tokenStats() }
}

function credits() {
    result = ""
    result += "Demonin: <a href=\"https://demonin.com/games/checkBack\" target=\"_blank\">Original Check Back</a> idea<br>"
    result += "Alderi: Helpful css changes<br>"
    result += "Mirakos: Clock icon <a href=\"https://itch.io/embed-upload/15381958?color=000000\" target=\"_blank\">(Pixelgrab)</a><br>"
    result += "<a href=\"https://crawl.develz.org/play.htm\" target=\"_blank\">Dungeon Crawl:</a> Many textures are open-source and come from this project<br>"
    result += "All testers and everyone who played, including you <3"
    return result
}

function playerStats() {
    let result = ""
    let totalUnlocks = unlockLevelsSmall.length /*+ unlockLevelsBig.length*/
    result += "Highest level: " + displayBig(game.player.highestLevel) + "<br>"
    result += "Unlocks: " + wholeNumberShort(game.player.unlocks) + " / " + wholeNumberShort(totalUnlocks) + "<br>"
    result += "Time played: " + numberToTime(game.player.timePlayed) + "<br>"
    result += "Button clicks: " + wholeNumberShort(game.player.buttonClicks) + "<br>"
    if (compareBig(game.player.highestLevel, [8, 0])) {
        result += "Crates opened: " + wholeNumberShort(game.player.cratesOpened) + "<br>"
        result += "Pets owned: " + countPets(1, pets.length - 1) + " / " + wholeNumberShort(pets.length - 1) + "<br>"
    }
    if (compareBig(game.player.highestLevel, [5, 2])) {
        result += "Token upgrades: " + countTokenUpgrades(1, tokenUpgrades.length - 1) + " / " + wholeNumberShort(tokenUpgrades.length - 1) + "<br>"
    }
    return result
}

function xpStats() {
    let result = "XP Multipliers:<br>"
    if (!!pets[game.pets.equipped].xpMulti) { result += "x" + displayBig(pets[game.pets.equipped].xpMulti) + " from pets<br>" }
    if (compareBig(game.xpBoost.amount, [1, 0])) { result += "x" + displayBig(game.xpBoost.effectiveBoost) + " from XPBoost<br>" }
    if (compareBig(game.tokenBonuses.xp, [1, 0])) { result += "x" + displayBig(game.tokenBonuses.xp) + " from token upgrades<br>" }
    result += "TOTAL: x" + displayBig(game.xp.multiplier) + "<br><br>XP Cooldown modifiers:<br>"
    if (!!pets[game.pets.equipped].xpCooldown) { result += "/" + numberShort(pets[game.pets.equipped].xpCooldown) + " from pets<br>" }
    if (game.tokenBonuses.xpCooldown > 1) { result += "/" + numberShort(game.tokenBonuses.xpCooldown) + " from token upgrades<br>" }
    result += "TOTAL: /" + numberShort(game.xp.cooldown)
    return result
}

function petStats() {
    let result = "Collection completionist progress:<br>"
    if (game.player.unlocks >= petButtons[0].unlock) { result += "Basic crate: " + wholeNumberShort(countPets(1, 4)) + "/4<br>" }
    if (game.player.unlocks >= petButtons[1].unlock) { result += "Nature crate: " + wholeNumberShort(countPets(5, 10)) + "/6<br>" }
    if (game.player.unlocks >= petButtons[2].unlock) { result += "Earth crate: " + wholeNumberShort(countPets(11, 18)) + "/8<br>" }
    if (game.player.unlocks >= petButtons[3].unlock) { result += "Fire crate: " + wholeNumberShort(countPets(19, 26)) + "/8<br>" }
    if (game.player.unlocks >= petButtons[4].unlock) { result += "Skeleton crate: " + wholeNumberShort(countPets(27, 34)) + "/8<br>" }
    result += "TOTAL: " + wholeNumberShort(countPets(1, pets.length - 1)) + "/" + wholeNumberShort(pets.length - 1) + "<br>"
    if (game.pets.luck > 1) {
        result += "<br>Luck factors:<br>"
        if (game.tokenBonuses.luck > 1) {result += "x" + numberShort(game.tokenBonuses.luck) + " from token upgrades<br>"}
        result += "TOTAL: x" + numberShort(game.pets.luck) + "<br>"
    }
    return result
}

function xpBoostStats() {
    let result = "XPBoost Multipliers: <br>"
    if (compareBig(game.tokenBonuses.xpBoost, [1, 0])) {result += "x" + displayBig(game.tokenBonuses.xpBoost) + " from token upgrades<br>"}
    result += "TOTAL: x" + displayBig(game.xpBoost.multiplier) + "<br><br>"
    return result
}

function tokenStats() {
    let result = "Base gain: 0.1, multipliers:<br>"
    if (game.tokenBonuses.tokens > 1) {result += "x" + numberShort(game.tokenBonuses.tokens) + " from token upgrades<br>"}
    if (!!pets[game.pets.equipped].tokenMulti) {result += "x" + numberShort(pets[game.pets.equipped].tokenMulti) + " from pets<br>"}
    if (game.tokens.bankAmount >= 5 && game.tokens.upgrades[8] >= 1) {result += "x" + numberShort(1 + Math.log(game.tokens.ticks)) + " from ticks<br>"}
    if (game.tokens.bankAmount >= 1) {result += "/" + numberShort(game.tokens.bankAmount) + " from bank scaling<br>"}
    result += "TOTAL: x" + numberShort(game.tokens.gain * 10)
    return result
}

function countPets(x, y) { //x = starting pet, y = final pet, both included: countPets(3, 6) = (3, 4, 5, 6)
    let count = 0
    for (i = x; i <= y; i++) { if (game.pets.individualDiscovered[i] == 1) { count++ } }
    return count
}

function countTokenUpgrades(x, y) {
    let count = 0
    for (i = x; i <= y; i++) { if (game.tokens.upgrades[i] >= tokenUpgrades[i].levels) { count++ } }
    return count
}