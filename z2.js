var N = parseFloat(prompt("Введите значение N (больше одного): "));
console.log("Введите значение N (больше одного):  " + N);

if (N <= 1 || isNaN(N)) {
  console.log("Введите корректное значение");
} else {

  var numbers = [];
  for (var i = 0; i < N; i++) {
    var num = parseFloat(prompt("Введите число " + (i + 1) + ":  "));
    console.log("Введите число " + (i + 1) + ":  " + num);
    numbers.push(num);
  }
 var sdvig = [0]

 for( var i = 0; i < N; i++){
    sdvig.push(numbers[i]);
 }
 sdvig.length--;

 console.log("Исходный массив:  "+ numbers);
 console.log("Полученный массив сдвигом вправо и первым элементом равным 0:  " + sdvig);
 
}

