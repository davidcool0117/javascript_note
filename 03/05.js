//연도를 입력 받아 나이 계산하기
// let a = prompt("태어난 연도를 입력하세요","숫자");
// let b=new Date();
// let c=b.getFullYear();
// let age=c-a;
// document.write(age);

//1~10까지 수에서 짝수끼리 더해서 출력하세요
var k;
var n = 10;
var sum = 0;
//2<=10 //k(3)=k(1)+1
for (k = 1; k <= n; k++) {
    if (k % 2 === 1) {
        continue; //통과
    }
    console.log(k);//1,2,3,~10
    // sum=sum+k;
    sum += k;
    document.write('<hr>' + sum);
}