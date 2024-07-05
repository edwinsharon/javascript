function fib(a){
    if (a<=1){
        return a;
    }
    else{
        return fib(a-1)+fib(a-2);    
    }

}
console.log(fib(3))

