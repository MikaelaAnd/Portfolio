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
    const changeText = document.getElementById('changeText')
    const aboutMePicture = document.getElementById('mikaela-picture')
    
    aboutMePicture.addEventListener('click', showMikaelaInfo);
    
}


function showMikaelaInfo() { 
    const aboutMe = document.getElementById('changeText')
    aboutMe.innerText = changeText 
    
}







// const newText = document.getElementById('changeText');
// const aboutMe = document.getElementById('mikaelaInfo')
// aboutMe.classList.toggle(".hidden")


// musicList.onclick = showSpotify;
// const musicList = document.getElementById('music');

// function showSpotify() {
//     const spotifyList = document.getElementById('musicList');
            
//     changeText.innerHTML = spotifyList;
// }
