/*****************创建对象的方式********************/
//方式1
var person = {
    "age": 12,
    "name": "lily"
}
console.log("age=" + person.age);
console.log("name=" + person.name);


//方式2
var student = new Object();
student.age = 18;
student.name = "lucy";
console.log("age=" + student.age);
console.log("name=" + student.name);


//方式3
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

/*****************对象的构造器********************/

// 顶级构造器：Function，构造器是一个函数
// Objetc,Number,Array、Window function的构造器为Function()，

//1
var obj=new Object();
console.log("obj 构造器="+obj.constructor);//输出：function Object() { [native code] }
console.log("Object 构造器="+Object.constructor);//function Function() { [native code] }

//2
var techer={
    "age":45,
    "name":"mrs gao"
}
console.log("techer 构造器="+techer.constructor);//输出：function Object()
console.log("Object 构造器="+Object.constructor);//function Function() { [native code] }

//3
console.log("windows 构造器="+window.constructor);//function Window()
console.log("Window 构造器="+Window.constructor);//function Function() { [native code] }

//4
var num=new Number();
console.log("num 构造器="+num.constructor);//function Number() { [native code] }
console.log("Number 构造器="+Number.constructor);//function Function() { [native code] }

//5
var nm=13;
console.log("nm 构造器="+nm.constructor);//function Number() { [native code] }
console.log("Number 构造器="+Number.constructor);//function Function() { [native code] }

//6
var fnn=function () {
}
console.log("fnn 构造器="+fnn.constructor);//function Function() { [native code] }
console.log("Function 构造器="+Function.constructor);//function Function() { [native code] }


//7
var fn=new Function();
console.log("fn 构造器="+fn.constructor);//function Function() { [native code] }


/*****************判断对象的类型********************/
console.log("*****************判断对象的类型********************");
console.log(typeof obj);
console.log(typeof Object);
console.log(typeof window);
console.log(typeof num);
console.log(typeof Number);
console.log(typeof fnn);
console.log(typeof fn);
console.log(typeof Function);


console.log(obj instanceof Object);
console.log(Object instanceof Function);
console.log(window instanceof Object);
console.log(num instanceof Number);
console.log(num instanceof Number);
console.log(fnn instanceof Function);
console.log(Function instanceof Function);
console.log(Function instanceof Number);



