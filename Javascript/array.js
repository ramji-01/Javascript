let veges = ['a','b'];
console.log(veges);

let cars = ["Sonet","Seltos","Carens"]
for(i=0;i<cars.length;i++)
    console.log(cars[i]);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(i=0;i<matrix.length;i++)
{
    for(j=0;j<matrix.length;j++)
    {
        console.log(matrix[i][j]);
    }
}
    
let HotWheels = ["Sweet 16", "Twin mill"];
HotWheels.push("Bone shaker");
HotWheels.pop();
HotWheels.unshift("Datsun 510");
HotWheels.shift();
for(a of HotWheels)
    console.log(a);
