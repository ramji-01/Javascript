function addN(a) 
{
    if(a==0) //base case
        return 0;
    return a+addN(a-1) //recursive call & update statement
}

console.log(addN(5));