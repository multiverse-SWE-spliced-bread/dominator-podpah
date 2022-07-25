const boxes = document.getElementById("blocks")
for(let i =0 ; i < 100;i++){
    const box = document.createElement(`div`)
    box.setAttribute("id",`block-${i}`)
    box.setAttribute("class","red-block")
    boxes.appendChild(box)
}
const box2 = boxes.cloneNode(true)
box2.setAttribute('id',"block2")
console.log(box2.childNodes)
//for(each in box2){
    //console.log(box2[each][0])
    //box2[each].setAttribute("class","purple-block")
//}
document.body.appendChild(box2)