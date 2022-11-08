// Concurrency means doing tasks simultaneously
function doFlexibleStuff(executeStuff){
    executeStuff();
    console.log("hello callback!");
    
}
const function1 = () => console.log("HELLO FROM function");

doFlexibleStuff(function1);
function doSomething(callback){
    callback();
}
const sayHi = () => "hi from callback fucntion";
doSomething(sayHi);