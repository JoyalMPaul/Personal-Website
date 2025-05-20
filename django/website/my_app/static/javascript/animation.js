window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".floating");
    const validHeights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    elements.forEach((element) => {
        function applyRandomAnimation() {
            const startBottom = getRandomFromList(validHeights);
            let endBottom = getRandomFromList(validHeights);

            while (endBottom === startBottom) {
                endBottom = getRandomFromList(validHeights);
            }

            const animationName = `float_${Date.now()}_${Math.random().toString(36).slice(2)}`;
            const duration = 4 + Math.random() * 3; // 4–7s

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

            element.style.animation = 'none';
            void element.offsetHeight;
            element.style.animation = `${animationName} ${duration}s linear forwards`;
        }

        function getRandomFromList(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        applyRandomAnimation();
        element.addEventListener("animationend", applyRandomAnimation);
    });
});

