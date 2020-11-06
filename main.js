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

window.onload = main;

function main() {
    addEventListeners()
}

function addEventListeners() {
    const musicList = document.getElementById('music');
    const mikaelaInfo = document.getElementById('mikaela')
    
    musicList.onclick = showSpotify;
    mikaelaInfo.onclick = showMikaelaInfo;

}

function showSpotify() {
    const spotifyList = document.getElementById('musicList');
    const changeText = document.getElementById('changeText');
    
    changeText.innerHTML = spotifyList;
}

function showMikaelaInfo() {
    const aboutMe = document.getElementById('mikaela');
    const changeText = document.getElementById('changeText');
    
    changeText.innerHTML = aboutMe;
}
