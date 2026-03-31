const unlockLevelsSmall = [2, 3, 4, 6, 8, 12, 20, 30, 40, 60, 80, 100, 150, 200, 250, 300, 400, 500, 1000, 2000, 5000, 15000, 30000, 50000] //This will probably be remade completely
//const unlockLevelsBig = [1000000000]
const levelBarTextures = [50, 55, 60, 65, 70, 80, 90, 100, 200]

const levelBarColours = [
    [1, "#5cc"],
    [2, "#5ac"],
    [3, "#37c"],
    [4, "#28e"],
    [5, "#63d"],
    [6, "#82f"],
    [7, "#d3f"],
    [8, "#d3f"],
    [9, "#e4e"],
    [10, "#e4e"],
    [12, "#f3a"],
    [14, "#e33"],
    [16, "#f52"],
    [18, "#e92"],
    [20, "#dd2"],
    [22, "#ce0"],
    [24, "#9e3"],
    [26, "#3d3"],
    [28, "#2e6"],
    [30, "#2aa"],
    [32, "#158"],
    [34, "#127"],
    [36, "#006"],
    [38, "#315"],
    [40, "#516"],
    [45, "#605"],
    [50, "#666"],
    [Infinity, "#666"],
]

const ranks = [ //This will probably be remade for there to be less names but more "number like" scaling with potential even exponential step-to-step
    {level: [1, 0], name: "Apprentice"},
    {level: [5, 0], name: "Beginner"},
    {level: [1, 1], name: "Challenger"},
    {level: [1, 2], name: "Dedicated"},
    {level: [1, 3], name: "Exalted"},
    {level: [1, 4], name: "Fabled"},
    {level: [1, 5], name: "Great"},
    {level: [1.1, 5], name: "Hacker"},
    {level: [Infinity, Infinity], name: "Infinity"},
] //space and finality, omega

