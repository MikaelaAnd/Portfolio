// window.onload = main;

// function main() {
//     startSlideShowAnimation();
// }

// function startSlideShowAnimation() {
//     setInterval(changeActiveImage, 2000);
//         changeActiveImage();
// }

// function changeActiveImage() {
//     const images = document.querySelectorAll('.slideshow-container > img');

//         for(let i = 0; i < images.length; i++) {
//             if (images[i].classList.contains('show')) {
//                 images[i].classList.remove('show');

//                 let nextIndex = (i + 1) % images.length;

//                 images[nextIndex].classList.add('show');
//                 break;
//             }
//         }
// }// SLIDESHOW

window.addEventListener('load', main);

function main() {
    addEventListeners()
}

function addEventListeners() {
    const aboutMePicture = document.getElementById('mikaela-picture')
    
    aboutMePicture.addEventListener('click', showMikaelaInfo);
    
}

function showMikaelaInfo() { 
    let changeText = document.getElementById('changeText');
    const mikaelaInfo = document.getElementById('mikaelaInfo');
    changeText.innerHTML = mikaelaInfo.innerHTML;  
}
 


