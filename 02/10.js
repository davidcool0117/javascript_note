/* switch */
/* 조건 case :  */

let day = "월";
day = "목";
day = "5";
document.write(day + "요일에는");
switch (day) {
	case "월":
		document.write("오전 10시 수업시작");
		break;
	case "화":
		document.write("<br>오후 2시 수업시작");
		break;
	case "수":
		document.write("<br>오후 4시 수업시작");
		break;
	case "목":
		document.write("<br>오전 10시 수업시작");
		break;
	case "금":
		document.write("<br>오전 11시 수업시작");
		break;
	default:
		document.write("월요일에서 금요일까지만 입력하세요");
}

/* 사용자로 부터 숫자를 입력받아
짝수인지 홀수 인지 숫자가 아닌지를 출력하시오 */
//switch(자료){ case 조건A: 실행A}
//변수를 선언합니다
//const input = Number(prompt("숫자를 입력하세요", "숫자"));
//나머지가 0 false 나머지가 1 true
/*
switch (input % 2) {
	case 0:
		alert("짝수입니다");
		break;
  case 1:
    alert("홀수입니다");
    break;
  default : 
  alert("숫자가 아닙니다");
}

if(input%2==0){
  alert("짝수")
}else if(input%2==1){
  alert("홀수")
}else{
  alert("숫자가 아닙니다");
}
*/

/***
 * 두수의 크기비교
 *
 */
/*
const a = Number(prompt("첫번째숫자", ""));
const b = Number(prompt("두번째숫자", ""));
if(a>b){  // 두번째가 더 큰경우, 두수가 같은경우
  alert("첫번째 숫자가 더 큽니다")
}else if(a==b){
  alert("두 수가 같습니다")
}else{
  alert("두번째 숫자가더 큽니다")
}
*/

/***
 * 3의 배수확인
 *
 */
let userNum = prompt("숫자를 입력하세요");
//1. 3의 배수인지를 확인하여 결과를 alert로 출력
//userNum==null 사용자가 아무것도 입력안한경우
//if (userNum !== null) {//사용자가 입력한 경우
if (userNum % 3 == 0) {
	alert("3의 배수입니다");
} else {
	alert("3의 배수가 아닙니다");
}
//}else{
//  alert("입력이 취소 되었습니다")
//}

if (userNum !== null) {
	userNum % 3 === 0 ? alert("3의 배수입니다") : alert("3의 배수가 아닙니다.");
} else {
	alert("입력이 취소되었습니다");
}
