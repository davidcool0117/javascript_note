// 삼항연산자 : 항이 3개
// 조건?참일 때 : 거짓일 때
let your="어려워요";
let study=(your=="재밌어요")?"천재이시군요":"복습하세요";
document.write(`자바스크립트가 ${your} <h1>${study}</h1>`)

document.write("<hr>")

const price1=3000;
const price2=7000;
const price3=2000;
const total=price1+price2+price3;
const result=total>10000? total-10000+"원 초과":"돈 관리 참 잘했어요!"
document.write(`<h1 style="color:blue">합계가 ${total}</h1> <h3 style="text-decoration:underline">${result}</h3>`)
