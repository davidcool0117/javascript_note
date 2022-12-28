// if else if
const date = new Date();
const hour = date.getHours();
if (hour < 11) {
    // 0~10
    alert("아침먹고 땡");
} else if (hour < 15) {//11~14
    alert("점심먹고 땡");
} else {//15~24
    alert("저녁먹고 잠");
}