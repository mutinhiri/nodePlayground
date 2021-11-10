//Str Length Task 1
function stringLength(string){
  let str_length = 0
  for(let i = 0; i < string.length; i++){
    str_length += 1
    if (str_length > 1 && str_length < 10){
      return str_length
    }
    else{
      throw new Error('string length should be between 1 and 10 chracters')
    }
  }
}

//Task 2  Reverse String

function reverseString(string){
    return string.split('').reverse().join()
}

//task 2 test
test(reverseString('hello'),()=>{
  expect(reverseString('hello').toBe('olleh'))
})

//task 3 
function add(a, b) {
  return a + b;
}function subtract(a, b) {
  return a - b;
}function multiply(a, b) {
  return a * b;
}function divide(a, b) {
  return a / b;
}function modulo(a, b) {
  return a % b;
}
