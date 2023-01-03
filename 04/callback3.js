const 테스트 = function (배열, 콜백함수) {
    for (const 값 of 배열) {
        콜백함수(값)
    }
}

const 함수 = function (콜백매개변수) {
    document.write(`${콜백매개변수}번째 와씨 뭔말이야<br>`)
}

테스트([52,249,264,24,22,6],함수)