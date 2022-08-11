// let cardImages = [
//     "../images/pacman-blueghost.jpeg",
//     "../images/pacman-sue.jpeg",
//     "../images/pacman.jpeg",
//     "../images/pacman-cherries.jpeg",
//     "../images/pacman-inky.jpeg",
//     "../images/pacman-clyde.jpeg",
//     "../images/pacman-pinky.jpeg",
//     "../images/pacman-strawberry.jpg",
//     "../images/pacman-blueghost.jpeg",
//     "../images/pacman-sue.jpeg",
//     "../images/pacman.jpeg",
//     "../images/pacman-cherries.jpeg",
//     "../images/pacman-inky.jpeg",
//     "../images/pacman-clyde.jpeg",
//     "../images/pacman-pinky.jpeg",
//     "../images/pacman-strawberry.jpg"
// ];

// let score = 0;
// let timer = 0; 
// let start = document.getElementById("deal");
// let choice1 = null;
// let choice2 = null;
// let checkMatch = [];
// let indexState = [];

// //click start button to start timer
// document.getElementById("deal").addEventListener("click", function() {
//     setInterval(changeTimer, 1000);
//     function changeTimer() {
//         document.getElementById("time").innerHTML = ("Time " + timer++);
//     }});

// //Kenneth's suggestion
// // const box1 = document.getElementById('box1');
// // box1.addEventListener('click', function() {
// //     box1.children[0].classList.remove('hidden')
// //     choice1 = box1.children[0].currentSrc;
// // });

// // const box2 = document.getElementById('box2');
// // box2.addEventListener('click', function() {
// //     box2.children[0].classList.remove('hidden')
// //     choice2 = box2.children[0].currentSrc;
// // });


// // for this, figure out how to just get one pair of images per board
// // need to put this all on a loop
// let boxes = document.getElementsByClassName("box");
// for (let i = 0; i < boxes.length; i++) {
//     let rand = Math.floor(Math.random() * (cardImages.length - 1));
//             boxes[i].innerHTML = "<img src='" + cardImages[rand] + " 'alt='image' class='hidden' width=100% height=100%>";
//             boxes[i].style.width = "8rem";
//             boxes[i].style.height = "8rem";
//             boxes[i].addEventListener("click", function () {
//                 if (checkMatch.length === 0) {
//                     boxes[i].children[0].classList.remove('hidden');
//                     checkMatch.push(boxes[i].children[0].currentSrc);
//                     indexState[0] = i;
//                     return null;
//                 }
//                 else if(checkMatch.length != 0 && boxes[i].children[0].currentSrc == checkMatch[0]) {
//                     boxes[i].children[0].classList.remove('hidden');
//                     checkBox.push(boxes[i].children[0].currentSrc);
//                     document.getElementById("score").innerHTML = ("Score " + 10);
//                     checkMatch = [];
//                     return null;
//                 }; 
//                 // else {
//                 //     setTimeout( () => { //change this from arrow to function declaration
//                 //         boxes.children[0].classList.add('hidden')
//                 //     }, 2000)}
        
//     })
//         // cardImages.splice(rand, 1)})
//         //     }
            
        
// //when all boxes are uncovered, show win box
// // if (boxes.classList !== "hidden") {
// //     //show win box
// // }

  
 
// // this shows all the boxes on refresh, then they disappear after 2 seconds - set this if choice1 and choice2 don't match
//      //and just set it to disappear the last two choices
// // for (let box of boxes) {
// //     setTimeout( () => {
// //         box.children[0].classList.add('hidden');
// //     }, 2000)
// // };


// //initialize board
//     //randomize cards
//         //math.floor(math.random() * 17); - returns a random integer from 0 to 16
//     //// Shuffle array
//     //Fisher-Yates shuffle
//     // function shuffle(cardImages) {
//     //     let currentIndex = cardImages.length, randomIndex;
      
//     //     // While there remain elements to shuffle.
//     //     while (currentIndex !== 0) {
      
//     //       // Pick a remaining element.
//     //       randomIndex = Math.floor(Math.random() * currentIndex);
//     //       currentIndex--;
      
