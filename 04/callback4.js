// for each : 배열의 요소를 콜백함수를 활용하여 반복순환
const arr = [273, 55, 5798, 15611, 565, 66]
arr.forEach(function (value, index, array) {
    console.log(value, index, array);
})
// filter : 원하는 값만 골라보기
let words = ['스폰지밥', '뚱이', '다람이'];
const result = words.filter(function (value, index, array) {
    return value.length >= 3;
})

// alert(result)

// map : 배열의 값을 새 값과 연결해서 새 배열로 저장
words = words.map(function (value, index) {
    return "💛" + value + "💛"
})
document.write(words[0])


// .filter 를 사용하여 arr 배열에서 짝수만 출력해보세요
let even = arr.filter(function (value) {
    return value % 2 == 0;
})
let odd = arr.filter(function (value) {
    return value % 2 !== 0;
})
document.write("<h2>짝수는 " + even + "</h2>")
document.write("<h2>홀수는 " + odd + "</h2>")