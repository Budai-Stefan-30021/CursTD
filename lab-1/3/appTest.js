function test() {
  console.log(sum(0) == 0 ? ' Passed ' : ' Failed ');
  console.log(sum(2) == 3 ? ' Passed ' : ' Failed ');
  console.log(sum(4) == 10 ? ' Passed ' : ' Failed ');
  console.log(sum() == 'n is undefined ' ? ' Passed ' : ' Failed ');
  console.log(sum(true) == 'n is undefined ' ? ' Passed ' : ' Failed ');
   console.log(sum("test")== 'n is undefined ' ? ' Passed ' : ' Failed ');
}
test();