//     //       // And swap it with the current element.
//     //       [cardImages[currentIndex], cardImages[randomIndex]] = [
//     //         cardImages[randomIndex], cardImages[currentIndex]];
//     //     }};
      
//     //     start.addEventListener("click", function() {
//     //         shuffle(cardImages);
//     //   });

    
//     //all cards face down
//     //set score to zero
//     //set time to zero

// //handle turn

//     // if images are random, how do i show the image that's on the box?
 
 
//     // function image() {
//     //     boxes.style.backgroundImage = "url('../images/pacman-cherries.jpeg')"
//     // };
//     // boxes.addEventListener("click", function() {
//     //     image();
//     // });

//     //add function to increase score


// //score



// //show win box

// // let cardImages = [
// //     "js/pexels-moldy-vintages-8104324.jpg",
// //     "js/pexels-alleksana-4156998.jpg",
// //     "js/pexels-alvaro-arano-12977998.jpg",
// //     "js/pexels-andrew-neel-13145853.jpg",
// //     "js/pexels-cottonbro-10669673.jpg",
// //     "js/pexels-cup-of-couple-8473212.jpg",
// //     "js/pexels-ekrulila-13025682.jpg",
// //     "js/pexels-hilal-bilir-12861655.jpg",
// //      "js/pexels-moldy-vintages-8104324.jpg",
// //     "js/pexels-alleksana-4156998.jpg",
// //     "js/pexels-alvaro-arano-12977998.jpg",
// //     "js/pexels-andrew-neel-13145853.jpg",
// //     "js/pexels-cottonbro-10669673.jpg",
// //     "js/pexels-cup-of-couple-8473212.jpg",
// //     "js/pexels-ekrulila-13025682.jpg",
// //     "js/pexels-hilal-bilir-12861655.jpg"
      
// // ];
// // let box = document.getElementsByClassName("box");


// // for (let i = 0; i < box.length; i++) {
// //     let rand = Math.floor(Math.random() * (cardImages.length - 1));
// //     box[i].innerHTML = "<img src='" + cardImages[rand] + "' alt='image' class='hidden' width=100% height=100%>"
// //     box[i].style.width = "8rem"
// //     box[i].style.height = "8rem"
// // }cardImages.splice(rand, 1);
// //         //this is an array of all the box divs
// //     let score = 0;
// //     let timer = 0;
//     // for timer (on first click)
//     // if (click === -1) {
//     //     timer = setInterval(function() {
//     //       time++;
//     //       timeElt.innerHTML = time;
//     //     }, 1000);
//     //initialize board
//         //randomize cards
//             //math.floor(math.random() * 17); - returns a random integer from 0 to 16
//         //// Shuffle array
//             // const shuffled = array.sort(() => 0.5 - Math.random());
//         // // Get sub-array of first n elements after shuffled
//         // let selected = shuffled.slice(0, n);
//         //all cards face down
//         //set score to zero
//         //set time to zero
//     //handle turn
//         // add event listener for box to change image
//         // function image() {
//         //         box.style.backgroundImage = "url('js/pexels-moldy-vintages-8104324.jpg')"
//         //      };
//         // box.addEventListener("click", function() {
//         //     image();
//         // });
//         // function changeImage() {
//         //     document.getElementsByClassName("box").changeImage = cardImages.cherries;
//         //  };
//         // box[0].addEventListener("click", function() {
//         //     changeImage();
//         // });
//         // box[0].addEventListener("click", function () {
//         //     alert("Hello world");
//         //     image();
//         // });
//         // When you called the image() function, what does it mean?
//         // function image() {
//         // box.style = cardImages.cherries;
//         // };
//         // I think you need to debug this line box.style = cardImages.cherries;
//         // image.addEventListener('click', function(){
//         //     changeImage();
//         // });
//         // function changeImage(){
//         //     image.src = './squid-dab2.gif';
//             // consider (mdn):
//             // function hide(evt) {
//             //     // evt.target refers to the clicked <li> element
//             //     // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
//             //     evt.target.style.visibility = 'hidden';
//             //   }
//         // add function for turnLogic (check for match)
//         //
//         //add funtion to increase score
//     //score