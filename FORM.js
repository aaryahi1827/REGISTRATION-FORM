const handleClick = () => {

    let name = document.getElementById('floatingName').value;
    let email = document.getElementById('floatingInputGrid').value;
    let password = document.getElementById('floatingPassword').value;
    let gender = document.getElementById('floatingSelectGrid').value;
    let dob = document.getElementById('floatingInput').value;
    let address = document.getElementById('floatingTextarea2').value;

    let specialCharacters = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
        '}', '~', '£', '€', '©', '®', '™', '¥', '•', '§', '±', '÷', '∞', '¿', '¡'
    ];

    
    if (!name || !email || !password || !gender || !dob || !address) {
        alert("Missing Mandatory Details");
        return; 
    }

   
    if (!email.includes('@')) {
        alert("Please include @ in e-mail address");
        return; 
    }

   
    let containsSpecialCharacter = specialCharacters.some(char => password.includes(char));
    if (!containsSpecialCharacter) {
        alert("Please include a special character in the password");
        return; 
    }

  
    alert("Form submitted successfully!");
}




    