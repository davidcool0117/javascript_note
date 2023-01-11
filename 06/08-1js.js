const section = document.querySelector('section');
const text = document.querySelectorAll('.txt');
const progressbar = document.querySelector('.bar');
const winH = window.innerHeight;

const Vprogressbar = document.querySelector('.vbar')



let scT;
window.addEventListener('scroll',function(){
    scT=window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    let sectionH=section.clientHeight;
    let Hide_sectionH=sectionH-winH;
    let scPer=(scT/Hide_sectionH)*100;
    for(let a in text){
        text[a].textContent=Math.floor(scPer)+"%";
    }
    progressbar.style.width=Math.floor(scPer)+"%";
    Vprogressbar.style.height=Math.floor(scPer)+"%";
})

//스크롤 구현시 화면에 보여지지 않는 부분의 총높이를 '전체'로 두고 최상단에서부터 시작한 Y축 스크롤이 이동한 거리를 '부분'으로 놓고  스크롤의 퍼센트 (부분/전체)x100 를 계산한다.
//즉, 비교 자체를 보여지지 않는 부분의 섹션 높이와 스크롤바의 Y축 이동거리를 비교
