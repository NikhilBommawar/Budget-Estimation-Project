
//   Reading form element and buttons 

var addEstimate=document.getElementById("estimate");
var addButton=document.getElementById("add_estimate");
// var tallyButton=document.getElementById("tally_budget");
console.log(addEstimate);
console.log(addButton);
// var EstimateArray=new Array();
// var count=0;

// Adding Event Listener to calculate total estimate
var TotalEstimate=0;
addButton.addEventListener("click",(e) => {
   e.preventDefault();
   var estimate=parseInt(addEstimate.input_estimate.value);
//    EstimateArray[count]=estimate;
//    count+=1;
//    console.log(EstimateArray);
   TotalEstimate+=estimate;
  console.log(TotalEstimate);
 } 
)

// Adding Event Listener to tally total estimate and Annual Budget
var AnnualBudget=100000;
 function tally(){
    if(TotalEstimate<=100000){
        document.writeln("<h3> Hurray (:>) You can proceed with your deals... </h3>")
        document.writeln("<h3> Total Estimate of your Professional Deals is = "+TotalEstimate+"</h3>")
        document.writeln("<h3>  Your Annual Budget is = "+AnnualBudget +"</h3>")
   }
   else{
    document.writeln("<h3>Sorry (:<) You cannot proceed with your deals...Total Estimate goes higher than Annual Budget </h3>");
    document.writeln("<h3> Total Estimate of your Professional Deals is = "+TotalEstimate+"</h3>")
    document.writeln("<h3>  Your Annual Budget is = "+AnnualBudget +"</h3>")
   }
 }