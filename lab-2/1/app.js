function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      message2: ''
    },
    methods: {
      doSomething: function () {

        console.log('The input string value is: ' + this.message);
        if(this.message === '123')
         this.message2 = this.message;
         else
         this.message2 ='';

      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
