

const characters="0123456789ABCDEF";


function generateColors(){
    let color="#";
    
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*characters.length);
        color+=characters[randomIndex];

    }
    return color;

}

function setcolor(){
    for (let i=1; i<=5; i++){
        let color = generateColors();

        let box= document.getElementById("box"+i);
        box.style.backgroundColor=color;

        box.textContent= color;

    }
}