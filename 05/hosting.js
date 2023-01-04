var x = 10; //변수 x를 초기화 한다
function display() {
    console.log("x is " + x);
    console.log("y is " + y);//Uncaught ReferenceError: y is not defined
    var y = 10;
}
var y = 20;
display();
console.log(y);

Exam1();
Exam();//B
var Exam1=function(){
    alert('A');
}
function Exam(){
    alert('B');
}
Exam();//A
//명명 함수 호이스팅에 의해 우선적으로 실행

/* var 과 선언적함수는 호이스팅 발생(당근마켓 끌올)
 es6 const, let
 익명함수는 호이스팅 발생
*/