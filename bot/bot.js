const sendBtn  = document.querySelector('#send_btn');
const token = '7088196800:AAHA7Slm6J108OqzHc7wrT_bz6JsRNczMu8';
const chat_id = 6486689223;
const API_URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=<message>`;

const userName = document.querySelector('#user_name');
const userMail = document.querySelector('#user_mail');
const userMsg  = document.querySelector('#user_msg');

function sendMessage(){
    const user = {
        name: userName.value,
        mail: userMail.value,
        message: userMsg.value
    }

    let message = `Name: ${user.name} ; Mail: ${user.mail} ; Message: ${user.message} ;`;
    let url = API_URL.replace('<message>', message)   //Замена сообщения на реальное сообщение пользователя

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log('Error!', err));
    
}

    sendBtn.addEventListener('click', sendMessage, ()=>{
        userName.innerHTML = "";
        userMail.innerHTML = "";
        userMsg.innerHTML = "";
    });