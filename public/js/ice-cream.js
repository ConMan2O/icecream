document.getElementById("ice-cream-form").onsubmit = () => {
    
    let isValid = true;

    clearErrors();

    let inputName = document.getElementById("inputName").value.trim();
    if(inputName === ""){
        document.getElementById("error-name").style.display = "block";
        isValid = false;
    }

    let email = document.getElementById("inputEmail").value.trim();
    if(email === ""){
        document.getElementById("error-email").style.display = "block";
        isValid = false;
    }

    let flavor = document.getElementById("flavor").value;
    if(flavor === "none"){
        document.getElementById("error-flavor").style.display = "block";
        isValid = false;
    }

    let coneSelected = false;
    let coneButtons = document.getElementsByName("cone-type");
    for(let i=0; i<coneButtons.length; i++){
        if(coneButtons[i].checked){
            coneSelected=true;
        }
    }

    if(!coneSelected){
        document.getElementById("error-cone").style.display = "block";
        isValid=false;
    }

    let size = document.getElementById("size").value;
    if(size==="none"){
        document.getElementById("error-size").style.display = "block";
        isValid=false;
    }

    return isValid;
    
    
};

function clearErrors(){
   
    let errors = document.getElementsByClassName("error")
    for (let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }

}