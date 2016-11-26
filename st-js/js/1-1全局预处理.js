/***********************1、变量的预处理**************************/

// 声明变量的两种形式
// 1、使用var声明的变量，
// 2、直接声明的变量。
//
// 使用var声明的变量会在预处理时将该变量加入当前变量所在的词法环境，
// 此时变量的值为undefined，只有在运行的时候才真正复制。
//
// 例如：将name声明在使用之前，和将age声明在使用之后，运行都没有问题，
var name = "jack";
console.log("name=" + name);
// 这句话的输出为undefined是因为该变量已在词法环境中，但是没有赋值
console.log("age=" + age);
var age = 20;


// 不使用var声明的变量,在预处理阶段不会加入到当前的词法环境中
// 采用该种方式定义的变量，该代码执行过后address就会被加入到window词法环境中
// 在另一个js文件1-2全局预处理.js中是可以访问到的，因为他们的window对象是同一个
address = "广东省";
console.log("address=" + address);
// 如果在声明的变量放在使用的语句后，运行时则会报错
// 测试时可打开下面两行的注释
// console.log("phonenum="+phonenum);
// phonenum=18976;

// 不使用var声明的变量，在运行时将会将其加入到window对象的词法环境中
//可以使用window.的方式访问，例如：
email = "123@qq.com";
console.log("email=" + window.email);


/***********************2、变量和方法同名时的预处理**************************/

// 当遇到变量和方法的声明一致时，在预处理阶段方法将覆盖掉变量
//下面的例子将会打印方法的字符串
console.log(fun1);
var fun1 = "方法";
function fun1() {
    console.log("fun1");
}

// 对于在花括号用var生命的变量，在预处理时也会加入当前的词法作用于
// 例如下面的例子，声明的变量在使用之后，不会报错
console.log("i=" + i);
console.log("j=" + j);
for (var i = 0; i < 10; i++) {
    var j=20;
    console.log("for循环");
}


/***********************3、方法的预处理**************************/

// 对于采用 function  fun() {}的方式声明的方法在预处理阶段才会加入到词法环境中，
// 而采用表达式的方式声明的方法不被加入到词法环境中


//fun2这个方法会提示undefined
// fun2();
fun3();
var fun2 = function () {
    console.log("fun2");
}
function fun3() {
    console.log("fun3");
}


/***********************4、词法环境的理解**************************/
function fun4_0() {
    //这个括号里面在执行时产生一个词法环境
    var f4_0=0;
    console.log("f4_0="+f4_0);
    f4_0++;
}

// 每调用一次fun4_0产生一个词法环境
// 例如：调用两次fun4_0，每次输出的f4_0都为0
fun4_0();
fun4_0();


//fun4_1的词法作用域和fun4_0的词法作用域是不一样的
//例如 我想在fun4_1中访问fun4_0的变量f4_0，会报错提示找不到变量
fun4_1();
function fun4_1() {
    // console.log("f4_0="+f4_0);
    var f4_1;
    console.log("f4_1="+f4_1);
}









