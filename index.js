var keys = [];
keys = document.querySelectorAll(".key");


// creates event listeners on all buttons that will trigger a key 
// animation and a sound file(.ogg) with the correct note during 
// a "click" event.
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", function (){
        var keyName = this.textContent;
        chooseNoteByClick(keyName);
        animateKeys(keyName, false);
    });
}

// creates an event listener that will trigger a key animation and a
// sound file(.ogg) with the correct note during a "click" event.



// creates an event listener that will trigger a key animation and a
// sound file(.ogg) with the correct note during a "keydown" event.
document.addEventListener("keydown", function(event) {
    chooseNote(event.key);
    animateKeys(event.key, true);
    
})


// this function takes care of animating the keys whether the user clicks 
// on the key, or triggers the key with the their keyboard.
function animateKeys(currentKey, keydown){
    // checks whether or not this function is being called as a result
    // of a "keydown" event, or a click. if a "keydown" event is true,
    // then the currentKey value needs to be translated into a note.
    currentKey = translateSharpToS(currentKey);
    if(keydown){
        currentKey = translateKeyDown(currentKey);
    }
    var keyClass = document.querySelector("#" + currentKey);
    var blackKey = false;

    // decides what class name will be added to the currentKey button
    // based on whether it has the black or white class.
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


// this is a general function that will add a class with the same name as the "color"
// string that is passed into the function.
function addColorClass(keyClass, color){
    keyClass.classList.add(color + "-pressed");
        setTimeout( function() {
            keyClass.classList.remove(color + "-pressed");
        }, 200);
}

function translateSharpToS(key) {
    if(key.length === 2 && key[1] !== "3"){
        return key [0] + "s";
    }
    if(key.length === 3){
        return key[0] + "s" + "3";
    } else {
        return key;
    }
}



//Translates the "keydown" event's key value into the button id of the
//correct note
function translateKeyDown(currentKey){
    switch(currentKey){
        case "z":
            return "c";
        case "s":
            return "c#";
        case "x":
            return "d";
        case "d":
            return "d#";
        case "c":
            return "e";
        case "v":
            return "f";
        case "g":
            return "f#";
        case "b":
            return "g";
        case "h":
            return "g#";
        case "n":
            return "a";
        case "j":
            return "a#";
        case "m":
            return "b";
        case "q":
            return "c3";
        case "2":
            return "c#3";
        case "w":
            return "d3";
        case "3":
            return "d#3";
        case "e":
            return "e3";
        case "r":
            return "f3";
        case "5":
            return "f#3";
        case "t":
            return "g3";
        case "6":
            return "g#3";
        case "y":
            return "a3";
        case "7":
            return "a#3";
        case "u":
            return "b3";
        default:

            console.log("a key was pressed");
            return "random key";
    }
}

// searches for the correct sound file(.ogg) based on the current key, then
// plays that sound file during a "keydown" event.
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

        case "q":
            var c = new Audio("sounds/c3sound.ogg");
            c.play();
            break;
        case "2":
            var cs = new Audio("sounds/cs3sound.ogg");
            cs.play();
            break;
        case "w":
            var d = new Audio("sounds/d3sound.ogg");
            d.play();
            break;
        case "3":
            var ds = new Audio("sounds/ds3sound.ogg");
            ds.play();
            break;
        case "e":
            var e = new Audio("sounds/e3sound.ogg");
            e.play();
            break;
        case "r":
            var f = new Audio("sounds/f3sound.ogg");
            f.play();
            break;
        case "5":
            var fs = new Audio("sounds/fs3sound.ogg");
            fs.play();
            break;
        case "t":
            var g = new Audio("sounds/g3sound.ogg");
            g.play();
            break;
        case "6":
            var gs = new Audio("sounds/gs3sound.ogg");
            gs.play();
            break;
        case "y":
            var a = new Audio("sounds/a4sound.ogg");
            a.play();
            break;
        case "7":
            var as = new Audio("sounds/as4sound.ogg");
            as.play();
            break;
        case "u":
            var b = new Audio("sounds/b4sound.ogg");
            b.play();
            break;
        default:
            console.log("a key was pressed");
    }
}

// searches for the correct sound file(.ogg) based on the current key, then
// plays that sound file during a "click" event.
function chooseNoteByClick(key){
    key = translateSharpToS(key);
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

        case "c3":
            var c = new Audio("sounds/c3sound.ogg");
            c.play();
            break;
        case "cs3":
            var cs = new Audio("sounds/cs3sound.ogg");
            cs.play();
            break;
        case "d3":
            var d = new Audio("sounds/d3sound.ogg");
            d.play();
            break;
        case "ds3":
            var ds = new Audio("sounds/ds3sound.ogg");
            ds.play();
            break;
        case "e3":
            var e = new Audio("sounds/e3sound.ogg");
            e.play();
            break;
        case "f3":
            var f = new Audio("sounds/f3sound.ogg");
            f.play();
            break;
        case "fs3":
            var fs = new Audio("sounds/fs3sound.ogg");
            fs.play();
            break;
        case "g3":
            var g = new Audio("sounds/g3sound.ogg");
            g.play();
            break;
        case "gs3":
            var gs = new Audio("sounds/gs3sound.ogg");
            gs.play();
            break;
        case "a3":
            var a = new Audio("sounds/a4sound.ogg");
            a.play();
            break;
        case "as3":
            var as = new Audio("sounds/as4sound.ogg");
            as.play();
            break;
        case "b3":
            var b = new Audio("sounds/b4sound.ogg");
            b.play();
            break;
        default:
            console.log("a key was pressed");
    }
}