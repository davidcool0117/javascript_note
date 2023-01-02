// 자리배치도
// 총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오
// 전체 입장객
var memNum = prompt("입장객은 몇 명인가요?");
// 한줄에 앉을 사람
var colNum = prompt("한 줄에 몇 명씩 앉습니까?");

if (memNum % colNum === 0) {
  //tr
  rowNum = parseInt(memNum / colNum);
} else {
  rowNum = parseInt(memNum / colNum + 1);
}

document.write(`<table>`);
for (var i = 0; i < rowNum; i++) {
  document.write(`<tr>`);
  for (var j = 1; j <= colNum; j++) {
    var seatNo = i * colNum + j;
    if (seatNo <= memNum) {
      document.write(`<td>좌석 ${seatNo}</td>`);
    } else {
      document.write(`<td></td>`);
    }
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
