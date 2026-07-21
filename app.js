let btn = document.querySelectorAll(".choice1");
let msg1 = document.querySelector(".msg");
let compscore1 = document.querySelector("#compscore");
let yourscore1 = document.querySelector("#yourscore");
let resetbtn2 = document.querySelector(".resetbtn1");
let count1 = 0;
let count2 = 0;
 // getting value from user making an function

btn.forEach((btns) =>{
    btns.addEventListener("click", () => {
        let userval = btns.getAttribute("ID");
        playgame(userval);
    });
});

// making function for computer generated value

const compgenval = () =>{
    const optn = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random()*3);
    let compval = optn[idx];
    return compval;
}

// making function for playing game
const playgame = (userval1) => {
    let c1 = compgenval();
    if(userval1 === c1){
        msg1.innerText = "Game Draw";
    } else{
        let user= true;
        if(userval1 === "rock"){
            // computer must generate scissor or paper otherwise game has been draw for same result
            user = c1 === "paper" ? false : true;
        }else if (userval1 === "paper"){
            user = c1 === "scissor" ? false : true;
        }else {
            user = c1 === "rock" ? false : true;
        }
        showwinner(user);
    }
}

const showwinner = (user1) =>{
    
    if(user1){
        msg1.innerText = "You Won";
        count1++;
        yourscore1.innerText = count1;

    }else{
        msg1.innerText = "You Lose";
        count2++;
        compscore1.innerText = count2;
    }
}

resetbtn2.addEventListener("click", ()=>{
    yourscore1.innerText = 0;
    compscore1.innerText = 0;
    msg1.innerText = "Your Move";
    count1 = 0;
    count2 = 0;
})