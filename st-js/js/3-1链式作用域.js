// 链式作用域

fun1();
// fun2();这里是不能调用fun2()的，因为fun2()没有在当前词法环境中
// 类似的fun3(),fun4()、fun5()

var f0=10;//在window词法环境

function fun1() {
    var f1=11;//在fun1词法环境

    function fun2() {
        var f2=22;//在fun2词法环境
        function fun4() {
            var f4=44;//在fun4词法环境
            console.log("fun4 f0="+f0);
            console.log("fun4 f1="+f1);
            console.log("fun4 f2="+f2);
            // console.log("fun4 f3="+f3);
            console.log("fun4 f4="+f4);
            // console.log("fun4 f4="+f5);
        }
        console.log("fun2 f0="+f0);
        console.log("fun2 f1="+f1);
        console.log("fun2 f2="+f2);
        // console.log("fun2 f3="+f3);
        // console.log("fun2 f4="+f4);
        // console.log("fun2 f4="+f5);
        fun4();
    }
    
    
    
    function fun3() {
        var f3=33;//在fun3词法环境
        function  fun5() {
            var f5=55;//在fun5词法环境
            console.log("fun5 f0="+f0);
            console.log("fun5 f1="+f1);
            // console.log("fun5 f2="+f2);
            console.log("fun5 f3="+f3);
            // console.log("fun5 f4="+f4);
            console.log("fun5 f4="+f5);
        }
        console.log("fun3 f0="+f0);
        console.log("fun3 f1="+f1);
        // console.log("fun3 f2="+f2);
        console.log("fun3 f3="+f3);
        // console.log("fun3 f4="+f4);
        // console.log("fun3 f5="+f5);
        fun5();
    }

    console.log("fun1 f0="+f0);
    console.log("fun1 f1="+f1);
    // console.log("fun1 f2="+f2);//不能向下查找变量，所以报错
    // console.log("fun1 f3="+f3);//不能向下查找变量，所以报错
    // console.log("fun1 f4="+f4);//不能向下查找变量，所以报错
    // console.log("fun1 f5="+f5);//不能向下查找变量，所以报错

    fun2();//这里能访问到f0 f1 f2 ;f3 f4 f5是无法访问的
    fun3();//情况和fun2一样

}