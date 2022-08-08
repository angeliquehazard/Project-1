let cardImages = {
    blueGhost: "https://i.imgur.com/nEofhgx.png", 
    sue: "https://i.imgur.com/0D0tsvT.png", 
    pacman: "https://i.imgur.com/O1Prg8x.png",
    cherries: "https://i.imgur.com/3XRSM1A.png",
    orange: "https://i.imgur.com/lDO7yXf.png",
    clyde: "https://i.imgur.com/G2QCU6j.png",
    pinky: "https://i.imgur.com/7Ylz5eT.png",
    strawberry: "https://i.imgur.com/5QswQ6r.png"
};

let box = document.getElementsByClassName("box");
    //this is an array of all the box divs
let score = 0;
let timer = 0;


// for timer (on first click)
// if (click === -1) {
//     timer = setInterval(function() {
//       time++;
//       timeElt.innerHTML = time;
//     }, 1000);

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

    // add event listener for box
    
    function image() {
            box.style = cardImages.cherries;
         }; 
    box[0].addEventListener("click", function() {
        image();
    }); 
      
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
    //add funtion to increase score


//score



//show win box