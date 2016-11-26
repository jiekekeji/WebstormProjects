/*****************方式1********************/

var person = {
    "age": 12,
    "name": "lily"
}
console.log("age=" + person.age);
console.log("name=" + person.name);


/*****************方式2********************/
var student = new Object();
student.age = 18;
student.name = "lucy";
console.log("age=" + student.age);
console.log("name=" + student.name);


/*****************方式3********************/
var worker = new Object();
// Object.defineProperties(worker,"age",{value,25});
// Object.defineProperties(worker,"name",{value,"abma"});
// console.log("age="+worker.age);
// console.log("name="+worker.name);


/*****************遍历对象属性********************/
for (var sx in person) {
    console.log("sx=" + sx);
    //不能person.sx的方式，因为sx是变量
    console.log("sx v=" + person[sx]);
}

/*****************判断对象是否有某个属性********************/
console.log("name" in person);
console.log("address" in person);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("address"));