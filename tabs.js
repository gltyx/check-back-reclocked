/*TAB MAP: game.player.currentTab[main, sub] (Formatted at main.sub, for example 2.1 is [2, 1])
1.0: Collections (Each button opens a popup-menu)
    Pet inventory button
2.0: Main buttons (Each button opens a sub-group)
    2.1: XP Buttons
    2.2: Pet Crates
*/

//This will mostly be removed soon and turned into some sort of "Dodecadragons" map-like grid
const mainTabs = [ //Represents the names and unlocks for each main tab
    { name: "dailyButton", unlock: 3 },
    { name: "InventoryTab", unlock: 5 },
    { name: "MainTab", unlock: 5 },
    { name: "PrestigeTab", unlock: 25 },
]

const inventorySubTab = [ //Represents the names and unlocks for each subtab inside the "Inventory" content
    { name: "petsInventory", unlock: 5 },
]

const mainSubTab = [ //Represents the names and unlocks for each subtab inside the "Main" content
    { name: "XPTab", unlock: 5 },
    { name: "CratesTab", unlock: 5 },
    { name: "XPBTab", unlock: 12 },
    { name: "TokenTab", unlock: 18 },
]

const prestigeSubTab = [
    { name: "ResearchTab", unlock: 0 },
]

const otherFunniesDisplay = [
    { name: "selectedPetText", unlock: 5 },
]

const extraSettings = [
    { name: "setting7", unlock: 5 },
]

function tab(x) {
    game.player.tabDropdown = x
}

function subtab(x) {
    game.player.currentTab = x
}

function displayTabContent() {
    let i = 0
    let size = 0
    size = XPButtons.length
    for (i = 0; i < size; i++) { //If the player has the unlock requirement for an xp button AND is inside the specific tab, the button will show, either it will hide
        if (game.player.unlocks >= XPButtons[i].unlock && JSON.stringify(game.player.currentTab) == JSON.stringify([2, 1])) { document.getElementById(XPButtons[i].name).style.display = "block" }
        else { document.getElementById(XPButtons[i].name).style.display = "none" }
    }
    if (JSON.stringify(game.player.currentTab) == JSON.stringify([2, 1])) {
        document.getElementById("petRarities").innerHTML = "XP Multi: x" + displayBig(game.xp.multiplier) + "<br>Cooldowns: /" + numberShort(game.xp.cooldown)
        if (game.prestige.reset == true) {document.getElementById("petRarities").innerHTML += "<br>Exponent: ^" + displayBig(game.xp.expo)}
    }
    size = petButtons.length
    for (i = 0; i < size; i++) { //If the player has the unlock requirement for a crate button AND is inside the specific tab, the button will show, either it will hide
        if (game.player.unlocks >= petButtons[i].unlock && JSON.stringify(game.player.currentTab) == JSON.stringify([2, 2])) { document.getElementById(petButtons[i].name).style.display = "block" }
        else { document.getElementById(petButtons[i].name).style.display = "none" }
    }
    size = XPBoostButtons.length
    for (i = 0; i < size; i++) { //If the player has the unlock requirement for an xp boost button AND is inside the specific tab, the button will show, either it will hide
        if (game.player.unlocks >= XPBoostButtons[i].unlock && JSON.stringify(game.player.currentTab) == JSON.stringify([2, 3])) { document.getElementById(XPBoostButtons[i].name).style.display = "block" }
        else { document.getElementById(XPBoostButtons[i].name).style.display = "none" }
    }
    if (JSON.stringify(game.player.currentTab) == JSON.stringify([2, 3])) {document.getElementById("petRarities").innerHTML = XPBoostEffects()}
    size = tokenUpgrades.length
    if (game.player.unlocks >= 18 && JSON.stringify(game.player.currentTab) == JSON.stringify([2, 4])) {
        document.getElementById("tokenButton0").style.display = "block"
        document.getElementById("petRarities").innerHTML = ""
    }
    else { document.getElementById("tokenButton0").style.display = "none" } //This is the check for every token upgrade
    for (i = 1; i < size; i++) {
        if (tokenUpgradeAvailable(i) && JSON.stringify(game.player.currentTab) == JSON.stringify([2, 4])) { document.getElementById(tokenUpgrades[i].name).style.display = "block" }
        else { document.getElementById(tokenUpgrades[i].name).style.display = "none" }
    }
    if (JSON.stringify(game.player.currentTab) == JSON.stringify([3, 1]) && game.prestige.reset == false) {document.getElementById("prestigeButton").style.display = "block"}
    else {document.getElementById("prestigeButton").style.display = "none"}
}
setInterval(displayTabContent, 50)

