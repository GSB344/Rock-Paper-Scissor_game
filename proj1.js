let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const usrscr=document.querySelector("#user-score");
const cmpscr=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++;
    usrscr.innerText=userScore;
    msg.innerText=`You win, ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor='green';
    }
    else{
    compScore++;
    cmpscr.innerText=compScore;
    msg.innerText=`You lose, ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor='red';
    }
}

const playGame=(userChoice)=>{
    console.log("User choice",userChoice);
    const compChoice=getCompChoice();
    console.log("Comp choice",compChoice);

    if(userChoice===compChoice){
    msg.innerText="Game was draw, Play again";
    msg.style.backgroundColor="darkblue";
    }
    else
    {
        let userWin=true;
        if(userChoice="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice="paper")
        {
            userWin=compChoice==="scissors"?true:false;
        }
        else
        {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})