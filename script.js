
// Pin Generate Area
document.getElementById('generate-pin').addEventListener('click', function() {
    const numberInput = document.getElementById('number-input');
    const numberCount = parseInt(numberInput.value);
    const NewNumberCount = numberInput.innerHTML = ("" + Math.random()).substring(2, 6); 
    numberInput.value = NewNumberCount;
})

// Pin Submit Area
function calculate(x) {
    form.display.value = form.display.value + x;
}


//Two input value matching
document.querySelector('.submit-btn').onclick = function(){
    const password = document.querySelector('#number-input').value;
        confirmPassword = document.querySelector('#number-input1').value;

        if(password == ""){
            alert("Please generate your pin.")
        }
        else if(password != confirmPassword){
            document.getElementById('wrong-pin').innerHTML = "❌ Pin Didn't Match, Please try again"
            return false;
        }
        else if(password == confirmPassword){
            document.getElementById('right-pin').innerHTML = "✅ Pin Matched... Secret door is opening for you"
        }
        return true;
    }

// Try 3 chance
document.getElementById('submitBtn').addEventListener('click', function(){
    handleProductChange(false);
});

function handleProductChange(isIncrease){
   const caseInput = document.getElementById('total-chance');
   const caseCount = parseFloat(caseInput.value);
   let caseNewCount = caseCount;
   if(isIncrease == false && caseCount > 0){
       caseNewCount = caseCount - 1;
   }
   caseInput.value = caseNewCount;
   const caseTotal = caseNewCount ;

   caseInput.value = document.getElementById('total-chance').innerText
    
 }



