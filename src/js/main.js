 let sum = 0, days = 0;
function calc() {
   
    let site = prompt("Какой тип сайта вы хотите? 1- Сайт визитка 2- Интернет магазин 3-Корпоративный");
    if (site == "1") {
        sum += 1000;
        days += 1;
    } else if (site == "2") {
        sum += 4000;
        days += 5;
    } else if (site == "3") {
        sum += 2000;
        days += 2;
    } else {
        alert("Вы ввели не заданные данные");
        calc();
    }
    
    let design = prompt("Какой тип дизайна? 1 - Шаблон 2 - Уникальный");
    if (design == "1") {
        sum += 1000;
        days += 1;
    } else if (design == "2") {
        sum += 3000;
        days += 3;
    } else {
        alert("Вы ввели не заданные данные");
        calc();}
     let adaptive = prompt("Какой тип адаптивности? 1 - Только ПК  2 - ПК + Мобильная");  
        if (adaptive == "1") {
        sum += 1000;
        days += 1;
    } else if (adaptive == "2") {
        sum += 2000;
        days += 2;
    } else {
        alert("Вы ввели не заданные данные");
        calc();
    }
   alert("Работа займёт" + days + ",и будет стоить" + sum);
    
}
    calc();
