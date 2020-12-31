

document.addEventListener("keydown", function(event) {
    chooseNote(event.key);
})

function chooseNote(key){
    switch(key){
        case "z":
            var c = new Audio("sounds/crash.mp3");
            c.play();
            break;
        case "x":
            var d = new Audio("sounds/snare.mp3");
            d.play();
        default:
            console.log("a key was pressed");
    }
}