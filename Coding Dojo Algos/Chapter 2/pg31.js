//Rockin' the Dojo Sweatshirt
function sweatshirtPricing(num){
    var price = 20; 
    if(num===1){
        console.log("$20 full price");
        return price; 
    }else if(num===2){
        price = (price*2)*.91;
        price = Math.ceil(price);  
        console.log("$"+price); 
        return price; 
    }else if(num===3){
        price = (price*3)*.81;
        price = Math.ceil(price);  
        console.log("$"+price); 
        return price; 
    }else if(num>=4){
        price = (price*num)*.65;
        price = Math.ceil(price);  
        console.log("$"+price); 
        return price; 
    }
}
sweatshirtPricing(1)
sweatshirtPricing(2)
sweatshirtPricing(3)
sweatshirtPricing(4)
sweatshirtPricing(5)

//Clock Hand Angles, Revisited 
function clockHandAngles(sec){
    var minsinsecs = sec%3600; 
    var seconds = minsinsecs % 60; 
    var hours = (sec/3600)%12;
    var hourdegs = (hours/12)*360;
    var mindegs = (minsinsecs/3600)*360;
    var secdegs = (seconds/60)*360;  
    var message = "Hour hand: " + Math.trunc(hourdegs) + " degs. Minute hand: " + Math.trunc(mindegs) + " degs. Second hand: " + secdegs + " degs." 
    console.log(message); 
}
clockHandAngles(3601); 
clockHandAngles(119730); 