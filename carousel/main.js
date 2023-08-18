"use strict";

const imagesContainer = document.querySelector("#images-container");

const imageSelectorContainer = document.querySelector(
    "#image-selector-container"
);

const amountOfImages = 5;

for (let i = 1; i <= amountOfImages; i++) {
    // Create and append images to DOM
    const carouselImage = new Image();
    carouselImage.dataset.id = i;
    carouselImage.src = `./assets/carousel-images/image${i}.jpg`;
    carouselImage.alt = `Image ${i}`;
    carouselImage.classList.add("carousel-image");
    imagesContainer.appendChild(carouselImage);

    // Create and append image selectors to DOM
    let imageSelectorButton = document.createElement("button");
    imageSelectorButton.dataset.id = i;
    imageSelectorButton.classList.add("image-selector-button");
    const imageSelectorIcon = new Image();
    if (i === 1) {
        imageSelectorIcon.src = `./assets/icons/circle.svg`;
    } else {
        imageSelectorIcon.src = `./assets/icons/circle-outline.svg`;
    }
    imageSelectorIcon.classList.add("image-selector-icon");
    imageSelectorButton.appendChild(imageSelectorIcon);
    imageSelectorContainer.appendChild(imageSelectorButton);
}

// const previousButton = document.querySelector("#previous-button");

// const nextButton = document.querySelector("#next-button");
