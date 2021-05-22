const $scrollToTop = document.querySelector(".scrollToTop");


// scrollToTop 요소에 클릭 이벤트가 발생하면 페이지 상단으로 smooth하게 이동
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
