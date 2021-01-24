var gameData = {
fish: 0,
gold: 10000,
rod: 0
}
function loadGameData() {
    var gameDataSave = JSON.parse(localStorage.getItem("gameDataSave"))
    if(gameDataSave != null){
        gameData = gameDataSave
    }
}
loadGameData()
var fishing = 0
var i = 0
var fishingText = "Start Fishing"
var id = null
var width = 0
var rodModifier = [1,2,5,50,100,1000]
var rodCost = [50, 200, 1000, 5000, 20000]
var addFish = null
function startFishing() {
        if (i == 0 && fishing == 0) {
            fishingText = "Stop Fishing"
            fishing = 1
            var elem = document.getElementById("myBar")
            id = setInterval(frame, 10)

            function frame() {
                if (rodModifier[gameData.rod] >= 100) {
                    elem.style.width = 100 + "%";
                    gameData.fish = gameData.fish + (rodModifier[gameData.rod] * 0.01)
                }
                if (width >= 100 && rodModifier[gameData.rod] < 100) {
                    i = 0
                    gameData.fish++
                    width = 0
                    elem.style.width = 0
                } else if (rodModifier[gameData.rod] < 100) {
                    width = width + rodModifier[gameData.rod]
                    elem.style.width = width + "%"
                }
            }
        } else if (fishing == 1) {
            fishing = 0
            clearInterval(id)
            fishingText = "Start Fishing"
            if (rodModifier >= 100) {
                elem.style.width = 0 + "%"
            }
        }
}

function shop(itemnumber) {
    if (itemnumber == 1) {
        if (gameData.rod == 0 && gameData.gold >= rodCost[gameData.rod]) {
            gameData.gold = gameData.gold - rodCost[gameData.rod]
            gameData.rod++
        } else if (gameData.rod == 1 && gameData.gold >= rodCost[gameData.rod]) {
            gameData.gold = gameData.gold - rodCost[gameData.rod]
            gameData.rod++
        } else if (gameData.rod == 2 && gameData.gold >= rodCost[gameData.rod]) {
            gameData.gold = gameData.gold - rodCost[gameData.rod]
            gameData.rod++
        } else if (gameData.rod == 3 && gameData.gold >= rodCost[gameData.rod]) {
            gameData.gold = gameData.gold - rodCost[gameData.rod]
            gameData.rod++
        } else if (gameData.rod == 4 && gameData.gold >= rodCost[gameData.rod]) {
            gameData.gold = gameData.gold - rodCost[gameData.rod]
            gameData.rod++
        }
    }
    if (itemnumber == 2) {

    }
    if (itemnumber == 3) {

    }
    if (itemnumber == 4) {

    }
}

function sellFunction() {
    gameData.gold = gameData.gold + (gameData.fish * 2)
    gameData.fish = 0
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
var update = setInterval(update, 10)
var save = setInterval(saveFunction, 1000)
function saveFunction(){
    saveGameData()
}
function update() {
    var element = document.getElementById("fishStatus")
    element.innerHTML = fishingText
    var element = document.getElementById("fishCounter")
    element.innerHTML = "You have " + gameData.fish + " fish!"
    var element = document.getElementById("moneyCounter")
    element.innerHTML = "You have " + gameData.gold + " gold!"
    var element = document.getElementById("sellNumber")
    element.innerHTML = "Sell for " + gameData.fish * 2 + " gold!"
    if (gameData.rod == 0) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Beginner Rod (" + rodCost[gameData.rod] + " gold)"
    } else if (gameData.rod == 1) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Hobbyist Rod (" + rodCost[gameData.rod] + " gold)"
    } else if (gameData.rod == 2) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Fisherman's Rod (" + rodCost[gameData.rod] + " gold)"
    } else if (gameData.rod == 3) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Elite Rod (" + rodCost[gameData.rod] + " gold)"
    } else if (gameData.rod == 4) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Master Rod (" + rodCost[gameData.rod] + " gold)"
    }
    else if (gameData.rod == 5) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "You've bought all the rods!"
    }
}
function saveGameData() {
    localStorage.setItem("gameDataSave", JSON.stringify(gameData))
}
openTab('Fish')
