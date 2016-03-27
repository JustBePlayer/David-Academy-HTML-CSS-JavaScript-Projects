
var number = 0;
var isCoonfirmed;

do {
    
    number = prompt('Въведете число из между 0 и 1000 включително', number);
    if (number === false || number == null) break;
    if (number > 1000 || number < 0) {
        isCoonfirmed = confirm('Въведохте число извън посочения интервал. Искате ли да опитате отново');
        if (isCoonfirmed === false) break;   
    }
}
while (number < 0 || number >1000);


if (number === false || number == null || isCoonfirmed === false || isNaN(parseInt(number))) {
    document.write('Emi igrata prikliuchva tuk');
}

else {

    document.write('<br />Вие въведохте числото ');
    number = parseInt(number);

    number = number.toString();

    // a - единици
    // b - десетици
    // c - стотици 
    // d - хилядни 

    if (number.length > 0) {
        var a = number[number.length - 1];
        a = parseInt(a);
        var aString;

        switch (a) {
            case 0: { aString = 'нула'; break; }
            case 1: { aString = 'едно'; break; }
            case 2: { aString = 'две'; break; }
            case 3: { aString = 'три'; break; }
            case 4: { aString = 'четири'; break; }
            case 5: { aString = 'пет'; break; }
            case 6: { aString = 'шест'; break; }
            case 7: { aString = 'седем'; break; }
            case 8: { aString = 'осем'; break; }
            case 9: { aString = 'девет'; break; }
        }

        if (number.length == 1)
            document.write(number + '(' + aString + ')');
    }

    if (number.length > 1) {

        var b = number[number.length - 2];
        b = parseInt(b);

        var bString;
        switch (b) {
            case 0: { bString = ''; break; }
            case 1: { bString = ''; break; }
            case 2: { bString = 'двадесет'; break; }
            case 3: { bString = 'тридесет'; break; }
            case 4: { bString = 'четиридесет'; break; }
            case 5: { bString = 'петдесет'; break; }
            case 6: { bString = 'шестдесет'; break; }
            case 7: { bString = 'седемдесте'; break; }
            case 8: { bString = 'осемдесет'; break; }
            case 9: { bString = 'деветдесет'; break; }
        }

        if (number.length == 2) {
            if (b == 1) {
                if (a == 1) document.write(number + '(единадесет)');
                else
                    document.write(number + '(' + aString + 'надесет)');
            }
            else {
                if (a == 0) document.write(number + '(' + bString + ')');
                else document.write(number + '(' + bString + ' и ' + aString + ')');
            }
        }
    }

    if (number.length > 2) {

        var c = number[number.length - 3];
        c = parseInt(c);

        var cString;

        switch (c) {
            case 0: { cString = ''; break; }
            case 1: { cString = 'сто'; break; }
            case 2: { cString = 'двеста'; break; }
            case 3: { cString = 'триста'; break; }
            case 4: { cString = 'четиристотин'; break; }
            case 5: { cString = 'петстотин'; break; }
            case 6: { cString = 'шестстотин'; break; }
            case 7: { cString = 'седемстотин'; break; }
            case 8: { cString = 'осемстотин'; break; }
            case 9: { cString = 'деветстотин'; break; }
        }

        if (number.length == 3) {
            if (b == 0) {
                if (a == 0) document.write(number + '(' + cString + ')');
                else document.write(number + '(' + cString + ' и ' + aString + ')');
            }
            else if (b == 1) {
                if (a == 0) document.write(number + '(' + cString + ' и' + ' десет' + ')');
                else if (a == 1) document.write(number + '(' + cString + ' и ' + 'единадесет)');
                else if (a != 0) document.write(number + '(' + cString + ' и ' + aString + 'надесет)');
            }

            else {
                if (a == 0) { document.write(number + '(' + cString + ' и ' + bString + ')'); }
                else {
                    document.write(number + '(' + cString + ' ' + bString + ' и ' + aString + ')');
                }

            }
        }
    }

    if (number.length == 4) {
        document.write('хиляда');
    }
}