const send = document.getElementById("send-btn")
const inputText = document.getElementById("input1")
send.addEventListener("click",function(){
    const paragraph = document.getElementById("chat")
    paragraph.innerHTML = paragraph.innerHTML + `<p id = ${inputText.value}>${inputText.value}</p>`
    inputText.value = ""
})