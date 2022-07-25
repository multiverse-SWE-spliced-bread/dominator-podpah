const quietbtn = document.getElementById("quiet-btn")
const header = document.getElementById("h1")
header.innerHTML = "Harry Site"
function pressed(){
    window.alert("hi")
    const paragraph =  document.getElementsByTagName("p")
    window.alert("hi")
    paragraph.innerText = paragraph.innerText.toLowerCase()
}

quietbtn.addEventListener("click",pressed)
   
