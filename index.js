function playsound(val) {
    // var val = this.innerHTML;
    switch (val) {
        case "w":
            // console.log("ww");
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;

        default:
            console.log("invalid");
            break;
    }
}
var keys = document.querySelectorAll(".keyname");
// console.log(keys.length);
for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i].innerHTML);
    keys[i].addEventListener("click", function() {
        // console.log(ev);
        playsound(this.innerHTML);
    });
}
document.addEventListener("keypress", function(ev) {
    playsound(ev.key);
})