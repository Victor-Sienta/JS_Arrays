function isNumberEven(arr)
{
    if (arr.every(elem=>(elem%2==0)))
    return true;
    else
    return false;
}
let arrMain=['2','4','3'];
alert(arrMain + " " + isNumberEven(arrMain));

    