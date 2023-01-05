$(function () {
    $("#one").css("background", "yellow");
    // id선택
    var el1 = $("#one"); //id를 변수에 저장
    el1.css("color", "red"); //변수에 css메서드를 적용
    //태그선택
    var el2 = $("li");
    el2.css("background", "pink");
    console.log(el2[1]);
    // 배열중 특정번째만 적용
    $(el2[1]).css("color", "red");//$()를 사용하여 제이쿼리 객체로 만든다
    el2.eq(1).css("color", "blue");//제이쿼리 메서드를 사용해서 선택
    // 제이쿼리의 반복문 each
    el2.each(function (a, b, c) {
        el2.eq(a).css("background", "blue");
        $(b).css("color", "white");
    })
    var el3 = $('.highlight');
    el3.eq(1).css({ width: "500px", margin: "auto", background: "pink" })

});
