
window.addEventListener('load', main);


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
    aboutTravelPicture.addEventListener('click', startSlideShowAnimation);
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

function startSlideShowAnimation() {
    const aboutTravel = document.getElementById('aboutTravel');
    changeText.innerHTML = aboutTravel.innerHTML;  
}

function showArtPictures() {
    const aboutArt = document.getElementById('aboutArt');
    changeText.innerHTML = aboutArt.innerHTML;

    let liEls = document.querySelectorAll('ul, li');
    let index = 0;
    window.show = function(increase) {
        index = index + increase;
        index = Math.min(
            Math.max(index,0),
            liEls.length-1
            );
        liEls[index].scrollIntoView
        ({behavior: 'smooth'});
    }


}
