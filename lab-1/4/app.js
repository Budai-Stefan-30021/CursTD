

document.getElementById('n').addEventListener('input', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}




function getFibonaci(n){
    if(typeof n !='number')
            return("not allowed");

      if(n<1 || n>10)
            return("not allowed");

        fib=[];
        fib[1]=[1];
        fib[2]=[1 , 1];
        if(n===1) return fib[1];
        if(n===2)  return fib[2];

       for(var i=1; i<=n; i++)
            fib[i]=fib[i-1]+fib[i-2]

            return fib;

        }
function test() {
  console.log(getFibonaci(0) == "not allowed" ? ' Passed ' : ' Failed ');
  console.log(getFibonaci(2) == fib[2] ? ' Passed ' : ' Failed ');
  console.log(getFibonaci(4) == 10 ? ' Passed ' : ' Failed ');
  console.log(getFibonaci(5) == fib? ' Passed ' : ' Failed ');
  console.log(getFibonaci() == 'not allowed' ? ' Passed ' : ' Failed ');
  console.log(getFibonaci(true) == 'not allowed' ? ' Passed ' : ' Failed ');
  console.log(getFibonaci("textTest")== 'not allowed' ? ' Passed ' : ' Failed ');
  console.log(getFibonaci(11) == 'not allowed' ? ' Passed ' : ' Failed ');
}
test();