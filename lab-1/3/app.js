var counter = 0;

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue('counter', 0);

document.getElementById('inc').addEventListener('click', increment);

function increment() {
  counter++;
  printValue('counter', counter);
}





document.getElementById('n').addEventListener('input ', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function sum(n) {
  if (typeof n === 'undefined') return 'n is undefined ';
    if (typeof n === 'string') return 'n is undefined';
      if (typeof n === 'boolean') return 'n is undefined';

  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function test() {
  console.log(sum(0) == 0 ? ' Passed ' : ' Failed ');
  console.log(sum(2) == 3 ? ' Passed ' : ' Failed ');
  console.log(sum(4) == 10 ? ' Passed ' : ' Failed ');
  console.log(sum() == 'n is undefined ' ? ' Passed ' : ' Failed ');
  console.log(sum(true) == 'n is undefined ' ? ' Passed ' : ' Failed ');
   console.log(sum("test")== 'n is undefined ' ? ' Passed ' : ' Failed ');
}
test();