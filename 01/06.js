// 데이터형 활용
// 문자자료형 string
// let x;
// let y;
let x,y;
x=7+5;
y="7"+5;
// document.write(x+y)
document.write(x); // 12
document.write(y); // 글자7글자5
document.write("<br>"); // 줄바꿈 태그
document.write("y"); // 글자y
// 자바스크립트에서 표현식을 작성할 때 문자는 따옴표로 묶고 변수나 숫자는 묶지 않는다
// 자바스크립트에서는 태그도 문자열
// 대상.함수() -> 메서드 -> 임자있는 함수
const wakeup="선문아 밥먹고 학교 가야지";
document.write('<h1 style="color:green">' + wakeup + '</h1>');

// es6 에 추가된 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}</h1>`);
