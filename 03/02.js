// 1. 배열추가 .push()
const todos=['우유규매','업무메일확인','필라테스수업'];
todos.push('망고목욕');
todos.push('망고산책');
document.write(`<h1>오늘 스케쥴 : ${todos}</h1>`)

// 2. 배열추가 - index 활용한 추가
const basket=['소세지','소주','햇반'];
basket[10]='귤';
// 3. 배열추가 -length 활용
basket[basket.length]='삼겹살';
basket[basket.length]='불고기';
basket[basket.length]='LA갈비';
basket[basket.length]='한우부채살';
document.write(`<hr><h1>저녁식단 : ${basket}</h1>`)
