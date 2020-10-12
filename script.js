// initialize array to reference current slide
var slideIndex = [0,0,0,0,0]
// initialize the array for the slideshow ids
var slideshowId = ["kmeans-coloring","endless-battle","car-rental","great-plateau", "candy-cannon"]
// show all of the first slides
// showSlides(0,0)
// showSlides(0,1)
// showSlides(0,2)

function changeSlides(n, id){
    // Change the slide that is being shown
    showSlides(slideIndex[id] += n, id)
    // console.log("Slide number in change function:" + slideIndex[id])
}

// Function for showing slides
function showSlides(slide, id){
    console.log("Slide number in show function:" + slideIndex[id])
    // Get the carousel for the corresponding id
    var carousel = document.getElementById(slideshowId[id]).querySelector(".carousel")
    // var carousel = project.getElementsByClassName("slideshow-container")
    // Get each slide for the corresponding id
    var slides = carousel.getElementsByClassName("slide")
    console.log(slides.length)

    // Check the slide num if larger than slides length or smaller than 1
    if (slide >= slides.length) {
        slideIndex[id] = 0
    }
    if (slide < 0) {
        slideIndex[id] = slides.length - 1
    }

    // Get the size of the carousel and set the style   
    var size = carousel.clientWidth
    console.log("Size: "+size)
    carousel.style.transition = "transform 0.4s ease-in-out"
    carousel.style.transform = "translateX(" + (-size * slideIndex[id]) + "px)"
}