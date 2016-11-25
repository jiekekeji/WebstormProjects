 // 声明变量的两种形式
 // 1、使用var声明的变量，
 // 2、直接声明的变量。
 //
 // 使用var声明的变量会在预处理时将该变量加入当前变量所在的词法环境，
 // 此时变量的值为undefined，只有在运行的时候才真正复制。
 //
 // 例如：将name声明在使用之前，和将age声明在使用之后，运行都没有问题，
var name="jack";
console.log("name="+name);
// 这句话的输出为undefined是因为该变量已在词法环境中，但是没有赋值
console.log("age="+age);
var age=20;


// 不使用var声明的变量,在预处理阶段不会加入到当前的词法环境中
address="广东省";
console.log("address="+address);
 // 如果在声明的变量放在使用的语句后，运行时则会报错
 // 测试时可打开下面两行的注释
// console.log("phonenum="+phonenum);
// phonenum=18976;

 // 不使用var声明的变量，在运行时将会将其加入到window对象的词法环境中
 //可以使用window.的方式访问，例如：
email="123@qq.com";
console.log("email="+window.email);

// 使用var遇到重复声明变量的问题