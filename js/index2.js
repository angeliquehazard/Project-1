let cardImages = [
    "../images/pacman-blueghost.jpeg",
    "../images/pacman-sue.jpeg",
    "../images/pacman.jpeg",
    "../images/pacman-cherries.jpeg",
    "../images/pacman-inky.jpeg",
    "../images/pacman-clyde.jpeg",
    "../images/pacman-pinky.jpeg",
    "../images/pacman-strawberry.jpg",
    "../images/pacman-blueghost.jpeg",
    "../images/pacman-sue.jpeg",
    "../images/pacman.jpeg",
    "../images/pacman-cherries.jpeg",
    "../images/pacman-inky.jpeg",
    "../images/pacman-clyde.jpeg",
    "../images/pacman-pinky.jpeg",
    "../images/pacman-strawberry.jpg"
];

let score = 0;
let timer = 0; 
let start = document.getElementById("deal");
let choice1 = null;
let choice2 = null;
let checkMatch = [];
let indexState = [];

//click start button to start timer
document.getElementById("deal").addEventListener("click", function() {
    setInterval(changeTimer, 1000);
    function changeTimer() {
        document.getElementById("time").innerHTML = ("Time " + timer++);
    }});

//turn logic
let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    let rand = Math.floor(Math.random() * (cardImages.length - 1));
            boxes[i].innerHTML = "<img src='" + cardImages[rand] + " 'alt='image' class='hidden' width=100% height=100%>";
            boxes[i].style.width = "10rem";
            boxes[i].style.height = "10rem";
            boxes[i].addEventListener("click", function () {
                if (checkMatch.length == 0) {
                    boxes[i].children[0].classList.remove('hidden');
                    checkMatch.push(boxes[i].children[0].currentSrc);
                    indexState[0] = i;
                    console.log("checkMatch");
                    return null;

                }
                if(checkMatch.length != 0 && boxes[i].children[0].currentSrc == checkMatch[0]) {
                    boxes[i].children[0].classList.remove('hidden')
                    checkMatch.push(boxes[i].children[0].currentSrc);
                    document.getElementById("score").innerHTML = ("Score " + 10);
                    checkMatch = [];
                    return null;
                }
                else if (checkMatch != 0 && boxes[i].children[0].currentSrc != checkMatch[0]) {
                    boxes[i].children[0].classList.remove('hidden')
                    checkMatch.push(boxes[i].children[0].currentSrc);
                    setTimeout(() => {
                    boxes[indexState[0]].children[0].classList.add('hidden');
                    // boxes[i].children[0].classLiss.add('hidden');
            }, 1000);
            checkMatch = [];
            return null;
        }})}
        
                // if(checkMatch.length !== 0 && boxes[i].children[0].currentSrc != checkMatch[0]) {
                //     setTimeout(() => {
                //             boxes[i].children[0].classList.add('hidden');
                //             boxes[indexState[0]].children[0].classList.add('hidden');
                //         }, 1000);
                //         checkMatch = [];
                //         return null;
                // }})


    // cardImages.splice(rand, 1);}
            


        