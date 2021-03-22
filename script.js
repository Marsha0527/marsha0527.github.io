// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click('click',closeModal)[0];
closeBtn.addEventListener
// Listen for outside click
window.addEventListener('click', clickOutside);


// Function to open Modal
function openModal(){
 modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
 modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
 if(e.target == modal){
  modal.style.display = 'none';
 }
}
