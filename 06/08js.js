//section 변수에 담기
const section = document.querySelector('section');
//변수에 담아야할것들
const text = document.querySelector('.txt');
const progressBar = document.querySelector('.bar');
//창높이
const windowHeight = window.innerHeight;
//스크롤양을 담을 변수
let scrollTop;

//스크롤 이벤트 함수
window.addEventListener("scroll", function () {
    scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    getPercent(scrollTop)
})

//진행율 계산 함수
function getPercent(scrollTop){
    let scrollHeight = section.clientHeight;
    let scrollRealHeight = scrollHeight - windowHeight;
    let scrollPercent = (scrollTop / scrollRealHeight) * 100
    render(scrollPercent)
}

//화면 출력 함수
function render(scrollPercent){
    text.textContent = Math.floor(scrollPercent) + "%";
    progressBar.style.width = Math.floor(scrollPercent) + "%";
}

