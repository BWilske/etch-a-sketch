
//holds color functions
const mode = {
    "whiteToBlack": function(){
        this.style.backgroundColor = black
    },
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
const gridEl = document.getElementById("grid")
let colorSelector = 0
let colorMode = mode.rainbowOrdered
let tiles = 100

gridGenerator(tiles)

// end program

//helper functions

//generates rows and columns for grid
function gridGenerator(tiles) {
    colorSelector= 0
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

// returnsrgb value in form rgb(xx,xx,xx)

const rgbGen = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
} 
