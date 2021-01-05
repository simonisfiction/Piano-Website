var keys = [];
keys = document.querySelectorAll(".key");

for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", handleClick);
}

function handleClick(){
    var keyName = this.innerHTML;
    chooseNoteByClick(keyName);
    animateKeys(keyName);
}

document.addEventListener("keydown", function(event) {
    chooseNote(event.key);
    animateKeys(event.key);
    
})


function animateKeysOnKeydown(currentKey){
    
}

function animateKeysOnClick(currentKey){
    var keyClass = document.querySelector("#" + currentKey);
    var blackKey = false;
    for(var i = 0; i < keyClass.classList.length; i++){
        if(keyClass.classList[i].includes("black")){
            blackKey = true;
        }
    }
    if(blackKey){
        addColorClass(keyClass, "black");
    } else {
        addColorClass(keyClass, "white");
    }
}

function addColorClass(keyClass, color){
    keyClass.classList.add(color + "-pressed");
        setTimeout( function() {
            keyClass.classList.remove(color + "-pressed");
        }, 200);
}


function chooseNote(key){
    switch(key){
        case "z":
            var c = new Audio("sounds/c2sound.ogg");
            c.play();
            break;
        case "s":
            var cs = new Audio("sounds/cs2sound.ogg");
            cs.play();
            break;
        case "x":
            var d = new Audio("sounds/d2sound.ogg");
            d.play();
            break;
        case "d":
            var ds = new Audio("sounds/ds2sound.ogg");
            ds.play();
            break;
        case "c":
            var e = new Audio("sounds/e2sound.ogg");
            e.play();
            break;
        case "v":
            var f = new Audio("sounds/f2sound.ogg");
            f.play();
            break;
        case "g":
            var fs = new Audio("sounds/fs2sound.ogg");
            fs.play();
            break;
        case "b":
            var g = new Audio("sounds/g2sound.ogg");
            g.play();
            break;
        case "h":
            var gs = new Audio("sounds/gs2sound.ogg");
            gs.play();
            break;
        case "n":
            var a = new Audio("sounds/a3sound.ogg");
            a.play();
            break;
        case "j":
            var as = new Audio("sounds/as3sound.ogg");
            as.play();
            break;
        case "m":
            var b = new Audio("sounds/b3sound.ogg");
            b.play();
            break;
        default:
            console.log("a key was pressed");
    }
}

function chooseNoteByClick(key){
    switch(key){
        case "c":
            var c = new Audio("sounds/c2sound.ogg");
            c.play();
            break;
        case "cs":
            var cs = new Audio("sounds/cs2sound.ogg");
            cs.play();
            break;
        case "d":
            var d = new Audio("sounds/d2sound.ogg");
            d.play();
            break;
        case "ds":
            var ds = new Audio("sounds/ds2sound.ogg");
            ds.play();
            break;
        case "e":
            var e = new Audio("sounds/e2sound.ogg");
            e.play();
            break;
        case "f":
            var f = new Audio("sounds/f2sound.ogg");
            f.play();
            break;
        case "fs":
            var fs = new Audio("sounds/fs2sound.ogg");
            fs.play();
            break;
        case "g":
            var g = new Audio("sounds/g2sound.ogg");
            g.play();
            break;
        case "gs":
            var gs = new Audio("sounds/gs2sound.ogg");
            gs.play();
            break;
        case "a":
            var a = new Audio("sounds/a3sound.ogg");
            a.play();
            break;
        case "as":
            var as = new Audio("sounds/as3sound.ogg");
            as.play();
            break;
        case "b":
            var b = new Audio("sounds/b3sound.ogg");
            b.play();
            break;
        default:
            console.log("a key was pressed");
    }
}