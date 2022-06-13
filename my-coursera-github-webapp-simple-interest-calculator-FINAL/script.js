
    function computeInt() {
        
       var principal = parseFloat(document.getElementById('principalAmt').value);
       var intRate = parseFloat(document.getElementById('interestSlider').value);
       var convertRate = intRate / 100; 
       var yearsSelect = parseFloat(document.getElementById('numOfYears').value);
       var currentYear = new Date().getFullYear();
       var futureYearsAhead = currentYear + yearsSelect;            
       var earningsPerYear = principal * convertRate;  
       var total = earningsPerYear * yearsSelect;
       var totalAccumulation = principal + total; 

        if(principal>0){
  
    document.getElementById("display_myStr1").innerHTML= "If you deposit $<mark>"+principal+"</mark>\<br\>at an interest rate of <mark>"+intRate+
    "</mark>%\<br\>for <mark>"+yearsSelect+"</mark> year(s), you will receive \<br\> $<mark>"+total+"</mark> extra by the year <mark>"+futureYearsAhead+"</mark>.\<br\>This means you will \<br\>accumulate $<mark>"+totalAccumulation+"</mark>\<br\> in total.\<br\>";        
        }

       else {  
         alert("Enter a positive number.")
     }  
        
    }
       
    function displayCurrentYear() {
        
        var currentYearForPage = new Date().getFullYear();
        
      document.getElementById("display_myStr5").innerHTML = String("&copy; ") + currentYearForPage + String(" Everyone Can Get Rich.");  
        
    } 
           
  function  updateSlidingRange()
{
    var ratevalue = document.getElementById("interestSlider").value;
    document.getElementById("display_MyRate").innerText  = ratevalue+" %";
    
}

