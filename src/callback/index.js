function sum(num1,num2)
{
    return num1+num2;
}

function total(num1,num2,callback)
{
    return callback(num1,num2);

}

console.log(total(2,3,sum));


function data(callback)
{
    console.log(new Date());
   
    setTimeout(function()   
    {
        let date  = new Date();
        callback(date);
    },3000);
}

function print (datenow)
{
    
    
    console.log(datenow)

}


data(print);