/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30 
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
      function prettySum(arr) {
 	let sum = 0;
 	let border =(arr.length-(arr.length%2))/2;
 	alert(border);	
    for (let i=0; i < border+1; i++) {
		sum = arr[i*2] + sum;
		alert(sum);	
	}
	sum = sum*arr[arr.length-1];
	return sum;
  }
}

module.exports = prettySum;