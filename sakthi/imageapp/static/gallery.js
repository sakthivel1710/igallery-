const images = [
    "gh8.jpg",
    "gh9.jpg",
    "CEO.jpg",
    "steve.jpg",
    "gojo.jpg"
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});
