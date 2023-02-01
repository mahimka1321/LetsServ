let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let email = document.getElementById('email');
let nameIn = document.getElementById('name');
let textInfo = document.getElementById('textInfo');
document.getElementById('btnForm').onclick = function(e){
    e.preventDefault();
    if(!reg.test(email.value))
    {
        alert("Поле с почтой не может быть пустым или не являтся почтовым адресом")
    } else if(nameIn.value.length < 1 || nameIn.value.length > 100)
    {
        alert("Поле с именеи не может быть пустым")
    } else if(textInfo.value.length < 15 || textInfo.value.length > 100)
    {
        alert("Поле с сообщение не может быть пустым или содержать меньше 15 символов")
    } else {
        alert("Сообщение отправлено")
    }
};