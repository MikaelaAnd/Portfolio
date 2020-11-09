

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


window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    let changeText = document.getElementById('changeText');
    const aboutMusicPicture = document.getElementById('music-picture');
    const aboutTravelPicture = document.getElementById('travel-picture');
    const aboutMePicture = document.getElementById('mikaela-picture');
    const aboutArtPicture = document.getElementById('art-picture');
    
    
    aboutMusicPicture.addEventListener('click', showMusicInfo);
    aboutTravelPicture.addEventListener('click', startSlideShowAnimation);
    aboutMePicture.addEventListener('click', showMikaelaInfo);
    aboutArtPicture.addEventListener('click', showArtPictures)
    
}
function showMusicInfo() {
    const aboutMusic = document.getElementById('aboutMusic');
    changeText.innerHTML = aboutMusic.innerHTML;
}


function showMikaelaInfo() { 
    const aboutMe = document.getElementById('aboutMe');
    changeText.innerHTML = aboutMe.innerHTML;  
}

function showArtPictures() {
    const aboutArt = document.getElementById('aboutArt');
    changeText.innerHTML = aboutArt.innerHTML;
}

function startSlideShowAnimation() {
    const aboutTravel = document.getElementById('aboutTravel');
    changeText.innerHTML = aboutTravel.innerHTML;
    setInterval(changeActiveImage, 2000);
    changeActiveImage();

    }

// function changeActiveImage() {
//     const images = document.querySelectorAll('.travel-slideshow > img');
        
//         for(let i = 0; i < images.length; i++) {
//             if (images[i].classList.contains('show')) {
//                      images[i].classList.remove('show');
        
//                     let nextIndex = (i + 1) % images.length;
        
//                     images[nextIndex].classList.add('show');
//                      break;
//             }
//         }
// }
