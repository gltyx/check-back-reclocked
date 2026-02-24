const unlockLevelsSmall = [2, 3, 4, 6, 8, 12, 20, 30, 40, 60, 80, 100, 150, 200, 250, 300, 400, 1000000000] //This will probably be remade completely
const unlockLevelsBig = [12, 15, 18, 21, 24, 27, 30, 100, 1000000000]
const permanentUnlockLevels = [50, 100000000]
const permanentUnlocks = [10, 100000]
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
    [1, "Beginner", 1],
    [2, "Basic", 1],
    [3, "Unremarkable", 1],
    [4, "Mediocre", 1],
    [5, "Average", 1],
    [6, "Decent", 1],
    [8, "Competent", 1],
    [10, "Proficient", 1],
    [12, "Skilled", 1],
    [14, "Talented", 1],
    [16, "Expert", 1],
    [18, "Exceptional", 1],
    [20, "Brilliant", 1],
    [25, "Extraordinary", 1],
    [30, "Renowned", 1],
    [35, "Unmatched", 1],
    [40, "Superior", 1],
    [45, "Legendary", 1],
    [50, "Mythical", 1],
    [55, "Insane", 1],
    [60, "Supreme", 1],
    [65, "Godly", 1],
    [70, "Universal", 1],
    [75, "Multiversal", 1],
    [80, "Omniversal", 1],
    [90, "Hyperdimensional", 1], //Rank 25, after this, every rank gets a number every x levels up to the number commented next to it.
    [100, "Transcendent", 10], //10
    [200, "Infinite", 10], //10
    [300, "Beyond infinite", 10], //10
    [400, "Endless", 10], //10
    [500, "Void", 80], //25
    [2500, "Extensive", 300], //25
    [10000, "Dedicated", 800], //50
    [50000, "Loot", 3000], //50
    [200000, "Magic", 16000], //50
    [1000000, "Troll", 80000], //50
    [5000000, "Insanity", 100000], //50
    [10000000, "Time", 400000], //75
    [40000000, "Space", 800000], //75
    [100000000, "Finality", 4000000], //75
    [400000000, "placeholder", 8000000] //75
    [10 ** 9, "Alpha", 9 * 10 ** 7], //100
    [10 ** 10, "Beta", 9 * 10 ** 8], //100
    [10 ** 11, "Chi", 9 * 10 ** 9], //100
    [10 ** 12, "Delta", 3.996 * 10 ** 12], //250
    [10 ** 15, "Epsilon", 3.996 * 10 ** 15], //250
    [10 ** 18, "Fabled", 3.996 * 10 ** 18], //250
    [10 ** 21, "Impossibly dedicated", 10 ** 21],
    [10 ** 100, "Impossibly dedicated squared", 10 ** 100],
    [Infinity, "Error", 1],
] //space and finality, omega

const pets = [
    //Name, XP multiplier, Funny special text.
    { name: "Test", xpMulti: 1, specialText: "Hey, how did you find me? (Placeholder)" }, //0
    { name: "Slug", xpMulti: 1.2, specialText: "A snail that lost its shell and has to live underneath a bridge... for now.<br>(Most textures like this have been taken from a project called Dungeon Crawl, check it out)" }, // 1
    { name: "Rat", xpMulti: 1.4, specialText: "A rat forced to eat trash to survive. It'd love to eat a fresh lug anyday." }, // 2
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
    { name: "Burning Eyeball", xpMulti: 10, xpCooldown: 1.05, specialText: "Blinded by it's own blaze of glory" }, //19
    { name: "Red Slime", xpMulti: 15, xpCooldown: 1.09, specialText: "It was him! He stole my pizza! Stronzo amaro" }, //20
    { name: "Red Snake", xpMulti: 22, xpCooldown: 1.13, specialText: "It's hot, that's all... nevermind, it self combusted" }, //21
    { name: "Red Butterfly", xpMulti: 30, xpCooldown: 1.18, specialText: "Can survive flying through flames. If you ride it, however, you couldn't survive" }, //22
    { name: "Fire Spirit", xpMulti: 40, xpCooldown: 1.24, specialText: "This side of the wind generates a better hairline. WAIT! I cast a shadow????" }, //23
    { name: "Fiery Fish", xpMulti: 60, xpCooldown: 1.3, specialText: "Evaporates all water around it. That's why it lives on land" }, //24
    { name: "Sleepy Fire Demon", xpMulti: 80, xpCooldown: 1.35, specialText: "20 hours no sleep, 3'o clock in the morning, no fuel left to be evil" }, //25
    { name: "Fire Dragon", xpMulti: 100, xpCooldown: 1.4, specialText: "He's so powerful that has to be nerfed by leaving a path of ashes whenever he goes" }, //26
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

const stats = [
    //Name, unlock required
    { name: "Test", unlock: 0 },
    { name: "Player", unlock: 0 },
    { name: "Credits", unlock: 0 },
    { name: "XP Multipliers", unlock: 0 },
    { name: "Crate multipliers", unlock: 5 },
]

const dailyRewards = [
    { name: "Test" },
    { name: "XP" },
    { name: "Skeleton Crate" },
]