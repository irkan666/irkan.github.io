// Get the elements
const thumbnailImages = document.querySelectorAll('.thumbnail');
const popupOverlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');
const popupImage = document.querySelector('.popup-image');

// Add click event listener to each thumbnail image
thumbnailImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const imageSource = thumbnail.getAttribute('src');
        popupImage.setAttribute('src', imageSource);
        popupOverlay.style.display = 'flex';
    });
});

// Add click event listener to close the pop-up overlay
popupOverlay.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Center the image when the window is resized
window.addEventListener('resize', () => {
    centerPopupImage();
});

// Function to center the image in the pop-up overlay
function centerPopupImage() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const imageHeight = popupImage.clientHeight;
    const imageWidth = popupImage.clientWidth;

    const topOffset = (windowHeight - imageHeight) / 2;
    const leftOffset = (windowWidth - imageWidth) / 2;

    popupContent.style.top = `${topOffset}px`;
    popupContent.style.left = `${leftOffset}px`;
}

// Center the image initially
centerPopupImage();
