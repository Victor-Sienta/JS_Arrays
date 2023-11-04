function keys(){
    let newArrKeys=[];
    
    for (i in datafirst)
    {
    let elemNum = Object.keys(datafirst[i]);
    newArrKeys = newArrKeys.concat(elemNum);
    }
    return newArrKeys;
}


function values(){
    let newArrValues=[];
    
    for (i in datafirst)
    {
        let elemNum = Object.values(datafirst[i]);
        newArrValues = newArrValues.concat(elemNum);
    }
        
    return newArrValues;
}


function sumValues(arr){
    let summa = arr.reduce(function(sum, elem){
        sum+=elem;
        return sum;
    },0);
    return summa
}


function task1(){
    alert("Ключи " + keys(datafirst)+"\nЗначения "+values(datafirst)+"\nСумма значений "+sumValues(values(datafirst)));
}

let datafirst = [
{
    1: 11,
	2: 12,
	3: 13,
},
{
	1: 21,
	2: 22,
	3: 23,
},
{
	1: 24,
	2: 25,
	3: 26,
},
];