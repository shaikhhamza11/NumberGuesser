//defining variables

let min=1,
    max=10,
    guessesLeft=3,
    winningNumber=getWinningNum(min,max);

//ui variables

const game=document.querySelector('#game'), 
      minNum=document.querySelector('.min-num'),  
      maxNum=document.querySelector('.max-num'), 
      guessInput=document.querySelector('#guess-input'), 
      guessBtn=document.querySelector('#guess-btn'),
      message=document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function (e){
    if(e.target.className ==='play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener("click",function (){
   let guess= parseInt(guessInput.value); 
    //wrong num
   if(isNaN(guess) || guess < min || guess >max){
       setMessage(`Please Enter  a number between ${min} and ${max}`,'red');
   }
   else{
   //winning num
    if(guess===winningNumber){
    //     guessInput.disabled=true;
    //   setMessage(`${winningNumber} is Correct`, 'green');
    //   guessInput.style.borderColor="green";
    gameOver(true,`${winningNumber} is Correct,You Won`);
   }
   else{

    guessesLeft -= 1;
    if(guessesLeft===0){
        //gameover
        // guessInput.disabled=true;
        // setMessage(`You Lost, Game Over. The correct number was ${winningNumber} `,'red');
        // guessInput.style.borderColor="red";
       gameOver(false,`You Lost, Game Over. The correct number was ${winningNumber}`);

    } 
    else{
        //gamecontinue
        guessInput.value='';
        setMessage(`${guess} is not correct.${guessesLeft} guess left`,'red');

    }

   }
}
});

function setMessage(msg,color){
    message.textContent=msg;
    message.style.color=color;
}
function gameOver(won , msg){
    let color;
    won === true ? color = 'green' : color = "red";
      guessInput.disabled=true;
       
        guessInput.style.borderColor=color;
        message.style.Color=color;
        setMessage(msg,color);
        //playagain
        guessBtn.value='Play Again';
        guessBtn.className+='play-again';


}
//get win num
function getWinningNum(min,max){
    return(Math.floor(Math.random()*max-min)+1);
}