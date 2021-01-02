

document.addEventListener("keydown", function(event) {
    chooseNote(event.key);
})

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