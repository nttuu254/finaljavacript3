// Select all images in the gallery
const images = document.querySelectorAll('#gallery img');

// Add mouse and keyboard event listeners
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        console.log('Mouse over image');
    });

    image.addEventListener('mouseleave', () => {
        console.log('Mouse left image');
    });

    image.addEventListener('focus', () => {
        console.log('Focused on image');
    });

    image.addEventListener('blur', () => {
        console.log('Blurred from image');
    });
});

// Function to be called on window load
window.onload = function() {
    addTabFocus();
};

// Function to add tabindex attributes
function addTabFocus() {
    console.log('Tab focus function triggered');
    images.forEach((image, index) => {
        image.setAttribute('tabindex', index + 1);
    });
}
