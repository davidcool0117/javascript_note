// 변수의 유효범위: scope
let total = ''; // 전역변수 total
let sum = (a, b) => {
    // let total = a + b; // 새 그릇을 준비
    // let total; // 같은 지역에서 동명이인 안됨
    total = a + b; // 지역변수 total
};
sum(10, 20)
document.write("두수의 합 " + total);

// return문의 역할1
// 값을 함수 밖으로 전달
let sum1 = (a, b) => {
    return a + b;
};
document.write("<hr>두수의 합 " + sum1(30, 40));
/* return은 안써도 들어있다
 return에 값을 작성하지 않아도 undefined 를 반환
*/


(function(){
    console.log('hello');
})()