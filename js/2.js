function task1()
{
    let arr=[4,16,36,25,-5,9,0];
    let summa=arr.reduce(function(sum, elem){
        if (elem>0 && elem<10) sum+=elem;
        return sum
    },0);
    alert("Данные: " + arr + "\nРезультат:  " + summa);
}