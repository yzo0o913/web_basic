//scrollToTop
const $scrollToTop = document.querySelector(".scrollToTop");

//moveScrollLeft, moveScrollRight
const $moveScrollLeft1 = document.querySelector(".first");
const $moveScrollRight1 = document.querySelector(".first1");
const $moveScrollLeft2 = document.querySelector(".second");
const $moveScrollRight2 = document.querySelector(".second1");
const $moveScrollLeft3 = document.querySelector(".third");
const $moveScrollRight3 = document.querySelector(".third1");
const $moveScrollLeft4 = document.querySelector(".fourth");
const $moveScrollRight4 = document.querySelector(".fourth1");
const $moveScrollLeft5 = document.querySelector(".fifth");
const $moveScrollRight5 = document.querySelector(".fifth1");
const $moveScrollLeft6 = document.querySelector(".sixth");
const $moveScrollRight6 = document.querySelector(".sixth1");
const $moveScrollLeft7 = document.querySelector(".seventh");
const $moveScrollRight7 = document.querySelector(".seventh1");
const $moveScrollLeft8 = document.querySelector(".eighth");
const $moveScrollRight8 = document.querySelector(".eighth1");
const $moveScrollLeft9 = document.querySelector(".ninth");
const $moveScrollRight9 = document.querySelector(".ninth1");
const $moveScrollLeft10 = document.querySelector(".tenth");
const $moveScrollRight10 = document.querySelector(".tenth1");

// scrollToTop 요소에 클릭 이벤트가 발생하면 페이지 상단으로 smooth하게 이동
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// 각 좌우 스크롤 이미지를 클릭하면 당시 위치에서 + (혹은 -) 1300 을 한 위치로 이동함
$moveScrollLeft1.addEventListener("click", function(){
  var _scrollX = $('.one').scrollLeft();
  $('.one').scrollLeft(_scrollX-1300);
});

$moveScrollRight1.addEventListener("click", function(){
  var _scrollX = $('.one').scrollLeft();
  $('.one').scrollLeft(_scrollX+1300);
});

$moveScrollLeft2.addEventListener("click", function(){
  var _scrollX = $('.two').scrollLeft();
  $('.two').scrollLeft(_scrollX-1300);
});

$moveScrollRight2.addEventListener("click", function(){
  var _scrollX = $('.two').scrollLeft();
  $('.two').scrollLeft(_scrollX+1300);
});
$moveScrollLeft3.addEventListener("click", function(){
  var _scrollX = $('.three').scrollLeft();
  $('.three').scrollLeft(_scrollX-1300);
});

$moveScrollRight3.addEventListener("click", function(){
  var _scrollX = $('.three').scrollLeft();
  $('.three').scrollLeft(_scrollX+1300);
});

$moveScrollLeft4.addEventListener("click", function(){
  var _scrollX = $('.four').scrollLeft();
  $('.four').scrollLeft(_scrollX-1300);
});

$moveScrollRight4.addEventListener("click", function(){
  var _scrollX = $('.four').scrollLeft();
  $('.four').scrollLeft(_scrollX+1300);
});
$moveScrollLeft5.addEventListener("click", function(){
  var _scrollX = $('.five').scrollLeft();
  $('.five').scrollLeft(_scrollX-1300);
});

$moveScrollRight5.addEventListener("click", function(){
  var _scrollX = $('.five').scrollLeft();
  $('.five').scrollLeft(_scrollX+1300);
});

$moveScrollLeft6.addEventListener("click", function(){
  var _scrollX = $('.six').scrollLeft();
  $('.six').scrollLeft(_scrollX-1300);
});

$moveScrollRight6.addEventListener("click", function(){
  var _scrollX = $('.six').scrollLeft();
  $('.six').scrollLeft(_scrollX+1300);
});
$moveScrollLeft7.addEventListener("click", function(){
  var _scrollX = $('.seven').scrollLeft();
  $('.seven').scrollLeft(_scrollX-1300);
});

$moveScrollRight7.addEventListener("click", function(){
  var _scrollX = $('.seven').scrollLeft();
  $('.seven').scrollLeft(_scrollX+1300);
});

$moveScrollLeft8.addEventListener("click", function(){
  var _scrollX = $('.eight').scrollLeft();
  $('.eight').scrollLeft(_scrollX-1300);
});

$moveScrollRight8.addEventListener("click", function(){
  var _scrollX = $('.eight').scrollLeft();
  $('.eight').scrollLeft(_scrollX+1300);
});
$moveScrollLeft9.addEventListener("click", function(){
  var _scrollX = $('.nine').scrollLeft();
  $('.nine').scrollLeft(_scrollX-1300);
});

$moveScrollRight9.addEventListener("click", function(){
  var _scrollX = $('.nine').scrollLeft();
  $('.nine').scrollLeft(_scrollX+1300);
});

$moveScrollLeft10.addEventListener("click", function(){
  var _scrollX = $('.ten').scrollLeft();
  $('.ten').scrollLeft(_scrollX-1300);
});

$moveScrollRight10.addEventListener("click", function(){
  var _scrollX = $('.ten').scrollLeft();
  $('.ten').scrollLeft(_scrollX+1300);
});