function displayTabButtons() {
    for (let i = 0; i < mainTabs.length; i++) {
        if (game.player.highestUnlocks >= mainTabs[i].unlock) { document.getElementById(mainTabs[i].name).style.display = "block" }
        else { document.getElementById(mainTabs[i].name).style.display = "none" }
    }
}
setInterval(displayTabButtons, 50)

function displayInventoryButtons() {
    for (let i = 0; i < inventorySubTab.length; i++) {
        if (game.player.highestUnlocks >= inventorySubTab[i].unlock && game.player.tabDropdown == 1) { document.getElementById(inventorySubTab[i].name).style.display = "block" }
        else { document.getElementById(inventorySubTab[i].name).style.display = "none" }
    }
}
setInterval(displayInventoryButtons, 50)

function displayMainButtons() {
    for (let i = 0; i < mainSubTab.length; i++) {
        if (game.player.highestUnlocks >= mainSubTab[i].unlock && game.player.tabDropdown == 2) { document.getElementById(mainSubTab[i].name).style.display = "block" }
        else { document.getElementById(mainSubTab[i].name).style.display = "none" }
    }
}
setInterval(displayMainButtons, 50)

function displayFunnies() { //This is for stuff like selected pet text
    for (let i = 0; i < otherFunniesDisplay.length; i++) {
        if (game.player.highestUnlocks >= otherFunniesDisplay[i].unlock) { document.getElementById(otherFunniesDisplay[i].name).style.display = "block" }
        else { document.getElementById(otherFunniesDisplay[i].name).style.display = "none" }
    }
}
setInterval(displayFunnies, 50)

function displayPrestigeButtons() {
    let display = false
    for (let i = 0; i < prestigeSubTab.length; i++) {
        if (i == 0 && game.player.highestUnlocks >= 25 && game.player.tabDropdown == 3) {display = true}
        else {
            if (game.player.unlocks >= prestigeSubTab[i].unlock && game.prestige.reset == true && game.player.tabDropdown == 3) {display = true}
        }
        if (display == true) {document.getElementById(prestigeSubTab[i].name).style.display = "block"}
        else {document.getElementById(prestigeSubTab[i].name).style.display = "none"}
    }
}
setInterval(displayPrestigeButtons, 50)

function displayExtraSettings() {
    for (let i = 0; i < extraSettings.length; i++) {
        if (game.player.highestUnlocks >= extraSettings[i].unlock) {
            document.getElementById(extraSettings[i].name).style.display = "block"
            document.getElementById(extraSettings[i].name).innerHTML = "Crate emojis: " + game.player.crateEmoji
        }
        else { document.getElementById(extraSettings[i].name).style.display = "none" }
    }
}
setInterval(displayExtraSettings, 50)

function XPTab() {
    let flicker = false
    let i = 0
    while (i < XPButtons.length && flicker == false) {
        if (game.player.unlocks >= XPButtons[i].unlock && game.xp.buttonCooldowns[i] == 0) {
            flicker = true
        }
        i++
    }
    return flicker
}

function CrateTab() {
    let flicker = false
    let i = 0
    while (i < petButtons.length && flicker == false) {
        if (game.player.unlocks >= petButtons[i].unlock && game.pets.buttonCooldowns[i] == 0) {
            flicker = true
        }
        i++
    }
    return flicker
}

function XPBoostTab() {
    let flicker = false
    let i = 0
    while (i < XPBoostButtons.length && flicker == false) {
        if (game.player.unlocks >= XPBoostButtons[i].unlock && game.xpBoost.buttonCooldowns[i] == 0) {
            flicker = true
        }
        i++
    }
    return flicker
}