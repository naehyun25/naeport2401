// 스크롤 차단
function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventKeyScroll, { passive: false });
}

function enableScroll() {
    document.body.style.overflow = '';
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', preventKeyScroll);
}

function preventKeyScroll(event) {
    // 방향키 스페이스 바 금지
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
    }
}

// 인트로 끝날때까지 스크롤 방지
disableScroll();
setTimeout(enableScroll, 5000);

// 새로고침 시 항상 페이지 top으로  이동
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});