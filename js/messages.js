var button = document.getElementById("Send_button");
var input = document.getElementById("text");
var MainBlock = document.getElementById("main");
var user_icon = document.getElementById("user_icon");
var user_id_span = document.getElementById("user_id_span");
var user = 0;
resize();
window.scrollTo(pageXOffset, document.documentElement.clientHeight);


//Отправка сообщений через кнопку
button.addEventListener('click', function() {
    sendMessage();
})


//Отправка сообщений через Enter
window.onkeydown = function (e) {
    if (e.code == "Enter") {
        sendMessage();
        input.onfocus;
    }
}

window.onkeyup = function (e) {
    if (e.code == "Enter") {
        input.value = "";
        resize();
    }
}


//Отправка сообщений (главный метод)
function sendMessage() {
    var text = input.value;
    if (textAllowed(text)) {
        createMessage(text);
        input.value = "";
        resize();
        window.scrollTo(pageXOffset, document.documentElement.clientHeight);
    }
    input.focus();
}


//Отображение сообщений
function createMessage(text) {
    var blockDiv = document.createElement('div');

    var block = document.createElement('div');
    block.classList.add("message_block");

    var user_name = document.createElement("div");
    user_name.classList.add("username");
    user_name.textContent = "Пользователь " + (user+1);
    block.appendChild(user_name);

    var content = document.createElement("div");
    content.textContent = text;
    block.appendChild(content);


    //выравнивание по правому краю, если это пользователь 1
    if (user == 0) blockDiv.style.textAlign = "-webkit-right";
    blockDiv.appendChild(block);

    MainBlock.appendChild(blockDiv);

}


//Можно ли использвать этот текст?
function textAllowed(text) {
    if (text == "") return false;
    for (var i = 0; i < text.length; i++) {
        if (text[i] != " " && text[i] != "\n") return true;
    }
    return false;
}


//Изменение размера textarea
function resize() {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight+'px';

    if (Number.parseInt(input.style.height) > 148) input.style.height = "148px";

    MainBlock.style.margin = "100px auto " + (Number.parseInt(input.style.height) + 50) + " auto";
}





//Изменение пользователя
user_icon.addEventListener('click', function() {
    if (user == 0) {
        user_id_span.textContent = "2";
        user = 1;
    } else {
        user_id_span.textContent = "1"; 
        user = 0;
    }

    SmoothBlink(user_id_span, 0.3, "#000000", "#dedede");
    SmoothBlink(user_icon, 0.3, "#000000", "#dedede");
})






//
//ДОП. МЕТОДЫ
//

//Метод, подсвечивающий объект
function SmoothBlink(object, transTime, firstCol, secCol) {
    object.style.transition = "0s";
    object.style.color = firstCol;
    setTimeout(function() {
        object.style.transition = transTime + "s";
        object.style.color = secCol;
    }, 1);
      
}