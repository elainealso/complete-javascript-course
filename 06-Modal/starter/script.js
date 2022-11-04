'use strict';

// const modal = document.querySelector('.modal'); //modal window -> a graphical control element subordinate to an application's main window.

// const overlay = document.querySelector('.overlay'); //grey part to hide the background

// //modal and overlay has the class hidden -> in the CSS file, the class hidden is 'display: none' because according to the buttons clicked, they appear or disappear
// //display: none -> not visible
// //display: block -> visible

// const btnCloseModal = document.querySelector('.close-modal');

// //To select multiple buttons at the same time
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal); //NodeList(3) [ button.show-modal, button.show-modal, button.show-modal ]

// for (let i = 0; i < btnsOpenModal.length; i++)
//   //console.log(btnsOpenModal[i].textContent);// Show modal 1, Show modal, 2 Show modal 3 -> basically an array holding all of the buttons -> each iteration of the loop
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked'); //when we click the button (in the browser), Button clicked appears in the console
//     //(below) we have to remove the class hidden from the modal and remove the overlay
//     modal.classList.remove('hidden'); //the dot is only for the selector ('.xxx')
//     overlay.classList.remove('hidden');
//   });
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// /*
// //right now, we can't close the window using the x, just reloading the page
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   //clicking the area outside should also close the window
// });
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// //Instead of the repetitive code above:
// */
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//hitting the escape key (esc) to close the modal
//respond to keyboard events (global event) -> addEventListener
document.addEventListener('keydown', function (event) {
  //event keydown -> as soon as we hit any key
  //console.log('A key was pressed');
  //console.log(event);//after adding the parameter 'event'in the function, when we hit any key, it shows in the browser which key was pressed
  console.log(event.key); //key is the property name from the object -> escape is the key that I pressed, or command, or 3, etc
  /*
  if (event.key === 'Escape') {
    //console.log('Esc was pressed') //when I hit Esc, this message is printed
    //when do I want to close the modal? when it's visible -> when does not contain the class hidden
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    //code above refactored:
*/
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
