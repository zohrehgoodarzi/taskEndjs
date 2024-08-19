const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const generalEnquiry=document.getElementById("generalEnquiry");
const supportRequest=document.getElementById("supportRequest");
const buttonSubmit=document.getElementById("buttonSubmit");
const alertBox1FirstName=document.getElementById("alertBox1FirstName");
const alertBox2LastName=document.getElementById("alertBox2LastName");
const alertBox3Email=document.getElementById("alertBox3Email");
const alertBoxRadio=document.getElementById("alertBoxRadio");
const  radioButtonDiv=document.querySelectorAll(".radioButtonDiv");
const firstRadioDiv=document.getElementById("firstRadioDiv");
const lastRadioDiv=document.getElementById("lastRadioDiv");
const message=document.getElementById("message");
const alertBoxMessage=document.getElementById("alertBoxMessage"); 
const acceptCheckbox=document.getElementById("acceptCheckbox");
const alertBoxCheckBox=document.getElementById("alertBoxCheckBox");
const alertsubmitBox=document.getElementById("alertBoxSubmit")
const alertText1=document.createElement("p");
const alertText2=document.createElement("p");
const alertText3=document.createElement("p");
const alertText4=document.createElement("p");
const alertText5=document.createElement("p");
const alertText6=document.createElement("p");
const alertText7=document.createElement("p");




radioButtonDiv.forEach((radioDiv)=>{
      radioDiv.addEventListener("click",()=>{
                        
         if(generalEnquiry.checked ){
             firstRadioDiv.classList.add("activeRadio");
              lastRadioDiv.classList.remove("activeRadio");
                                
                        
                }
        
        else if(supportRequest.checked){
                firstRadioDiv.classList.remove("activeRadio");
                lastRadioDiv.classList.add("activeRadio"); 
               
        }
        
        
        })
})

 



function isEmail(emailAdress){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
        if (emailAdress.match(regex)) 
          return true; 
      
         else 
          return false; 
      }






      


buttonSubmit.addEventListener("click",(e)=>{
      e.preventDefault();
   const emailValue= email.value;
        
        if(!firstName.value ){
           alertText1.innerText="This field is required";
           alertText1.style.color="red";
           firstName.style.border="1px solid red";
           alertBox1FirstName.appendChild(alertText1);
           
        }



        if(!lastName.value){
           alertText2.innerText="This field is required";
           alertText2.style.color="red";
           lastName.style.border="1px solid red";
           alertBox2LastName.appendChild(alertText2);
              
        }




        if(!emailValue || !isEmail(emailValue)){
                
        alertText3.innerText="Please enter a valid address";
           alertText3.style.color="red";
           email.style.border="1px solid red";
           alertBox3Email.appendChild(alertText3);
           return;
       }

        if(!supportRequest.checked && !generalEnquiry.checked){
                alertText4.innerText="Please select a queryType";
                alertText4.style.color="red";
                alertBoxRadio.appendChild(alertText4);  
                
        }

        if(!message.value){
                alertText5.innerText="This field is required";
                alertText5.style.color="red";
                message.style.border="1px solid red";
               alertBoxMessage.appendChild(alertText5); 
              
        }

        if(!acceptCheckbox.checked){
                alertText6.innerText="This field is required";
                alertText6.style.color="red";
               alertBoxCheckBox.appendChild(alertText6); 
        
        }


        if(firstName.value && lastName.value && (emailValue || isEmail(emailValue))&& message.value &&(supportRequest.checked || generalEnquiry.checked)&& acceptCheckbox.checked ){
                // alertText7.innerText=` ` ;
                alertText7.innerHTML=`<img class='image' src='./img/tick-circle-svgrepo-com.svg' alt='tik'>
                <P class=textsubmit>Message Sent! <br> Thanks for compeleting form.We'll be in touch soon!</P> `;
                alertText7.classList.add("alertTextBoxSubmit") ;
                alertsubmitBox.appendChild(alertText7);

                setTimeout(()=>{
                      
                        alertText7.innerText="" ;
                        firstName.value="";
                        lastName.value="";
                        email.value="";
                        message.value="";
                        acceptCheckbox.checked=false;
                        supportRequest.checked=false;
                        generalEnquiry.checked=false;
                        alertText1.innerText="";
                        firstName.style.border="1px solid #939C9B";
                        alertText2.innerText="";
                        lastName.style.border="1px solid #939C9B";
                        alertText3.innerText="";
                        email.style.border="1px solid #939C9B";
                        alertText4.innerText="";
                        alertText5.innerText="";
                        message.style.border="1px solid #939C9B";
                        alertText6.innerText="";
                        firstRadioDiv.classList.remove("activeRadio");
                       lastRadioDiv.classList.remove("activeRadio");
                       alertText7.classList.remove("alertTextBoxSubmit") ;
                  },2000)
        }
        

})



console.log(supportRequest.checked);



   

