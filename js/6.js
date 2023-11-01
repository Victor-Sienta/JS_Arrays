function task1()
{
let first=arr.shift();
arr.push(first)
return arr;
}   
let arr=[1,2,5,12,15,21];
alert("Исходные данные: " + arr + "\nРезультат:  " + task1(arr));