const pets = [
    //Name, XP multiplier, Funny special text.
    { name: "Test", specialText: "Hey, how did you find me? (Placeholder)" }, //0
    { name: "Slug", xpMulti: 1.2, specialText: "A snail that lost its shell and has to live underneath a bridge... for now." }, // 1
    { name: "Rat", xpMulti: 1.4, specialText: "A rat forced to eat trash to survive. It'd love to eat a fresh slug anyday." }, // 2
    { name: "Snake", xpMulti: 1.6, specialText: "A snake living in barren wastes, looking for any juicy rat to eat." }, // 3
    { name: "Small Elf", xpMulti: 2, specialText: "This breed of elves is so small that they cannot harvest anything bigger than a mushroom. They love to dine on snakes." }, // 4
    { name: "Green Butterfly", xpMulti: 1.5, specialText: "Green butterflies are known to be annoying when crossing forests." }, // 5
    { name: "Green Lizard", xpMulti: 1.75, specialText: "Rapid bug that cammouflages through green environments." }, // 6
    { name: "Green Salamander", xpMulti: 2.25, specialText: "Their only danger comes from accidentally touching them." }, // 7
    { name: "Green Spider", xpMulti: 2.75, specialText: "They live on leaves because they can't make cobwebs." }, // 8
    { name: "Green Crocodile", xpMulti: 3.5, specialText: "It has a little button that makes it say 'See ya later, alligator'." }, // 9
    { name: "Green Dragon", xpMulti: 5, specialText: "Myths say that this dragon is a symbol of luck. Do they drink liquid luck?" }, // 10
    { name: "Turtle", xpMulti: 3, specialText: "Not the fastest sheriff of the wild west." }, //11
    { name: "Tarantula", xpMulti: 4, specialText: "An australian nightmare if it weren't for their big green eyes." }, //12
    { name: "1-Headed Snake", xpMulti: 5.2, xpCooldown: 1.01, specialText: "Where are the other heads? They were lost in a crazy blackjack night. Maybe this snake will restore them eventually." }, //13
    { name: "Purple Butterfly", xpMulti: 6.5, xpCooldown: 1.02, specialText: "Do I know the green butterfly? I'd rather not know her." }, //14
    { name: "Earth Snake", xpMulti: 8, xpCooldown: 1.03, specialText: "Unlike other snakes, this one saw the Avatar training, and learned a thing or two about earth bending." }, //15
    { name: "Scorpion", xpMulti: 10, xpCooldown: 1.05, specialText: "People used to call me the 'Death Scorpion' but I prefer being a farmer, so I dropped the name." }, //16
    { name: "Cat", xpMulti: 12, xpCooldown: 1.07, specialText: "Maybe the fastest sheriff of the wild west, if the cat were to behave correctly." }, //17
    { name: "Earth Dragon", xpMulti: 15, xpCooldown: 1.1, specialText: "The father of the Earth, this dragon can make life out of sticks and stones." }, //18
    { name: "Burning Eyeball", xpMulti: 10, xpCooldown: 1.05, specialText: "Blinded by it's own blaze of glory." }, //19
    { name: "Red Slime", xpMulti: 15, xpCooldown: 1.09, specialText: "It was him! He stole my pizza! Stronzo amaro." }, //20
    { name: "Red Snake", xpMulti: 22, xpCooldown: 1.13, specialText: "It's hot, that's all... nevermind, it self combusted." }, //21
    { name: "Red Butterfly", xpMulti: 30, xpCooldown: 1.18, specialText: "Can survive flying through flames. If you ride it, however, you couldn't survive." }, //22
    { name: "Fire Spirit", xpMulti: 40, xpCooldown: 1.24, specialText: "This side of the wind generates a better hairline. WAIT! I cast a shadow????" }, //23
    { name: "Fiery Fish", xpMulti: 60, xpCooldown: 1.3, specialText: "Evaporates all water around it. That's why it lives on land." }, //24
    { name: "Sleepy Fire Demon", xpMulti: 80, xpCooldown: 1.35, specialText: "20 hours no sleep, 3'o clock in the morning, no fuel left to be evil." }, //25
    { name: "Fire Dragon", xpMulti: 100, xpCooldown: 1.4, specialText: "He's so powerful that has to be nerfed by leaving a path of ashes whenever he goes." }, //26
    { name: "Small Skeleton", xpMulti: 50, xpCooldown: 1.3, tokenMulti: 1.4, specialText: "Poor child." }, //27
    { name: "Skeletal Dog", xpMulti: 75, xpCooldown: 1.4, tokenMulti: 1.7, specialText: "Skulls are a mix of tennis balls and bones. 2 in 1." }, //28
    { name: "Normal Skeleton", xpMulti: 110, xpCooldown: 1.5, tokenMulti: 2.1, specialText: "What do you mean normal? You ra-" }, //29
    { name: "Skeletal Snake", xpMulti: 150, xpCooldown: 1.6, tokenMulti: 2.5, specialText: "Wait, snakes do not have bones. This is fake." }, //30
    { name: "Skeletal Vulture", xpMulti: 200, xpCooldown: 1.7, tokenMulti: 3, specialText: "He got an F in aerodynamics." }, //31
    { name: "Skeletal Hound", xpMulti: 275, xpCooldown: 1.8, tokenMulti: 3.6, specialText: "Don't call it a dog or you'll see the difference." }, //32
    { name: "Skeletal Hydra", xpMulti: 350, xpCooldown: 1.9, tokenMulti: 4.3, specialText: "Each head makes a different bone creak tune." }, //33
    { name: "Skeletal Dragon", xpMulti: 500, xpCooldown: 2, tokenMulti: 5, specialText: "He will come back in Avengers: Doomsday." }, //34
]

const basicUnboxChances = [
    [1, 1], [2, 0.6], [3, 0.2], [4, 0.05]
]

const natureUnboxChances = [
    [5, 1], [6, 0.5], [7, 0.3], [8, 0.1], [9, 0.06], [10, 0.02]
]

const earthUnboxChances = [
    [11, 1], [12, 0.47], [13, 0.39], [14, 0.27], [15, 0.17], [16, 0.09], [17, 0.03], [18, 0.01]
]

