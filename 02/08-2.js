// 방문자에게 질의응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다.
// 방문자의 몸무게가 적정 몸무게보다 이상일 경우 "적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요.
// 적정 몸무게 공식은 '몸무게=(신장-100)*0.9'입니다

let height=prompt("당신의 신장은?","0")
let weight=prompt("당신의 몸무게는?","0")
let bmi=(height-100)*0.9;
let result= weight>bmi ? "적정 몸무게 이상":"적정 몸무게 미달";
alert(result)





// var h=Number(prompt("당신의 신장은?","0"));
// var w=Number(prompt("당신의 체중은?","0"));
// var aw=(h-100)*0.9;
// var result=w>=aw?"적정 몸무게 이상":"적정 몸무게 미달"
// document.write(result)