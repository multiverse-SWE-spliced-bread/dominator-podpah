const boxes = document.getElementById("blocks")
function hide (ele){
    console.log("made it")
    ele.style.visibility = "hidden"
}
for(let i =2 ; i < 100;i++){
    const box = document.createElement(`div`)
    box.setAttribute("id",`block-${i}`)
    box.setAttribute("class","red-block")
    box.addEventListener("mouseover",function(){
        box.style.visibility = "hidden"
    })
    box.addEventListener("mouseleave", function(){
         box.style.visibility = "visible"
    })
    boxes.appendChild(box)
}
const box2 = boxes.cloneNode(true)
box2.setAttribute('id',"block2")
document.body.appendChild(box2)





