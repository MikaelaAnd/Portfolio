
window.addEventListener('load', main);

/** Start of the page */
function main() {
    addEventListeners();
}

/** Global variabel */
let changeText = document.getElementById('changeText');

/** Getting pictures and the changingText id from HTML, making the pictures clickable.*/
function addEventListeners() {
    const aboutMusicPicture = document.getElementById('music-picture');
    const aboutTravelPicture = document.getElementById('travel-picture');
    const aboutMyWorkPicture = document.getElementById('resume-picture');
    const aboutArtPicture = document.getElementById('art-picture');

    aboutMusicPicture.addEventListener('click', showMusicInfo);
    aboutTravelPicture.addEventListener('click', showTravelInfo);
    aboutMyWorkPicture.addEventListener('click', showWorkInfo);
    aboutArtPicture.addEventListener('click', showArtPictures);
}

/** Changing the changeText-paragraph to different content */

function showMusicInfo() {
    const aboutMusic = document.getElementById('aboutMusic');
    changeText.innerHTML = aboutMusic.innerHTML;
}

function showWorkInfo() {
    const aboutMyWork = document.getElementById('aboutMyWork');
    changeText.innerHTML = aboutMyWork.innerHTML;
}

/** Connecting to the other javascript-file with showSlides. */
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