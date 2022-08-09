// let cardImages = {
//     blueGhost: "../images/pacman-blueghost", 
//     sue: "../images/pacman-sue.jpeg", 
//     pacman: "../images/pacman-pacman.jpeg",
//     cherries: "../images/pacman-cherries.jpeg",
//     inky: "../images/pacman-inky.jpeg",
//     clyde: "../images/pacman-clyde.jpeg",
//     pinky: "../images/pacman-pinky.jpeg",
//     strawberry: "../images/pacman-strawberry.jpg"
// };

let box = document.getElementById("box1");
    //this is an array of all the box divs
let score = 0;
let timer = 0;
let start = document.getElementById("deal");


// for timer (on first click)
// if (click === -1) {
// start.addEventListener("click", setInterval) {
//     timer = setInterval(function() {
//       time++;
//       timeElt.innerHTML = time;
//     }, 1000);
// };

//initialize board
    //randomize cards
        //math.floor(math.random() * 17); - returns a random integer from 0 to 16
    //// Shuffle array
        // const shuffled = array.sort(() => 0.5 - Math.random());

    // // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, n);
    
    //all cards face down
    //set score to zero
    //set time to zero

//handle turn

    // add event listener for box to change image

    function image() {
        box.style.backgroundImage = "url('../images/pacman-cherries.jpeg";;
    };
    box.addEventListener("click", function() {
        image();
    });

    // function changeImage() {
    //     document.getElementsByClassName("box").changeImage = cardImages.cherries;
    //  }; 
    // box[0].addEventListener("click", function() {
    //     changeImage();
    // });
   
    // box[0].addEventListener("click", function () {
    //     alert("Hello world");
    //     image();
    // });
    // When you called the image() function, what does it mean?
    
    // function image() {
    // box.style = cardImages.cherries;
    // };
    
    // I think you need to debug this line box.style = cardImages.cherries; 
    // image.addEventListener('click', function(){
    //     changeImage();
    // });

    // function changeImage(){
    //     image.src = './squid-dab2.gif';

        // consider (mdn): 
        // function hide(evt) {
        //     // evt.target refers to the clicked <li> element
        //     // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
        //     evt.target.style.visibility = 'hidden';
        //   }
          

    // add function for turnLogic (check for match)
    //
    //add funtion to increase score


//score



//show win box