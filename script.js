// Email Validate check 
function ValidateEmail(inputText){
        var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(inputText.value.match(mailformat)){
            // calling redirect to Successful Transfer 
            otherPage();
        }else{
            // calling Invalid email  function
            Valid();

    }
}

// redirect back to next page calling function 
function otherPage(onclick){
    document.location.href="./sucessfultransfer.html";
}

//calling function  
function home(onclick){
    document.location.href="./home.html";
}

// Invalid email 
function Valid(onclick){
    let email = document.getElementById("email");
            email.style.backgroundColor = "hsl(2, 44%, 87%)";
            email.style.boxShadow = "0px 0 15px 2px  hsl(4, 100%, 67%)";
            email.style.color = "hsl(4, 100%, 67%)";
    // create text tag using javascript
            let valid = document.createElement("h3");
            valid.className = "validemail";
            valid.style.fontSize = "16px";
            valid.textContent = "Valid email requried"
            valid.style.color = "hsl(4, 100%, 67%)";
            document.body.appendChild(valid);    
}     
     

    
