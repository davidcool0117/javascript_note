function add(){
    var sum = 10+20; //지역변수
    multi=10*20; //키워드 없이 식별자만 작성 시 전역변수 
    total=sum; //30
    return total
}
add();
console.log(multi);
console.log(total);
console.log(sum);