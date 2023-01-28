do{
    var nem = prompt('ведите ваше имя')
}while (!isNaN(nem) || nem == null || nem == '')
    
do{
    var nim = +prompt('Введите нынешний год');
}while (isNaN(nim) || nim == null || nim == '')

do{
    var nam = +prompt('Введите год своего рождения');
}while (isNaN(nam) || nam == null || nam == '')

console.log('ваше имя: ' + nem);

console.log('нынешний год:' + nim);

function func(num) {
    let res = nim - nam;
    console.log('Ваш возраст: ' + res);
    alert(('Ваше имя: ' + nem ) + (' и Ваш возраст: ' + res));
}

func(2023);


