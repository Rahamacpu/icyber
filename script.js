const form=document.querySelector('form');

function sendEmail(){
Email.send({
    Host : "smtp.elastic.com",
    Username : " rahamamusa1222@gmail.com",
    Password : "00528A557C4B770A4F97971D6D40600F32A7",
    To : ' rahamamusa1222@gmail.com',
    From : " rahamamusa1222@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});