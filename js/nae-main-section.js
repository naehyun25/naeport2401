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




// script.js
const handle = document.querySelector('.handle');
handle.addEventListener('dragstart', startMachine);

function startMachine() {
    // 슬롯 머신을 "회전"하는 애니메이션 로직을 실행
    console.log('슬롯 머신 작동 시작');

    setTimeout(() => {
        stopMachine();
    }, 2000); // 2초 후에 슬롯 머신 멈춤
}

function stopMachine() {
    // 슬롯 머신을 멈추고 결과를 표시
    console.log('슬롯 머신 작동 종료');

    // 결과 이미지 설정 (예시)
    document.getElementById('slot1').style.backgroundImage = 'url("your-image.jpg")';
    // 이 부분에 당첨된 UI 표시 로직 추가
}
