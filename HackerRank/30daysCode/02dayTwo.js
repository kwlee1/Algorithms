// Task: Operators

// Given the meal price (base cost of a meal), tip percent (the 
// percentage of the meal price being added as tip), and tax 
// percent (the percentage of the meal price being added as 
// tax) for a meal, find and prin the meal's total cost. 

function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());
    var tip=mealCost*(tipPercent/100);
    var tax=mealCost*(taxPercent/100);
    var total=Math.round(tip+tax+mealCost);
    console.log("The total meal cost is " + total + " dollars."); 
}