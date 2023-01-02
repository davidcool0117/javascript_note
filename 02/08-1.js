/* prompt 메서드를 활용하여 국어, 영어, 수학 점수를 입력 받으세요.
평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true를 아니라면 false를 출력합니다. */

//let kor = Number(prompt("국어점수는?", "0"));
//let eng = Number(prompt("영어점수는?", "0"));
//let math = Number(prompt("수학점수는?", "0"));
//let avg = (kor + eng + math) / 3;
//let result = avg >= 70 && kor >= 60 && eng >= 60 && math >= 60;
//document.write(`<h1>${result}</h1>`)

/* 방문자에게 질의응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다.
방문자의 몸무게가 적정 몸무게보다 이상일 경우 "적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요.
적정 몸무게 공식은 '몸무게=(신장-100)*0.9'입니다 */

//let height=prompt("당신의 신장은?","0")
//let weignt=prompt("당신의 몸무게는?","0")
//let bmi=(height-100)*0.9;
//let result2= weignt>bmi ? "적정 몸무게 이상":"적정 몸무게 미달";
//alert(result2)

/* 
사용자로부터 cm 을 입력받아 inch로 변환하여 출력하는 
단위변환기를 만드세요
cm * 0.393701
*/
const rawInput=prompt('cm단위의 숫자를 입력하세요','');
const inch=Number(rawInput)* 0.393701;
alert(`${inch}inch 입니다 `)
