var fish = 0
var gold = 1
var fishing = 0
var i = 0
var fishingText = "Start Fishing"
var id = null
var width = 0
var fishingSpeed = 1
var rodModifier = 1
var rod = 0
var rodCost = [50, 200, 1000, 5000, 20000]
var addFish = null

function startFishing() {
        if (i == 0 && fishing == 0) {
            fishingText = "Stop Fishing"
            fishing = 1
            var elem = document.getElementById("myBar")
            id = setInterval(frame, 10)

            function frame() {
                if (rodModifier >= 100) {
                    elem.style.width = 100 + "%";
                    fish = fish + (rodModifier * 0.01)
                }
                if (width >= 100 && rodModifier <= 100) {
                    i = 0
                    fish++
                    width = 0
                    elem.style.width = 0
                } else if (rodModifier <= 100) {
                    width = width + fishingSpeed
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
        if (rod == 0 && gold >= rodCost[rod]) {
            gold = gold - rodCost[rod]
            rodModifier = 2
            rod++
        } else if (rod == 1 && gold >= rodCost[rod]) {
            gold = gold - rodCost[rod]
            rodModifier = 5
            rod++
        } else if (rod == 2 && gold >= rodCost[rod]) {
            gold = gold - rodCost[rod]
            rodModifier = 50
            rod++
        } else if (rod == 3 && gold >= rodCost[rod]) {
            gold = gold - rodCost[rod]
            rodModifier = 100
            rod++
        } else if (rod == 4 && gold >= rodCost[rod]) {
            gold = gold - rodCost[rod]
            rodModifier = 1000
            rod++
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
    gold = gold + (fish * 2)
    fish = 0
}

function openTab(evt, tabName) {
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
    evt.currentTarget.className += " active";
}
var update = setInterval(update, 10)

function update() {
    fishingSpeed = 1 * rodModifier
    var element = document.getElementById("fishStatus")
    element.innerHTML = fishingText
    var element = document.getElementById("fishCounter")
    element.innerHTML = "You have " + fish + " fish!"
    var element = document.getElementById("moneyCounter")
    element.innerHTML = "You have " + gold + " gold!"
    var element = document.getElementById("sellNumber")
    element.innerHTML = "Sell for " + fish * 2 + " gold!"
    if (rod == 0) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Beginner Rod (" + rodCost[rod] + " gold)"
    } else if (rod == 1) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Hobbyist Rod (" + rodCost[rod] + " gold)"
    } else if (rod == 2) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Fisherman's Rod (" + rodCost[rod] + " gold)"
    } else if (rod == 3) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Elite Rod (" + rodCost[rod] + " gold)"
    } else if (rod == 4) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "Master Rod (" + rodCost[rod] + " gold)"
    }
    else if (rod == 5) {
        var element = document.getElementById("rodUpgrade")
        element.innerHTML = "You've bought all the rods!"
    }
}
openTab(event, 'Fish')
