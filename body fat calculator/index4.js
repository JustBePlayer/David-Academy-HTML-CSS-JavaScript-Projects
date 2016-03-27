//Това са Базовите променливи на нещата които трябва да се изчислят
var calories;
var BasicMetabolicRace;
var bodyMassIndex;

//Функция която изписва какво е въведено от range - (input) за Възраст
function DisplayRangeVal() {
    var range1 = $(".rangein").val();

    $("span.radioto").html(range1);

    BMResult();
    CaloriesNeed();
    HideResult();
}

//Функция която променя стойносите на сантиметрови на range (input) за Височина
function SizeCant() {

    
    var cant1 = $('input#cantimeter').val();

    $('#range1').attr('max', '272')
    $('span#size').html('272 cm');
    $('#range1').removeAttr('disabled');

    BodyMassKg();
    BMResult();
    CaloriesNeed();
    HideResult();
}

//Функция която променя стойносите на инчови на range (input) за Височина
function SizeInch() {

    var inch1 = $('input#inches').val();

    $('#range1').attr('max', '107')
    $('span#size').html('107 in');

    $('#range1').removeAttr('disabled');

    BodyMassKg();
    BMResult();
    CaloriesNeed();
    HideResult();
}

///Функция която изписва какво е въведено от range - (input) за Височина
function DisplaySizeVal() {
    var range2 = $("#range1").val();

    $("span.razmera").html(range2);
    BodyMassKg();
    BMResult();
    CaloriesNeed();
    HideResult();
}

//Функция която изчислява Процента мазнини
function BodyMassKg() {
    if ($('input#kilos').is(':checked')) {

        var kg1 = $('input#bodyweight').val();
        var height = parseInt($('input#range1').val()) / 100;
        height = Math.pow(height, 2);

        bodyMassIndex = kg1 / height;
        
        //bodyMassIndex = Math.round(bodyMassIndex * 100) / 100;
        

        $('span#resultMass').html(bodyMassIndex);
    }
    if ($('input#lbs').is(':checked')) {

        var lbs1 = $('input#bodyweight').val();
        var height = parseInt($('input#range1').val());
        height = Math.pow(height, 2);

        bodyMassIndex = (lbs1 / height) * 703;

        $('span#resultMass').html(bodyMassIndex);
    }
    HideResult();
    MakeColor();
}

// Функция която служи да се добавя атрибути съответно на сантиметър/килограм и инч/паунд за да може да се спази вормулата ако искаме 
// да изчисилим Процента мазнини то трябва двете стойности на двата радиу бутона да вървят ръка за ръка.
function AddAtributeKgAndCant() {
    
    if ($('input#kilos').is(':checked')) {
        
        $("input#cantimeter").prop("checked", true);
        BodyMassKg();
        BMResult();
        CaloriesNeed();
        HideResult();
    }

    if ($('input#cantimeter').is(':checked')) {
        $("input#kilos").prop("checked", true);
        BodyMassKg();
        BMResult();
        CaloriesNeed();
        HideResult();
    }
}

// Функция която служи да се добавя атрибути съответно на сантиметър/килограм и инч/паунд за да може да се спази вормулата ако искаме 
// да изчисилим Процента мазнини то трябва двете стойности на двата радиу бутона да вървят ръка за ръка.
function AddAtributeLbsAndInch() {
    
    if ($('input#lbs').is(':checked')) {
        $("input#inches").prop("checked", true);
        BodyMassKg();
        BMResult();
        CaloriesNeed();
        HideResult();
    }

    if ($('input#inches').is(':checked')) {
        $("input#lbs").prop("checked", true);
        BodyMassKg();
        BMResult();
        CaloriesNeed();
        HideResult();
    }
}

//Функция която служи за изчисляване на Базовата метаболитна скорост.

function BMResult() {
    if ($('input#kilos').is(':checked')) {
        var kg1 = $('input#bodyweight').val();
        var height = $('input#range1').val();
        var age = $(".rangein").val();

        var male;
        var female;

        if ($('input#male').is(':checked')) {
            BasicMetabolicRace = 10 * kg1 + 6.25 * height - 5 * age + 5;
        }
        if ($('input#female').is(':checked')) {
            BasicMetabolicRace = (10 * kg1) + (6.25 * height) - (5 * age) - 161;
        }

        $('span#resultBMR').html(BasicMetabolicRace);

    }
    if ($('input#lbs').is(':checked')) {
        var kg1 = $('input#bodyweight').val();
        kg1 = parseInt(kg1);
        kg1 = kg1 * 0.45;

        var height = $('input#range1').val();
        height = parseInt(height);
        height = height * 2.54;

        var age = $(".rangein").val();

        var male;
        var female;

        if ($('input#male').is(':checked')) {
            BasicMetabolicRace = 10 * kg1 + 6.25 * height - 5 * age + 5;
        }
        if ($('input#female').is(':checked')) {
            BasicMetabolicRace = (10 * kg1) + (6.25 * height) - (5 * age) - 161;
        }

        $('span#resultBMR').html(BasicMetabolicRace);
    }
    HideResult();
}

//Функция която проверява по колко калории се нуждаем да приемаме на де
function CaloriesNeed() {
  

    var koef = $("#sel option:selected").val();
    calories = BasicMetabolicRace * koef;


    $('span#cal').html(calories);
    HideResult();
}

//Функция която скрива и показва резултатите
function HideResult() {
    if ($('span#cal').is(':empty') == false && $('span#resultMass').is(':empty') == false && $('span#resultBMR').is(':empty') == false && $('span#resultMass').html() != 'Infinity') {
        $('div#results').css('display', 'block');
    }
}

//функция която служи за определяне на цвета и добавяне на коментар в полето за резултати.
function MakeColor() {
    if (bodyMassIndex <= 15) {
        $('div#results').css('background-color', '#FEEFB3');
        $('span#comment').html('Много силно поднормено тегло');
    }
    if (bodyMassIndex > 15 && bodyMassIndex <= 18.5) {
        $('div#results').css('background-color', '#DFF2BF');
        $('span#comment').html('Поднормено тегло');
    }
    if (bodyMassIndex > 18.5 && bodyMassIndex <= 25) {
        $('div#results').css('background-color', '#BDE5F8');
        $('span#comment').html('Нормално тегло');
    }
    if (bodyMassIndex > 25 && bodyMassIndex <= 30) {
        $('div#results').css('background-color', '#DFF2BF');
        $('span#comment').html('Наднормено тегло');
    }
    if (bodyMassIndex > 30 && bodyMassIndex <= 35) {
        $('div#results').css('background-color', '#FEEFB3');
        $('span#comment').html('Умерено пълно (клас I)');
    }
    if (bodyMassIndex > 35 && bodyMassIndex <= 40) {
        $('div#results').css('background-color', '#FFBABA');
        $('span#comment').html('Силно пълно (клас II)');
    }
    if (bodyMassIndex > 40) {
        $('div#results').css('background-color', '#D8000C');
        $('span#comment').html('Много силно пълно (клас III)');
    }
}