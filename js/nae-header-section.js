//1. 사용자의 마지막 스크롤 값 저장 변수
let lastScrollTop = 0;
console.log('hi');
window.addEventListener("scroll", function() {
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
       console.log("Scrolling DOWN");
   } else {
       console.log("Scrolling UP");
   }
   lastScrollTop = scrollTop; // 위치 업데이트
});



// 마우스 팔로잉 동그라미
const circle = document.querySelector('.circle');

 document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    circle.style.left = x+"px";
    circle.style.top = y+"px";
});


