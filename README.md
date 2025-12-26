# Ex.07 Design of Interactive Image Gallery
## Date:26/12/2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
index.html

<html>
<head>
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="no.css">
</head>
<body>

    <h1>Image Gallery</h1>

    <div class="gallery-container">
        <img id="galleryImage" src="gh8.jpg" alt="Gallery Image" width="600" height="25">
        
        <div class="buttons">
            <button id="prevBtn">Previous</button>
            <button id="nextBtn">Next</button>
        </div>
    </div>
    <br>

    <script src="gallery.js"></script>
    <br>

     <footer>
        <p>&copy; Developed by SAKTHIVEL (25014510)</p>
    </footer>
</body>
</html>

no.css

body {
    font-family:  aqua;
    background-color: #f4f4f4;
    text-align: center;
}

h1 {
    margin-top: 10px;
}

.gallery-container {
      width: 300px;
    margin: 20px auto;
    background: cyan;
    padding: 20px;
    border-radius: 5px;

    
}

.gallery-container img {
         width: 100%;
    height: 200px;
    object-fit: fit;
    border-radius: 5px;
}
    

.buttons {
    margin-top: 15px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 5px;
    border: lime;
    border-radius: 8px;
    background-color:cyan;
    color:violet;
    cursor: pointer;
}

button:hover {
    background-color: #1111fb;
}
footer {
    margin-top: auto;
    background-color: #141313;
    color: rgb(244, 12, 12);
    padding: 15px 0;
    font-size:14px;
}

gallery.js

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


```

## OUTPUT:

![alt text](<Screenshot (63).png>)

![alt text](<Screenshot (64).png>)

![alt text](<Screenshot (65).png>)

![alt text](<Screenshot (66).png>)

![alt text](<Screenshot (68).png>)



## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
