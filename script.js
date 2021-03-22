// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click('click',closeModal);
closeBtn.addEventListener

// Function to open Modal
function openModal(){
 modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
 modal.style.display = 'none';
}


