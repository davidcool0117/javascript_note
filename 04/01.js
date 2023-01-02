// 1- 객체와 생성
var dog = new Object();
dog={
    // property
    // key : value
    name:"망고",
    features:"말티즈"
};
//arr.length
document.write(`<h1>${dog.name}</h1>`);


// 2- 객체와 생성
const baby={name:"망고",features:"말티즈"};
document.write(`<h1>${baby.features}</h1>`);

// 3- method
const pet={
    // 객체안에서의 this는 객체를 가르킴
    name:"망고",
    eat:function(food){
        document.write(`<h1>${this.name}는 ${food} 를 좋아해요</h1>`);
    }
}
pet.eat('연어')
pet.eat('닭가슴살')
