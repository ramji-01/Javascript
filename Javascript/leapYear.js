//leap year divide by 4
//leap year for century years - should be divide by 100 and 400
let year1 = 1800;
if(year1%4==0)
{
    if(year1%100==0)
    {
        if(year1%400==0)
        {
            console.log("leap");
        }
        else
        {
            console.log("no");
            
        }
    }
    else
    {
        console.log("no");
        
    }

}
else
{
    console.log("no");  
}
