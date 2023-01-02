/* 대화상자 만들어보기 */
/***
 * 1. alert
 * 2. confirm
 * 3. prompt
 * ** */
//var num1 = 30 - 20;
//var num2 = 20;
//num1 = 50;
//num1 >= num2 ? alert("참일경우") : alert("거짓일경우");
//
//var result = confirm("자바스크립트를 좋아하세요?");
//console.log(result)
//var theText = result ? "네" : "아니오";
//document.write(theText);
//
//var input= prompt("생년월일을 입력하세요","");
//document.write(input);

let gender = prompt("당신의 성별을 입력하세요", "");
let age = prompt("당신의 나이를 입력하세요", "");
age=Number(age);
console.log(typeof(age));
let result = age >= 20 && age < 30 && gender == "여성";
document.write(result);
/* prompt 함수로 반환되는 값은 string 이므로 계산식을 사용해야할경우 자료형을 변환해야 한다 */