// Coding Challenge 04

let products = [
    {Name: "T-shirt", Category: "apparel", Price: 15.00, Inventory: 18},
    {Name: "Apple", Category: "groceries", Price: 2.00, Inventory: 25},
    {Name: "Table", Category: "furniture", Price: 25.00, Inventory: 8},
    {Name: "Computer", Category: "electronic", Price: 500.00, Inventory: 4},
    {Name: "Bleach", Category: "household", Price: 12.00, Inventory: 7}

];

// Step 3: Applying a dynamic discount
console.log(products);
for(let product of products) {
    let discount = 0;

    switch (product.Category) {
        case "electronic":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "household":
        case "groceries":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }
        
                        
    let promoPrice = product.Price - (product.Price * discount);
    product.promoPrice = promoPrice;
    
}
// Step 4 : Customer Types
const customerType = ["regular", "student", "senior"]
let extraDiscount = 0;
if (customerType === "student") {extraDiscount = 0.05;}
else if (customerType === "senior") {extraDiscount = 0.07;}
else {extraDiscount = 0;}

// Step 5: Checkout Process and Inventory

for (let index = 0; index < 3; index++) {
    let subTotal = 0
    for (const product of products) {
        subTotal = subTotal + product.promoPrice;
        if (product.Inventory>0)
        (product.Inventory--)
    }
    let finalTotal = subTotal * (1 - extraDiscount);
console.log(`Customer ${index}: $${finalTotal.toFixed(2)}`);
}
// Step 6: Inspecting Products
let oneProduct = products[2]
for (const key in oneProduct) {
    console.log(`Product's ${key} is ${oneProduct[key]}.`);
    
}

