let boxes = document.querySelectorAll(".box");
let btns = document.querySelectorAll("button");
let winner = document.querySelector("#winner");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let turn0 = true;      //playerX,playerO

const resetgame = ()=>{
    count = 0;
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
const winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==true){
            box.innerText = "O";
            count++;
            if(count ==9){
                draw();
            }
            turn0 = false;
        }
        else{
            box.innerText = "X";
            count++;
            if(count ==9){
                draw();
            }
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
    
});
   const showwinner = (win)=>{
    winner.innerText = `congratulation winner of the game is ${win}`;
    msgcontainer.classList.remove("hide");
    for (const box of boxes) {
        box.disabled = true;
    }
   }
 const draw = ()=>{
    winner.innerText = `the game is DRAW`;
    msgcontainer.classList.remove("hide");
    for (const box of boxes) {
        box.disabled = true;
    }
   }
const checkwinner = ()=>{
for (let i of winpatterns) {
    // console.log(i[0],i[1],i[2]);   // get index of boxes
    // console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);  //access boxes by using index given in winpattern
       let pos1 = boxes[i[0]].innerText;
       let pos2 = boxes[i[1]].innerText;
       let pos3 =boxes[i[2]].innerText;
       if(pos1!=""&& pos2!=""&& pos3!=""){
        if(pos1==pos2&& pos2==pos3){
            count = 0;
            console.log("winner",pos1); 
            showwinner(pos1);

        }
       };
};
};

