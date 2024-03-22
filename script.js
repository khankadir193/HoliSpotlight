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
  console.log('clicked......................');
    showImage(currentIndex - 1);
}

function nextImage() {
  console.log('nextButtoonClicked................................');
    showImage(currentIndex + 1);
}


/*
//tab switching code
const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".schedule-content");

tabs.forEach((tab, i, buttons) => {
    console.log('tab...',tab);
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach((t) => {
            t.classList.remove('active');
        });

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Hide all content elements
        content.forEach((c) => {
            c.classList.remove('active');
            c.style.display = 'none';
        });

        // Show corresponding content based on the clicked tab
        // if (i === 0) {
        //     content[0].classList.add('active');
        //     content[0].style.display = 'block';
        //     content[0].style.display = 'Grid';
        //     // buttons[1].classList.add('active');
        //     // buttons[0].style.display = 'none';
        // } else if (i === 1) {
        //     content[1].classList.add('active');
        //     content[1].style.display = 'block';
        //     // content[1].style.display = 'flex';
        //     buttons[0].classList.add('active');
        //     buttons[0].style.display = 'block';
        //     buttons[0].style.display = 'flex';
        //     buttons[1].style.display = 'none';
        // }
    });
});

// Trigger click event on the first tab to make it active initially
tabs[0].click();
*/

// Abhishek's tab switching code
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