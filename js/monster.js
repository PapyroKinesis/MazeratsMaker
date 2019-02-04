function getMonster(type, num1, num2) {
    switch(type) {
        //Aerial
        case 1:
        case 2:
            return aerial[num1][num2];
        //Terrestrial
        case 3:
        case 4:
            return land[num1][num2];
        //Aquatic
        case 5:
        case 6:
            return aqua[num1][num2];
        default:
            return land[num1][num2];
    }
}
var aerial = [
    ["albatross", "bat", "beetle", "bird of paradise", "butterfly", "condor"],
    ["crane", "crow", "dragonfly", "eagle", "falcon", "firefly"],
    ["flamingo", "fly", "flying squirrel", "goose", "gull", "hummingbird"],
    ["kingfisher", "locust", "magpie", "mantis", "mockingbird", "mosquito"],
    ["moth", "owl", "parrot", "peacock", "pelican", "pteranodon"],
    ["rooster", "sparrow", "swan", "vulture", "wasp", "woodpecker"]
 ];
var land = [
    ["ant", "ape", "armadillo", "badger", "bear", "boar"],
    ["caterpillar", "centipede", "chameleon", "coackroch", "deer", "elephant"],
    ["ferret", "fox", "giraffe", "goat", "horse", "human"],
    ["mole", "ostrich", "ox", "porcupine", "rabbit", "raccoon"],
    ["rat", "rhinoceros", "scorpion", "sheep", "slug", "snail"],
    ["snake", "spider", "squirrel", "tiger", "wolf", "wolverine"]
];
var aqua = [
    ["alligator", "amoeba", "anglerfish", "beaver", "clam", "crab"],
    ["dolphin", "eel", "frog", "hippopotamus", "jellyfish", "leech"],
    ["lobster", "manatee", "manta ray", "muskrat", "narwhal", "newt"],
    ["octopus", "otter", "penguin", "platypus", "pufferfish", "salamander"],
    ["sea anemone", "sea urchin", "seahorse", "seel", "shark", "shrimp"],
    ["squid", "swordfish", "tadpole", "turtle", "walrus", "whale"]
]

var mFeatures = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var mTraits = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var mAbilities = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var mTactics = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var mPersonality = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var mWeakness = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];

function makeMonsterExtras() {
    var one = rollDie(6) - 1;
    var two = rollDie(6) - 1;

    var text = "";
    for(var i = 0; i < 6; i++) {
        one = rollDie(6) - 1;
        two = rollDie(6) - 1;
        switch(i) {
            case 0:
                text += mFeatures[one][two] + `<br>`;
                break;
            case 1:
                text += mTraits[one][two] + `<br>`;
                break;
            case 2:
                text += mAbilities[one][two] + `<br>`;
                break;
            case 3:
                text += mTactics[one][two] + `<br>`;
                break;
            case 4:
                text += mPersonality[one][two] + `<br>`;
                break;
            case 5:
                text += mWeakness[one][two] + `<br>`;
                break;
            default:
                break;
        }
    }
    return text;
}

function makeMonster() {
    var type = rollDie(6);
    var one = rollDie(6) - 1;
    var two = rollDie(6) - 1;
    var text = getMonster(type, one, two) + `</br>` + getMonster(type, two, one) + `<br>`;
    var extras = makeMonsterExtras();
    text += extras;
    document.getElementById("display").innerHTML = text;
}