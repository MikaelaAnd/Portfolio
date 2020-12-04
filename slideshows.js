/**
 * Get out the pictures from HTML
 */
let slideIndex = [1, 1];
let slideId = ["slide-pics1", "slide-pics2"]


/**
 * These two functions are making the two slideshow's change picture
 * @param {number} n 
 * @param {number} no
 */
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);

}

/** 
 * @param {number} n 
 * @param {number} no 
 */
function showSlides(n, no) {
    let i;
    let x = document.querySelectorAll('#changeText .' + slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
