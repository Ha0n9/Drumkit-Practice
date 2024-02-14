for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML)
        MakeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(events) {
    console.log(events)
    MakeSound(events.key);
    buttonAnimation(events.key)
})

function MakeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
    }

    /* if (this.innerHTML === "w") {
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
        } else if (this.innerHTML === "a") {
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
        } else if (this.innerHTML === "s") {
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
        } else if (this.innerHTML === "d") {
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
        } else if (this.innerHTML === "j") {
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
        } else if (this.innerHTML === "k") {
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
        } else if (this.innerHTML === "l") {
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
        }  */
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

/* function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
} */