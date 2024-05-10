// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.main-area-section');
    const back = document.querySelector('.nae-main-section');
    const gradient = document.querySelector('.main-gradient');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            const color = section.getAttribute('data-color');
            switch (color) {
                case 'dark':
                    back.style.backgroundColor= '#021038';
                    gradient.style.backgroundImage = 'linear-gradient(#39dca0, #6457eb, #f05e8f)';
                    break;
                case 'darker':
                    back.style.backgroundColor= '#070b3a';
                    gradient.style.backgroundImage = 'linear-gradient(#6fdfa3, #6b47ff, #fc7091)';
                    break;               
                case 'deep':
                    back.style.backgroundColor= '#000512';
                    gradient.style.backgroundImage = 'linear-gradient(#4ddc9e, #5b37eb, #f1307e)';
                    break;
                default:
                    gradient.style.backgroundImage ='';
            }
        });

        section.addEventListener('mouseleave', function() {
            section.style.backgroundColor = '';
        });
    });
});




