var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

function getPassword(){
    var passwordChars = "";
    do{
        var passwordLength = prompt("Choose the length of your password(btw 8-128 char",);
       if(passwordLength<8 || passwordLength>128)
        {alert("Password Length must between 8-128 characters")}
    } while(passwordLength<8 || passwordLength>128)
    if(passwordLength<8 || passwordLength>128){
        alert("Password Length must between 8-128 characters")
    }
    var containsLowerCase = confirm("Would you like to include lowercase letters?");
    if(containsLowerCase == true){
        passwordChars += lowerCase;
       

    }
    var containsUpperCase = confirm("Would you like to include uppercase letters?");
    if(containsUpperCase == true){
       passwordChars += upperCase;
     
    }
    var containsSpecialChars = confirm("Would you like to include special letters?");
    if(containsSpecialChars == true){
       passwordChars += special;
       
    }
    var containsNumbers = confirm("Would you like to include numbers?");
    if(containsNumbers == true || (containsLowerCase == false && containsSpecialChars == false && containsUpperCase == false)){
       passwordChars += numbers;
       console.log(passwordChars);
    }

    console.log(passwordLength);
   
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.substring(randomNumber,randomNumber+1);
        }
        document.getElementById("password").value = password
    }