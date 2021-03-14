/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let startstr;
    let pointstr;
    let endstr;
    let fl = false;
    for (let i=0; i < str.length; i++) {
    	if (/[a-zA-Zа-яА-Я]/.test(str[i])) {
    		if (!fl) {
    		startstr = str.slice(0,i);
    		//alert("w"+startstr+"w");
    		endstr = str.slice(i+1,str.length);
    		//alert("w"+endstr+"w");
    		pointstr = str[i].toUpperCase();
    		str = startstr+pointstr+endstr;
    		}
    		fl = true;
    	}
    	else {
    		fl = false;
    	}
    }
    return str;
}

module.exports = capitalize;