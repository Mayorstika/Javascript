// Get modal elements
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Get all images in the gallery
const images = document.querySelectorAll(".gallery-img");

// Loop through images and add click event listener
images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";   // Show modal
        modalImg.src = image.src;       // Set modal image to clicked image
        captionText.innerHTML = image.alt; // Set caption text
    });
});

// Close the modal when close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when user clicks outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
