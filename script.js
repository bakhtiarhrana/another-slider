let photos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let img = document.querySelector("img");

let count = 0;

// Next Function

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }

}

// Previous Function

function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }
}