function task1()
{
    let arr=[4,16,36,25];
    alert ("Исходное среднее арифметическое: " + arr.reduce((a, b) => (a + b)) / arr.length +
    "\nОкругленное до десятых: " + (Math.ceil((arr.reduce((a, b) => (a + b)) / arr.length)*10)/10));
    // alert ((Math.ceil((arr.reduce((a, b) => (a + b)) / arr.length)*10)/10));
}
task1()