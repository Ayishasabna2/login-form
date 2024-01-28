function handlesubmit(){
    const message = document.getElementById('message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    message.style.display = "none";

    if(name.length == 0){
        message.innerText = "Please enter your full name";
        message.style.display = "block";
        return false;
    }

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        message.innerText = "Please enter a valid email";
        message.style.display = "block";
        return false;
    }

    if(password.length < 8){
        message.innerText = "password length must be greater than 8";
        message.style.display = "block";
        return false; 
    }
    
    console.log(name);
    console.log(email);
    console.log(password);
    alert("Success!");
    return false;
    
}