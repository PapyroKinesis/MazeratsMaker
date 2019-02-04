function rollDie(sides) {
    var roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}
function getSelectText() {
    var objText = document.getElementById("select");
    var text = objText.options[objText.selectedIndex].text;
    // document.getElementById("display").innerHTML = text;
    return text;
}
function generate() {
    var selected = getSelectText();
    switch(selected) {
        case "Monsters":
            makeMonster();
            break;
        case "Dungeon":
            makeDungeon();
            break;
        default:
            makeMonster();
            break;
    }
}
