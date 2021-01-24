var gameData = {
    fish: 0,
    gold: 0,
    rod: 0,
    speed: 0,
    sell: 0,
    doubler: 0
}
var defaultData = gameData

function loadGameData() {
    var gameDataSave = JSON.parse(localStorage.getItem("gameDataSave"))
    if (gameDataSave != null) {
        gameData = gameDataSave
    }
}
loadGameData()
var fishing = 0
var i = 0
var fishingText = "Start Fishing"
var id = null
var width = 0
var rodModifier = [1, 2, 5, 50, 100, 1000]
var rodCost = [50, 200, 1000, 5000, 20000]
var speedCost = [25, 100, 500, 1500, 5000]
var speedModifier = [1, 1.5, 3, 5, 7, 12]
var sellModifier = [2, 3, 4, 5, 6, 7]
var sellCost = [100, 500, 2000, 4000, 10000]
var doublerModifier = [1, 2, 3, 4, 5, 6,]
var doublerCost = [500, 1500, 5000, 10000, 45000]
var fishingSpeed = null

function startFishing() {
    if (i == 0 && fishing == 0) {
        fishingText = "Stop Fishing"
        fishing = 1
        var elem = document.getElementById("myBar")
        id = setInterval(frame, 10)

        function frame() {
            if (fishingSpeed >= 100) {
                elem.style.width = 100 + "%";
                gameData.fish = gameData.fish + (fishingSpeed*0.01)
            }
            if (width >= 100 && fishingSpeed < 100) {
                i = 0
                gameData.fish++
                width = 0
                elem.style.width = 0
            } else if (fishingSpeed < 100) {
                width = width + fishingSpeed
                elem.style.width = width + "%"
            }
        }
    } else if (fishing == 1) {
        fishing = 0
        clearInterval(id)
        fishingText = "Start Fishing"
        if (fishingSpeed >= 100) {
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
        if (gameData.speed == 0 && gameData.gold >= speedCost[gameData.speed]) {
            gameData.gold = gameData.gold - speedCost[gameData.speed]
            gameData.speed++
        } else if (gameData.speed == 1 && gameData.gold >= speedCost[gameData.speed]) {
            gameData.gold = gameData.gold - speedCost[gameData.speed]
            gameData.speed++
        } else if (gameData.speed == 2 && gameData.gold >= speedCost[gameData.speed]) {
            gameData.gold = gameData.gold - speedCost[gameData.speed]
            gameData.speed++
        } else if (gameData.speed == 3 && gameData.gold >= speedCost[gameData.speed]) {
            gameData.gold = gameData.gold - speedCost[gameData.speed]
            gameData.speed++
        } else if (gameData.speed == 4 && gameData.gold >= speedCost[gameData.speed]) {
            gameData.gold = gameData.gold - speedCost[gameData.speed]
            gameData.speed++
        }
    }
    if (itemnumber == 3) {
        if (gameData.sell == 0 && gameData.gold >= sellCost[gameData.sell]) {
            gameData.gold = gameData.gold - sellCost[gameData.sell]
            gameData.sell++
        } else if (gameData.sell == 1 && gameData.gold >= sellCost[gameData.sell]) {
            gameData.gold = gameData.gold - sellCost[gameData.sell]
            gameData.sell++
        } else if (gameData.sell == 2 && gameData.gold >= sellCost[gameData.sell]) {
            gameData.gold = gameData.gold - sellCost[gameData.sell]
            gameData.sell++
        } else if (gameData.sell == 3 && gameData.gold >= sellCost[gameData.sell]) {
            gameData.gold = gameData.gold - sellCost[gameData.sell]
            gameData.sell++
        } else if (gameData.sell == 4 && gameData.gold >= sellCost[gameData.sell]) {
            gameData.gold = gameData.gold - sellCost[gameData.sell]
            gameData.sell++
        }
    }
    if (itemnumber == 4) {
        if (gameData.doubler == 0 && gameData.gold >= doublerCost[gameData.doubler]) {
            gameData.gold = gameData.gold - doublerCost[gameData.doubler]
            gameData.doubler++
        } else if (gameData.doubler == 1 && gameData.gold >= doublerCost[gameData.doubler]) {
            gameData.gold = gameData.gold - doublerCost[gameData.doubler]
            gameData.doubler++
        } else if (gameData.doubler == 2 && gameData.gold >= doublerCost[gameData.doubler]) {
            gameData.gold = gameData.gold - doublerCost[gameData.doubler]
            gameData.doubler++
        } else if (gameData.doubler == 3 && gameData.gold >= doublerCost[gameData.doubler]) {
            gameData.gold = gameData.gold - doublerCost[gameData.doubler]
            gameData.doubler++
        } else if (gameData.doubler == 4 && gameData.gold >= doublerCost[gameData.doubler]) {
            gameData.gold = gameData.gold - doublerCost[gameData.doubler]
            gameData.doubler++
    }
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

function saveFunction() {
    saveGameData()
}

function update() {
    fishingSpeed = (rodModifier[gameData.rod] * speedModifier[gameData.speed])
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
    } else if (gameData.rod == 5) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "You've bought all the rods!"
    }
    if (gameData.speed == 0) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "Speed Upgrade I (" + speedCost[gameData.speed] + " gold)"
    } else if (gameData.speed == 1) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "Speed Upgrade II (" + speedCost[gameData.speed] + " gold)"
    } else if (gameData.speed == 2) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "Speed Upgrade III (" + speedCost[gameData.speed] + " gold)"
    } else if (gameData.speed == 3) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "Speed Upgrade IV (" + speedCost[gameData.speed] + " gold)"
    } else if (gameData.speed == 4) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "Speed Upgrade V (" + speedCost[gameData.speed] + " gold)"
    } else if (gameData.speed == 5) {
        var element = document.getElementById("speedUpgrade")
        element.innerHTML = "You've bought all the upgrades!"
    }
    if (gameData.sell == 0) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "Sell Upgrade I (" + sellCost[gameData.sell] + " gold)"
    } else if (gameData.sell == 1) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "Sell Upgrade II (" + sellCost[gameData.sell] + " gold)"
    } else if (gameData.sell == 2) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "Sell Upgrade III (" + sellCost[gameData.sell] + " gold)"
    } else if (gameData.sell == 3) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "Sell Upgrade IV (" + sellCost[gameData.sell] + " gold)"
    } else if (gameData.sell == 4) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "Sell Upgrade V (" + sellCost[gameData.sell] + " gold)"
    } else if (gameData.sell == 5) {
        var element = document.getElementById("sellUpgrade")
        element.innerHTML = "You've bought all the upgrades!"
    }
    if (gameData.doubler == 0) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "Fish Multiplier I (" + doublerCost[gameData.doubler] + " gold)"
    } else if (gameData.doubler == 1) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "Fish Multiplier II (" + doublerCost[gameData.doubler] + " gold)"
    } else if (gameData.doubler == 2) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "Fish Multiplier III (" + doublerCost[gameData.doubler] + " gold)"
    } else if (gameData.doubler == 3) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "Fish Multiplier IV (" + doublerCost[gameData.doubler] + " gold)"
    } else if (gameData.doubler == 4) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "Fish Multiplier V (" + doublerCost[gameData.doubler] + " gold)"
    } else if (gameData.doubler == 5) {
        var element = document.getElementById("doublerUpgrade")
        element.innerHTML = "You've bought all the upgrades!"
    }
}

function saveGameData() {
    localStorage.setItem("gameDataSave", JSON.stringify(gameData))
}

function resetGameData() {
    gameData = defaultData
}
openTab('Fish')
