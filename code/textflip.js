document.addEventListener('DOMContentLoaded', (event) => {
    const texts = [
      "  Software Engineer",
      "  ML/AI Engineer", 
      "  DevOps Engineer", 
      "  Solutions Architect",
      
      
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000; // Delay between current and next text

    const changingTextElement = document.getElementById('changing-text');

    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            changingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            changingTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of typing
            isDeleting = true;
            setTimeout(typeText, newTextDelay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(typeText, isDeleting ? erasingSpeed : typingSpeed);
        }
    }

    typeText();
});