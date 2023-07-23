
const refreshBtn = document.querySelector(".refresh");
const boxes = document.querySelectorAll(".rect-box");
const hexVals = document.querySelectorAll(".hex-val");

function genHex(){
    let col = Math.floor(Math.random()*0xffffff).toString(16).toUpperCase();
    return `#${col}`;
}

function genColors(){
    for( let i=0; i<boxes.length; i++){
        const color = genHex();
        boxes[i].style.background = color;
        hexVals[i].innerHTML = `${color}`;
    }
}

genColors();

refreshBtn.addEventListener("click", genColors);

const colors = document.querySelectorAll(".color");

colors.forEach( (color) => {
    color.addEventListener("click", () => {
        const hex = color.querySelector(".hex-val");
        const hexCol = hex.innerText;
        // console.log(hexCol);
        navigator.clipboard.writeText(hexCol);

        hex.innerHTML = "COPIED";
        setTimeout(() => {
            hex.innerHTML = `${hexCol}`;
        },700);

    });
})