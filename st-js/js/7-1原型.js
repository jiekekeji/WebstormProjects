/********************prototype属性*********************/
// 函数才有prototype属性
// prototype属性的值是一个对象
function fn(name, age) {
    this.name = name;
    this.age = age;
    // 这里会有一个隐藏的prototype属性
    //这个属性的的值是一个对象
    // this.prototype=Object;

}
//例如访问隐藏的属性的值
console.log("fn prototype="+fn.prototype);
// 给隐藏属性prototype指向的对象添加一个属性
fn.prototype.headercount=1;
//访问刚才添加的属性
console.log("fn headercount="+fn.prototype.headercount);
console.log("fn headercount="+fn.headercount);


//看看这个函数有没有__proto__属性
console.log("fn __proto__="+fn.__proto__);
fn.__proto__.zw="工人";
console.log("fn zw="+fn.__proto__.zw);
console.log("fn zw="+fn.zw);


console.log("/********************__proto__属性*********************/");
/********************__proto__属性*********************/

// 对象才有__proto__属性
var student = {
    "name": "小明",
    "age": 16,
    //这里有一个隐藏的属性__proto__，
    //该属性指向的是一个对象
    "__proto__":Object
}
//访问隐藏的属性的值
console.log("stu __proto__="+student.__proto__);
// 给隐藏属性__proto__指向的对象添加一个属性
student.__proto__.num=1;
//访问刚才添加的属性
console.log("stu num="+student.__proto__.num);
//或者这样访问，为毛这样也能访问，传说中的原型链吧
console.log("stu num="+student.num);

console.log("stu prototype="+student.prototype);
student.prototype.cj=90;
console.log("stu prototype cj="+student.prototype.cj);
console.log("stu prototype cj="+student.cj);


