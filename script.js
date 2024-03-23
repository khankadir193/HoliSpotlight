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
const carousel = document.getElementById('crousalIcon');

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
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

// tab switching code
const tabs = document.querySelectorAll(".schedule-tab > button");
let content = document.querySelectorAll(".schedule-content");
console.log(tabs);
console.log(content);
tabs.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
 
    content.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});