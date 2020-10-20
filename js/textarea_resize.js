var text = document.getElementById("text");
var MainBlock = document.getElementById("main");
function resize() {
    text.style.height = 'auto';
    text.style.height = text.scrollHeight+'px';

    if (Number.parseInt(text.style.height) > 148) text.style.height = "148px";

    MainBlock.style.margin = text.style.height + "auto 100px auto";
    console.log(text.style.height + " auto 100px auto");
}