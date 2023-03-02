function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  var generateButton = document.getElementById("generate-button");
  var passwordInput = document.getElementById("password");
  var lengthInput = document.getElementById("password-length");
  
  generateButton.addEventListener("click", function() {
    var length = lengthInput.value;
    var password = generatePassword(length);
    passwordInput.value = password;
  });