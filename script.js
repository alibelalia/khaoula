// Function to create and animate hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration
    document.body.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create hearts at regular intervals
setInterval(createHeart, 300);
