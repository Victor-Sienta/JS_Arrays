function task1(){
    let newArr=arr.filter(index=>index%5==0);
    return newArr;
}
let arr=[1,2,5,12,15,21];
alert(arr + " " + task1(arr))