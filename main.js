
window.addEventListener('load', main);

/**
 * Start of the page
 */
function main() {
    addEventListeners();
}
/**
 * 
 * Getting pictures and the changingText id from HTML, making the pictures clickable.
 */
function addEventListeners() {
    let changeText = document.getElementById('changeText');
    const aboutMusicPicture = document.getElementById('music-picture');
    const aboutTravelPicture = document.getElementById('travel-picture');
    const aboutMePicture = document.getElementById('mikaela-picture');
    const aboutArtPicture = document.getElementById('art-picture');


    aboutMusicPicture.addEventListener('click', showMusicInfo);
    aboutTravelPicture.addEventListener('click', showTravelInfo);
    aboutMePicture.addEventListener('click', showMikaelaInfo);
    aboutArtPicture.addEventListener('click', showArtPictures);

}

/**
 * Changing the changeText-id to the different content
 */

function showMusicInfo() {
    const aboutMusic = document.getElementById('aboutMusic');
    changeText.innerHTML = aboutMusic.innerHTML;
}

function showMikaelaInfo() {
    const aboutMe = document.getElementById('aboutMe');
    changeText.innerHTML = aboutMe.innerHTML;
}

/**
 * Connecting to the other javascript-file with showSlides.
 */
function showTravelInfo() {
    const aboutTravel = document.getElementById('aboutTravel');
    changeText.innerHTML = aboutTravel.innerHTML;
    showSlides(1, 1);
}

function showArtPictures() {
    const aboutArt = document.getElementById('aboutArt');
    changeText.innerHTML = aboutArt.innerHTML
    showSlides(1, 0);
}



