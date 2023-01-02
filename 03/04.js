// for (초기값 ; 조건식 ; 증감식){}
var i = 0
    //     1      2     4
             //1<5  //1=0+1
for (i = 0; i < 5; i++) { 
    //                    3
    // document.write(`<br>${i}번째 반복입니다. <br>`);
    // i=0, i=1, i=2 
}
// document.write(`<br>끝<br>`);
// for 문을 이용하여 <h >태그를 사용하여 화면의 결과물을 출력하시오
for (i = 6; i > 0; i--) {
    document.write("<h"+i+">h"+i+"재미있는 자바스크립트</h"+i+">");
}
//구구단5단

for (i = 1; i < 10; i++) {
    document.write(`5x${i}=${i*5}<br>`);
    // document.write("5x"+i+"="+i*5+"<br>");
}

// let i=5;
// for(let j=1; j<=9; j++){
//     let result=i+"x" + j + "="+ i*j + "<br>";
//     document.write(result)
//   }