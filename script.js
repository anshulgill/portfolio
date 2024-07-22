window.addEventListener('load', () => {
    setTimeout(() => {
        // Smooth transition for logo container
        const logoContainer = document.getElementById('logo-container');
        logoContainer.style.transition = 'opacity 0.5s ease-out';
        logoContainer.style.opacity = '0';

        setTimeout(() => {
            logoContainer.style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.classList.add('show');
            }, 50);

            // Animating the name text
            const nameElement = document.getElementById('animated-name');
            const nameText = nameElement.textContent;
            nameElement.innerHTML = '';
            nameText.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.animationDelay = `${index * 0.2}s`;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.transition = 'opacity 0.5s ease-in-out';
                nameElement.appendChild(span);
                setTimeout(() => {
                    span.style.opacity = '1';
                }, index * 200); // 200 milliseconds per character
            });
        }, 500); // Additional delay to ensure smooth transition
    }, 1800); // Initial delay for the logo display
});
