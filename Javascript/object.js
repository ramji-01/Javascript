let user = {};
console.log(user);
user["name"] = "Ramji";
console.log(user);
user.name = "Ramji N";
console.log(user);
delete user.name;
console.log(user);

let product = {
    name: "TATA",
};
product["name"] = "NEXON";
console.log(product);
console.log("name" in product);
product["color"] = "Red";
product["serialNumber"] = "TN32EE2322";

for(key in product)
    console.log(key + " - " + product[key]);