
/* 1. 스크롤 양 확인 */
const gap = 350

/* 2. 제이쿼리 */
function jq() {
    const sections = $("section");
    let scrollTop;
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();
        animate(scrollTop);
    })


    const animate = (sct) => {
        sections.each((idx, el) => {
            /* el이 제이쿼리 객체로 반환되지 않고 일반태그로 반환돼서 매번 반환값을 객체로 변환해야함 
                idx를 .eq 메서드에 넣어서 작성함
            */
            let tg = sections.eq(idx);
            if (sct > tg.offset().top - gap) {
                tg.addClass("sectionIn");
            }
        });
    }
}