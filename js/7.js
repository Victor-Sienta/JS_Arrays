function task1(){
    let fullarrt=Array.from(Array(10),()=>{return Math.round(Math.random()*10)});
    // console.log(fullarrt);
    let summaCh = fullarrt.reduce((sum, elem, index) =>
        {
            if(index%2==0) sum+=elem;
            return sum;
        },0);
    let summaNoCh = fullarrt.reduce((sum, elem, index) =>
        {
            if(index%2!=0) sum+=elem;
            return sum;
        },0);
    alert ("Исходный массив:  " + fullarrt + "\nСумма чисел на четной позиции  " + summaCh + "\nСумма чисел на нечетной позиции  " + summaNoCh + "\nРезультат деления  " + (summaCh/summaNoCh).toFixed(2));
}