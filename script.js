const rulesBtn = document.getElementById('showDialogButton');
const customeDialog = document.getElementById('customDialog');


rulesBtn.addEventListener('click',function (){
    customeDialog.showModal();
});

document.querySelector('button').addEventListener('click',function (){
    customeDialog.close();
})