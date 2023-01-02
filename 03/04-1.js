
// for (var i = 1; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         document.write(`*`);
//     }
//     document.write(`<br>`);
// }

//중첩for문 사용하지 않고 별찍기
// let output='';
// for(i=1; i<10; i++){
//     output+='*';
//     document.write(output+'<br>')
// }


let output = ''; //전역변수
for (i = 1; i < 10; i++) {
    //지역변수
    for (let j = 0; j < i; j++) {
        output = output + '*';
    }
    output = output + '<br>'
}
document.write('<br>' + output);


// for (var a = 1; a < 28; a++) {
//     for (var b = 0; b <= a; b++) {
//         document.write(`*`);
//     }
//     document.write(`<br>`);
// }