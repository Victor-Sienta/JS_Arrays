function task1(){
    let num = prompt("Введите число");
    if (isNaN(num))
        alert("Введите корректное число");
    else{
        let arr = num.toString().split('').map(elem => +elem +1);
        alert ("Исходное число:  " + num + "\nИзмененное число  " + arr.join(''));
    }
}