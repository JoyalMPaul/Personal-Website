//window.alert('Nice to see you here!');

document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("computer_movement");

    // Generate random bottom values
    const startBottom = Math.floor(Math.random() * 80); // between 0% and 80%
    const endBottom = Math.floor(Math.random() * 80);   // same range

    // Create a unique animation name
    const animationName = `float_${Date.now()}`;

    // Create keyframes dynamically
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

    // Apply the animation to the element
    element.style.animation = `${animationName} 5s infinite linear`;
});

