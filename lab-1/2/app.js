document.getElementById('n').addEventListener('input ', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function sum(n) {
  if (typeof n === 'undefined ') return 'n is undefined ';
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}



      var counter = 0;

         function printValue(divId, value){
         $("#"+divId).html(value)
         }
         printValue ("counter", 0);
         $("#inc").on('click', increment);

         function increment(){
         if(counter < 10){
         counter++;

         printValue ("counter", counter);
         }
         else{
         document.getElementById('counter1').innerHTML = "Limita superioara atinsa!";
}
}

       $("#inc2").on('click', decrement);

       function decrement(){
         if(counter > 0){
       counter--;
       printValue ("counter", counter);
       }
          else{

           document.getElementById('counter1').innerHTML = "Limita inferioara atinsa!"
          }
}