const fireUnboxChances = [
    [19, 1], [20, 0.4], [21, 0.34], [22, 0.23], [23, 0.1], [24, 0.04], [25, 0.012], [26, 0.004]
]

const skeletonUnboxChances = [
    [27, 1], [28, 0.35], [29, 0.24], [30, 0.17], [31, 0.09], [32, 0.03], [33, 0.009], [34, 0.002],
]

const stats = [
    //Name, unlock required
    { name: "Test", unlock: 0 },
    { name: "Player", unlock: 0 },
    { name: "Credits", unlock: 0 },
    { name: "XP Multipliers", unlock: 0 },
    { name: "Crate multipliers", unlock: 5 },
    { name: "XPBoost", unlock: 12},
    { name: "Tokens", unlock: 18},
]

const tokenUpgrades = [ //Name, base upgrade cost, cost scaling, total levels, effect text
    {name: "test", baseCost: 1, costScaling: 1, levels: 10, unlock: 18, reqs: 0, recList: [0], effect: "hello code reader"},
    {name: "tokenUpgrade1", baseCost: 1, costScaling: 1, levels: 10, unlock: 18, reqs: 0, recList: [0], effect: "+0.1x XP per level"},
    {name: "tokenUpgrade2", baseCost: 1, costScaling: 5, levels: 2, unlock: 18, reqs: 0, recList: [0], effect: "+/0.05 XP cooldowns per level"},
    {name: "tokenUpgrade3", baseCost: 2, costScaling: 2, levels: 5, unlock: 18, reqs: 0, recList: [0], effect: "+0.1x XPBoost per level"},
    {name: "tokenUpgrade4", baseCost: 5, costScaling: 5, levels: 2, unlock: 18, reqs: 0, recList: [0], effect: "+0.25x Tokens per level"},
    {name: "tokenUpgrade5", baseCost: 5, costScaling: 1, levels: 10, unlock: 19, reqs: 1, recList: [1], effect: "+0.25x XP per level"},
    {name: "tokenUpgrade6", baseCost: 5, costScaling: 2, levels: 5, unlock: 20, reqs: 1, recList: [3], effect: "+0.25x XPBoost per level"},
    {name: "tokenUpgrade7", baseCost: 10, costScaling: 5, levels: 2, unlock: 21, reqs: 0, recList: [0], effect: "+0.1x Crate luck per level"},
    {name: "tokenUpgrade8", baseCost: 50, costScaling: 1, levels: 1, unlock: 22, reqs: 1, recList: [4], effect: "If (Bank >= 5), x(1 + ln(ticks)) Tokens"},
    {name: "tokenUpgrade9", baseCost: 25, costScaling: 2, levels: 4, unlock: 22, reqs: 1, recList: [5], effect: "+1x XP per level"},
    {name: "tokenUpgrade10", baseCost: 50, costScaling: 4, levels: 2, unlock: 23, reqs: 2, recList: [6, 7], effect: "+0.75x XPBoost, +0.1x Luck per level"},
]

const dailyUpgrades = [
    {name: "Test", baseCost: 1, costScaling: 1, unlock: 3, effect: "filler"},
    {name: "Claim daily rewards", baseCost: 1, costScaling: 1, unlock: 3, effect: "filler 2"},
    {name: "Timeskip", baseCost: 20, costScaling: 5, unlock: 3, effect: "Skips a certain amount of time to the future. Cost resets when claiming daily rewards"},
    {name: "Instant XP", baseCost: 25, costScaling: 5, unlock: 4, effect: "Grants XP based on 1st button amount and increases XP gain"},
    {name: "Liquid Luck", baseCost: 30, costScaling: 10, unlock: 6, effect: "One time x1.5 crate luck and +5% luck"},
    {name: "Instant XPBoost", baseCost: 50, costScaling: 10, unlock: 14, effect: "Grants XPBoost based on 1st button amount and increases XPBoost gain"},
    {name: "Token generator", baseCost: 50, costScaling: 10, unlock: 20, effect: "Adds many ticks into tokens and increases token gain"},
]