const gridEl = document.getElementById("grid")
const mode = {
    "greyscale": null,
    "blackToWhite": null,
    "rainbowOrdered": null,
    "rainbowRandom": function() {
       
        this.style.backgroundColor = rainbowColors[colorSelector]
        colorSelector +=1
        if (colorSelector === rainbowColors.length) {
            colorSelector = 0
            console.log("reset color selector")
        }
    }
}

let modeSelector = mode.rainbowRandom

const rainbowColors = ["blue", "green", "red", "yellow", "purple", "orange", "teal",]
let colorSelector = 0


//generates rows and columns for grid
for (let i = 0; i<10; i++) {
    let newTr = document.createElement("tr")
    newTr.setAttribute("id", `row ${i}`)
    gridEl.appendChild(newTr)

    for(let n = 0; n<10; n++) {
        let newTd = document.createElement("td")
        newTd.setAttribute("id", `${i}-${n}`)
        newTd.addEventListener("mouseover", modeSelector )
        newTr.appendChild(newTd)
    }
}

