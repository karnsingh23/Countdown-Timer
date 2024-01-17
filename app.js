let endDate = "16 January 2025, 6:38 PM";
document.querySelector("#end-date").innerHTML=endDate;
let boxes = document.querySelectorAll("input");
console.log(boxes)
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now)/1000;
    if (diff<0) return;
    boxes[0].value = Math.floor(diff/3600/24);
    boxes[1].value = Math.floor(diff/3600)%24;
    boxes[2].value = Math.floor(diff/60)%60;
    boxes[3].value = Math.floor(diff)%60;
   
}

setInterval(() => {
    clock();
}, 1000);