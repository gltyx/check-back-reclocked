function prestigeReset() {
    if (game.prestige.reset == false && game.player.highestUnlocks >= 25) {
        game.xp.amount = [0, 0]
        game.xp.buttonCooldowns = [0, 0, 0]
        game.pets.amount = [0, 0, 0]
        game.pets.buttonCooldowns = [0, 0, 0]
        game.pets.equipped = 0
        game.pets.unboxString = [[0, 0]]
        game.xpBoost.amount = [1, 0]
        game.xpBoost.buttonCooldowns = [0, 0, 0]
        game.tokens.amount = 0
        game.tokens.bankAmount = 0
        game.tokens.ticks = 0
        game.tokens.upgrades = [0, 0, 0]
        game.tokens.autoTicks = 0
        game.player.unlocks = 0
        game.player.currentTab = [2, 1]
    }
}