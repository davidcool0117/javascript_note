//id선택
var el1 = document.getElementById("one");
el1.style.background = "yellow";
// 태그선택
//getElementsByTagName 는 배열로 가져오게 된다
var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul");

for (var i = 0; i < el2.length - 3; i++) {
    el2[i].style.backgroundImage = 'url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
    el2[i].style.backgroundSize = '20px';
    el2[i].style.backgroundRepeat = 'no-repeat';
    el2[i].style.listStyle = 'none';
    el2[i].style.textIndent = '30px';
    el2[i].style.marginLeft = '-20px';
}
// for (var j of el3) {
//    j.style.backgroundColor = 'skyblue';
// }

// 클래스선택
//getElementsByClassName 는 배열로 가져오게 된다
var el4 = document.getElementsByClassName("highlight");
//css 속성 여러개 - > 추가 X, 수정됨 (기존 속성들이 다 지워진다)
el4[1].style.cssText = "width:500px; margin:auto; background:pink;"

// querySelector
var el5 = document.querySelector(".highlight");
console.log(el5);//querySelector() 는단일요소만 반환
el5.style.color = "red";
var el6 = document.querySelectorAll(".highlight");
console.log(el6);
for (var k =0; k < el6.length; k++){
    el6[k].style.color = "orange";
    el6[k].style.fontWeight = "bold";
}
for (var a of el6) {
    a.style.backgroundColor = 'green';
}
//대상.매서드명 (함수(){})
el6.forEach (function(b){
    b.style.fontSize = '1.5em';
})
