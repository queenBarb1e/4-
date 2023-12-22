var N = parseInt(prompt("Введите размер массива:"));
console.log("Введите размер массива: " + N);

if (N < 0 || isNaN(N)) {
    console.log("Введите корректное значение");
  } else {
var array = [];
for (var i = 0; i < N; i++) {
    var num = prompt("Введите элемент массива №" + (i + 1) + ":");
    console.log("Введите элемент массива №" + (i + 1) + ": " + num);
    array.push(num);
}
console.log('Массив: ' + array)

var maxEl = null;
for (var j = 0; j < N; j += 2) {
    var hranenie = parseFloat(array[j]); 
    if (maxEl === null || hranenie > maxEl) {
        maxEl = hranenie;
    }
}
console.log("Максимальный элемент с нечетными номерами: " + maxEl);
  }
