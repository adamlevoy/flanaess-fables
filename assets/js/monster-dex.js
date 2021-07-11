const gallery = document.querySelector('.gallery');
const images = Array.from(document.querySelectorAll('.gallery img'));
const modal = document.querySelector('.modal');
const nextButton = modal.querySelector('.nextButton');
const prevButton = modal.querySelector('.prevButton');
let currentImage;

// open modal event handler
function openModal() {
  console.log('Open sesame!')
  modal.classList.add('open');
}

function closeModal() {
  console.log('Closed modal.')
  modal.classList.remove('open');
}

// show image & data
function showImage(el) {
  openModal();
  console.log(`Showing image ${el.src}`);
  // show image
  modal.querySelector('img').src = el.src;
  // show data
  modal.querySelector('h2').textContent = el.alt;
  modal.querySelector('p').textContent = el.dataset.description;
  // set current image
  currentImage = el;
}

// show next image
function showNextImage() {
  showImage(currentImage.nextElementSibling);
}

// show previous image
function showPrevImage() {
  showImage(currentImage.previousElementSibling);
}

// handle keyup events
function handleKeyUp(e) {
  if(e.key === 'Escape') return closeModal();
  if(e.key === 'ArrowRight') return showNextImage();
  if (e.key === 'ArrowLeft') return showPrevImage();
}

// close modal on click outside
function handleClickOutside(e) {
  if (e.target === e.currentTarget) closeModal();
}

// EVENT LISTENERS
images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
images.forEach(image => image.addEventListener('keyup', e => {
  if (e.key === 'Enter') showImage(e.currentTarget);
}))
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
window.addEventListener('keyup', handleKeyUp);
modal.addEventListener('click', handleClickOutside);
