/* POPUP JS */

const joinBtn = document.querySelector('.join-btn');
const okBtn = document.querySelector('.ok-btn');
const pageContent = document.querySelector('.page-content')

joinBtn.addEventListener('click', () => {
    addPopUp();
    console.log("Join button clicked");
})
okBtn.addEventListener('click', () => {
    removePopUp();
    console.log("OK button clicked");

})
document.querySelector('.popup-page').addEventListener('click', () => {
    removePopUp();
    console.log("OK button clicked");
})

document.addEventListener('keydown', () => {
    removePopUp();
    console.log("Key pressed - Popup closed");
});
document.addEventListener('scroll', () => {
    removePopUp();
    console.log("Key pressed - Popup closed");
});

function addPopUp() {
   document.querySelector('.popup-page').classList.add("popup-oversize");
   pageContent.classList.add("dim-page");
   joinBtn.classList.add("join-btn-part");
}
function removePopUp() {
    document.querySelector('.popup-page').classList.remove("popup-oversize");
    joinBtn.classList.remove("join-btn-part");
    pageContent.classList.remove("dim-page");
 }

