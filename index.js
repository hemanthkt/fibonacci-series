var output = [];
function fibonacci(n) {
    if (n === 1 || n === 0){
        return 0;
    }else if(n === 2){
         output.push(0,1);
        return output;
        
    }else{
        output = [0, 1];
        for(var i = 2; i<n; i++){
            var fnum = output[i-1] + output[i-2];
            output.push(fnum);
            }
        return output;
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(6));
console.log(fibonacci(23));
