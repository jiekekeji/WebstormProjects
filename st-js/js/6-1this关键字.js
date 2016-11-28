/************this关键字*************/

//定义在函数里，谁调用了函数，this就代表谁
function fn1() {
    console.log("fn1 this=" + this);
}

var person = {
    "name": "jack",
    "age": 34,
    "getAge": function () {
        console.log("getAge this=" + this);
        return this.name;
    }
}

fn1();//this是window相当于window.fn1()
console.log(person.getAge());//this是person
