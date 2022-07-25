const quietbtn = document.getElementById("quiet-btn")
const loudbtn = document.getElementById("loud-btn")
const sarcbtn = document.getElementById("sarc-btn")
const paragraph =  document.getElementById("patrick")


quietbtn.addEventListener("click",function (){
   
    paragraph.innerText = paragraph.innerText.toLowerCase()
    }
)

loudbtn.addEventListener("click",function(){

    paragraph.innerText = paragraph.innerText.toUpperCase()
})

sarcbtn.addEventListener("click",function(){
  
    let text = ""
    let go = true
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
   
