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
    let changeText = document.getElementById('changeText');
    const aboutMePicture = document.getElementById('mikaela-picture');
    const aboutMusicPicture = document.getElementById('music-picture');
    
    
    aboutMusicPicture.addEventListener('click', showMusicInfo);
    aboutMePicture.addEventListener('click', showMikaelaInfo);
    
}
function showMusicInfo() {
    const aboutMusic = document.getElementById('aboutMusic');
    changeText.innerHTML = aboutMusic.innerHTML;
}


function showMikaelaInfo() { 
    const aboutMe = document.getElementById('aboutMe');
    changeText.innerHTML = aboutMe.innerHTML;  
}
 


