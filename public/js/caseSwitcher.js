const quietbtn = document.getElementById("quiet-btn")
const loudbtn = document.getElementById("loud-btn")
const sarcbtn = document.getElementById("sarc-btn")
const header = document.getElementById("patrick")


quietbtn.addEventListener("click",function (){
    const paragraph =  document.getElementById("patrick")
    paragraph.innerText = paragraph.innerText.toLowerCase()
    }
)

loudbtn.addEventListener("click",function(){
    const paragraph =  document.getElementById("patrick")
    paragraph.innerText = paragraph.innerText.toUpperCase()
})

sarcbtn.addEventListener("click",function(){
    const paragraph =  document.getElementById("patrick")
    let text = ""
    let go = false
    for(each in paragraph.innerText){
        if (go && paragraph.innerText[each] !== " "){
            text += paragraph.innerText[each].toUpperCase()
            go =false
        }else if (go === false && paragraph.innerText[each] !== " "){
            go =true
            text += paragraph.innerText[each].toLowerCase()
        }else{
        text += paragraph.innerText[each]}
    }
    paragraph.innerText = text
})
   
