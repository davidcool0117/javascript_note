// switch
// 조건 case :

// let day = "월";
// day = "금";
// document.write(day + "요일에는")
// switch (day) {
//     case "월": document.write("<br>오전 10시 수업시작")
//         break;
//     case "화": document.write("<br>오후 2시 수업시작")
//         break;
//     case "수": document.write("<br>오후 4시 수업시작")
//         break;
//     case "목": document.write("<br>오전 10시 수업시작")
//         break;
//     case "금": document.write("<br>오전 11시 수업시작")
//         break;
//     default: document.write("월요일에서 금요일까지만 입력하세요")
// }

// 사용자로 부터 숫자를 입력받아 짝수인지 홀수인지 숫자가 아닌지를 출력하시오
// const input = Number(prompt("숫자를 입력하세요", "숫자"))
// switch (input % 2) {
//     case 0: alert("짝수입니다");
//         break;
//     case 1: alert("홀수입니다");
//         break;
//     default: alert("숫자가 아닙니다");
// }

// var num = Number(prompt("숫자를 입력하세요", "0"))
// if (num % 2 == 0) {
//     alert("짝수입니다")
// } else if (num % 2 == 1) {
//     alert("홀수입니다")
// } else {
//     alert("숫자가 아닙니다")
// }


// 사용자로 부터 숫자 2개를 입력받아 첫번째 입력받은 숫자가 큰지, 두번째 입력받은 숫자가 큰지를 구하는 프로그램

// let input2 = Number(prompt("숫자를 입력하세요", "숫자"))
// let input3 = Number(prompt("숫자를 입력하세요", "숫자"))
// if (input2 > input3) {
//     alert("첫번째 수가 큽니다")
// }
// else if (input2 < input3) {
//     alert("두번째 수가 큽니다")
// }
// else if (input2 == input3) {
//     alert("두수가 같습니다")
// }
// else {
//     alert("숫자가 아닙니다")
// }


// const a = Number(prompt('첫번째 숫자',''));
// const b = Number(prompt('두번째 숫자',''));
// if(a>b){
//     alert("첫번째 숫자가 더 큽니다")
// } else if(a==b){
//     alert("두수가 같습니다")
// } else{
//     alert("두번째 숫자가 더 큽니다")
// }


/***
 * 3의 배수확인
 * 
 */
// let userNum = prompt("숫자를 입력하세요");
// // 3의 배수인지를 확인하여 결과를 alert로 출력
// // 사용자가 아무것도 입력하지 않은 경우 입력이 취소되었습니다 출력
// // userNum==null 사용자가 아무것도 입력하지 않은경우
// if (userNum !== null) {//사용자가 입력한 경우
//     if (userNum % 3 == 0) {
//         alert("3의 배수입니다");
//     } else {
//         alert("3의 배수가 아닙니다");
//     }
// } else {
//     alert("입력이 취소 되었습니다")
// }
// console.log(userNum);

//위의 문장을 if else 삼항연산자를 사용하여 작성해보세요
/**
 * if(조건A){ 조건A 참 실행
 * 
 *  (조건B)?(조건B 참일때 실행문) : (조건B 거짓일때 실행문)
 * 
 * }else{
 *  조건A가 거짓 실행
 * }
 */

let userNum1 = prompt("숫자를 입력하세요");
if (userNum1 !== null) {
    userNum1 % 3 === 0 ? document.write("3의 배수입니다") : document.write("3의 배수가 아닙니다")
} else {
    alert("입력이 취소 되었습니다")
}

