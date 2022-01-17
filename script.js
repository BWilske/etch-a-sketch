let gridEl = document.getElementById("grid")


//generates rows and columns for grid
for (let i = 0; i<10; i++) {
    let newTr = document.createElement("tr")
    let row = `row ${i}`
    newTr.setAttribute("id", row)
    console.log(newTr)
    gridEl.appendChild(newTr)
    for(let n = 0; n<10; n++) {
        let newTd = document.createElement("td")
        newTd.setAttribute("id", `${i}-${n}`)
        console.log(row)
        newTr.appendChild(newTd)

    }
}