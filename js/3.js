function isNumberEven(arr)
{
    passed = arr.every(elem=>(elem%2==0));
    return passed;
}
let arrMain=['2','4','3'];
alert("Данные: " + arrMain + "\nРезультат:  " + isNumberEven(arrMain));

    