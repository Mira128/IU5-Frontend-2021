/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
	  let max=null;
      let min=null;
      let start;
      let end;
      let num;
      let fl = false;
      for (let i=0; i < str.length; i++) {
        if ((/[0-9]/.test(str[i]) || str[i]==="-") && (!fl)) {
        fl = true;
        start = i;
      }
      if (!((/[0-9]/.test(str[i])) || str[i]==="-" || str[i]===".") && fl) {
        fl = false;
        end = i;
        if (str.slice(start,end) != "-"){
          num = parseFloat(str.slice(start,end));
          //alert(num);
          if ((max === null) || (num > max)){
            max = num;
          }
          if ((min === null) || (num < min)){
            min = num;
          }
        }
      }
    }
    let res = { 'min': min, 'max': max};
    return res;
	}
	
module.exports = getMinMax;