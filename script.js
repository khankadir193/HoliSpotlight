const rulesBtn = document.getElementById('showDialogButton');
const customeDialog = document.getElementById('customDialog');


rulesBtn.addEventListener('click',function (){
    customeDialog.showModal();
});

document.querySelector('button').addEventListener('click',function (){
    customeDialog.close();
})

//crousal code 
let currentIndex = 0;
const totalImages = document.querySelectorAll('.crousal-img').length;
const carousel = document.getElementById('image-carousel');

function showImage(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevImage() {
  console.log('clicked......................');
    showImage(currentIndex - 1);
}

function nextImage() {
  console.log('nextButtoonClicked................................');
    showImage(currentIndex + 1);
}