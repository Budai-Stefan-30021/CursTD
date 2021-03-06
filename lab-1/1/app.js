console.log('Welcome to data transmission ');

//afisara mesaj la consola

mesajNou = document.getElementById('message').innerHTML = 'Acesta este mesajul nou';

console.log(mesajNou)


//afisare valoare dintr-un obiect JSON

var user = {
    "id": 1,
    "name":"Alexandru Cristea ",
    "username": "acristea",
}
console.log(user.name);

//definirea si apelul unei functii JavaScript

function print (message){
    console.log (message);
    document.getElementById('message').innerHTML = message;
}
    print(user.username);


 //utilizarea functiei if ca operator ternar

 /*var password ="Abc123";
   if( password == "Abc123 "){
   console .log ("Parola acceptata");
}  else {
   console .log ("Parola este gresita");
} */

var password ="Abc123";
    console.log (password == "Abc123"? "ALLOW" : "DENY");


    //Folosirea librariei JQuery in aplicatia JavaScript

    var counter = 0;

      function printValue(divId, value){
      $("#"+divId).html(value)
      }
      printValue ("counter", 0);
      $("#inc").on('click', increment);

      function increment(){
      counter++;
      printValue ("counter", counter);
      }
