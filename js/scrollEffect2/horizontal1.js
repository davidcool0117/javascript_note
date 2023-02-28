const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    //scrollLeft -> 요소의 수평 스크롤바 위치 반환
    //e.deltaY -> delta 휠방향반환
    let amt = scrollContainer.scrollLeft += e.deltaY;
});