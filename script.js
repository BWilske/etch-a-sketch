const gridEl = document.getElementById("grid")

//holds color functions
const mode = {
    "greyscale": function() {
        this.style.backgroundColor = greyscaleColors[colorSelector]
        colorSelector +=1
            if (colorSelector === greyscaleColors.length) {
            colorSelector = 0
        }
    },
    "blackToWhite": null,
    "rainbowOrdered": function() {
        const rainbowColors = ["blue", "green", "red", "yellow", "purple", "orange", "teal",]
        this.style.backgroundColor = rainbowColors[colorSelector]
        colorSelector +=1
        if (colorSelector === rainbowColors.length) {
            colorSelector = 0
        }
    },
    "rainbowRandom": function() {
        this.style.backgroundColor = rgbGen()
    }
}
// begin program

let colorMode = mode.rainbowOrdered
let tiles = 10
let colorSelector = 0
gridGenerator(tiles)

// end program


//generates rows and columns for grid
function gridGenerator(tiles) {
    for (let i = 0; i<tiles; i++) {
        let newTr = document.createElement("tr")
        newTr.setAttribute("id", `row ${i}`)
        newTr.style.height = (100/tiles) + "%"
        gridEl.appendChild(newTr)
    
        for(let n = 0; n<tiles; n++) {
            let newTd = document.createElement("td")
            newTd.setAttribute("id", `${i}-${n}`)
            newTd.addEventListener("mouseover", colorMode )
            newTr.appendChild(newTd)
        }
    }
}

//helper functions

const rgbGen = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
