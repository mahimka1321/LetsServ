let oneBtn = document.getElementById('oneBtn');
let twooBtn = document.getElementById('twooBtn');

twooBtn.addEventListener('mouseover', function() {
    oneBtn.classList.add('twoo__animatic')
})

twooBtn.addEventListener('mouseout', function() {
    oneBtn.classList.remove('twoo__animatic')
})

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

let oneBtnCourses = document.getElementById('oneBtnCourses');
let oneCourses = document.getElementById('oneCourses');
let oneSecretContainerCourses = document.getElementById('oneSecretContainerCourses');
oneBtnCourses.addEventListener('click', function() {
    oneBtnCourses.classList.toggle('btn__courses_active')
    oneCourses.classList.toggle('courses_active')
    oneSecretContainerCourses.classList.toggle('secret__container_courses-active')
}) 

let twooBtnCourses = document.getElementById('twooBtnCourses');
let twooCourses = document.getElementById('twooCourses');
let twooSecretContainerCourses = document.getElementById('twooSecretContainerCourses');
twooBtnCourses.addEventListener('click', function() {
    twooBtnCourses.classList.toggle('btn__courses_active')
    twooCourses.classList.toggle('courses_active')
    twooSecretContainerCourses.classList.toggle('secret__container_courses-active')
}) 

let popapBtn = document.getElementById('popapBtn');
let popap = document.getElementById('popap');
let escPopap = document.getElementById('escPopap');

let header = document.getElementById('header');
let mainContent = document.getElementById('mainContent');
let footer = document.getElementById('footer');

popapBtn.addEventListener('click', function() {
    popap.classList.add('container_popap-active')

    header.classList.add('op_site')
    mainContent.classList.add('op_site')
    footer.classList.add('op_site')
});
escPopap.addEventListener('click', function() {
    popap.classList.remove('container_popap-active')

    header.classList.remove('op_site')
    mainContent.classList.remove('op_site')
    footer.classList.remove('op_site')
}) 

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

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