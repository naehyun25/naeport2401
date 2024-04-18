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

