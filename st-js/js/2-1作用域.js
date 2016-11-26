// js的作用域是词法作用域，也称静态作用域或闭包



function fun10() {
    var f10 = 10;
    console.log("f10=" + f10);
}

function fun11() {
    //这里想访问fun10的变量是无法访问的
    // console.log("f10=" + f10);
}

function fun12() {
    //这里给fun10的变量f10重新赋值
    //虽然f10在运行时会加入到window的词法环境，
    //但是fun10得执行的时候在其当前的词法环境中已找
    //所以不会向上查找变量f10
    f10 = 11;
    fun10();
    console.log("fun12-f10="+window.f10);
}

function fun13() {
    console.log("f13=" + f13);
}

function fun14() {
    //在执行这行代码的时候，将f13加入到window词法环境中
    f13 = 13;
    //在执行fun13时，在fun13的词法环境找不到f13变量，
    // 所以向上查找，最后在window词法环境中找到
    fun13();
}

fun11();
fun12();
fun14();