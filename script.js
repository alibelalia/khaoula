document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('surpriseButton');
    const surpriseDiv = document.getElementById('surprise');

    button.addEventListener('click', () => {
        fetch('surprise.php')
            .then(response => response.text())
            .then(data => {
                surpriseDiv.innerHTML = data;
            });
    });

    // Generate falling hearts
    function createHearts() {
        const container = document.querySelector('.hearts');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
            container.appendChild(heart);
        }
    }

    createHearts();
});
