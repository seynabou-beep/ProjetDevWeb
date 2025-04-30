document.getElementById('emailForm').addEventListener('submit', function(event)
{
    var emailField=document.getElementById('email');
    var emailError=document.getElementById('emailerror');
    var emailPattern=/^[a-z]+\.[a-z]+@ugb\.edu\.sn$/;
emailField.value = emailField.value.tolowerCase();
if (!emailPattern.test(emailField.value))
{
    emailError.style.display= 'block';
    event.preventDefault();
} 
else 
{
    emailError.style.display='none';
}
});