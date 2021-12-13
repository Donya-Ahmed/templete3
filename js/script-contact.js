var myForm = document.getElementById('myForm')



function nameValidation(element) {
     console.log(element.value.lenght)
    var inputValue = element.value.trim()
    if (inputValue.length < 3){
    console.log("correct")
    handleError(element, "this field must be at least 3 character")
    
    }
    
    else
    
    {handleError(element)}
}
function emailValidation(element) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    console.log(emailPattern.test(element.value))
    if(emailPattern.test(element.value) == false) handleError(element , "please enter a valid email")
    else handleError(element)

}

function subjectValidation(element) {
    console.log(element.value.length)
   var inputValue = element.value.trim()
   if (inputValue.length < 5){
   console.log("correct")
   handleError(element, "this field must be at least 5 character")
   
   }
   
   else
   
   {handleError(element)}
}




function handleError(input, msg="") {
    input.nextElementSibling.innerText = msg
}
myForm.addEventListener('input', function (eve) {
    console.log(eve)

   switch (eve.target.name) {
       case "username":
           nameValidation(eve.target)
           break;
       case "useremail":
           emailValidation(eve.target)
           break;

       case "usersubject":
        subjectValidation(eve.target)
           break;

   }
})



// myForm.addEventListener('submit',function(item){
//     item.preventDefault()
//     var inputs=document.getElementsByClassName('inp')
//     console.log(inputs)
//     for(i=0;i<inputs.lenght;i++){
//         console.log(inputs.lenght)
//         if(inputs[i].value=="")
//         {
//             handleError(inputs[i].target, "this field must be  field")
//             console.log(error)
//         }
//     }
      
   
// })
var input1=document.getElementById('inp1')
var input2=document.getElementById('inp2')
var input3=document.getElementById('inp3')



  
myForm.addEventListener('submit',function(item){
     item.preventDefault()
    if(input1.value==""){
        handleError(input1, "this field is required")
        if(input2.value==""){
            handleError(input2, "this field is required ")

            if(input3.value==""){
                handleError(input3, "this field is required")
    
                
                
            
            }

            else{
                handleError(input3)

            }
            
        
        }

        else{
            handleError(input2)
            if(input3.value==""){
                handleError(input3, "this field is required ")
    
                
                
            
            }

            else{
                handleError(input3)

            }
            
        }
    
    }


    else{
        handleError(input1)
        if(input2.value==""){
            handleError(input2, "this field is required")

            if(input3.value==""){
                handleError(input3, "this field is required")
    
                
                
            
            }

            else{
                handleError(input3)

            }
            
        
        }

        else{
            handleError(input2)
            if(input3.value==""){
                handleError(input3, "this field is required")
    
                
                
            
            }

            else{
                handleError(input3)

            }
            
        }
    
    }
    
       
    
    
    
    
    
    
    })

