function task1(arr, filerElem){
    return arr.filter((el) => el.startsWith(filerElem))
}

let arr=["https://www.drom.ru/","https://dzen.ru/","http://ya.ru/", "http://toyota.ru/" ];
alert("Исходные данные: " + arr + "\nРезультат:  " + task1(arr, "http:"));
