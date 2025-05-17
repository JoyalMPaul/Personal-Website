window.alert('Nice to see you here!');

document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("computer_movement");

    function applyRandomAnimation() {
        const startBottom = Math.floor(Math.random() * 80);
        const endBottom = Math.floor(Math.random() * 80);
        const animationName = `float_${Date.now()}`;

        // Create and inject a unique keyframes rule
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerHTML = `
            @keyframes ${animationName} {
                from {
                    left: 0;
                    bottom: ${startBottom}%;
                }
                to {
                    left: 100%;
                    bottom: ${endBottom}%;
                }
            }
        `;
        document.head.appendChild(styleSheet);

        // Remove previous animation by setting to 'none'
        element.style.animation = 'none';

        // Trigger reflow to reset the animation
        void element.offsetHeight; // This forces reflow

        // Apply the new animation
        element.style.animation = `${animationName} 5s linear forwards`;
    }

    // Apply initially
    applyRandomAnimation();

    // On each iteration, re-randomize
    element.addEventListener("animationend", applyRandomAnimation);
});

