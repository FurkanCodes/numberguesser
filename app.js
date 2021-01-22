/* HOW THE GAME WORKS
    - Player guesses a number between a min and a max
    - player gets certain amount of guesses
    - notify the player remanings
    - notify the player of the correct answer if s/he loses
    -player choses to play again
 */

 // values

 let min = 1, 
     max = 10,
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

    // UI 

const UIgame = document.querySelector('#game'),
      minNum= document.querySelector('.min-num');
      maxNum= document.querySelector('.max-num');
      guessBtn= document.querySelector('#guess-btn');
      guessInput= document.querySelector('#guess-input');
      message = document.querySelector('.message');

      // ui min max

      minNum.textContent = min;
      maxNum.textContent = max;
    // play again event listener
    UIgame.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again') {
            window.location.reload();
        }
    });
      // listening for guess

      guessBtn.addEventListener('click', function(){
          let guess = parseInt(guessInput.value);
            console.log(guess);
          //validation

          if(isNaN((guess)) || guess < min || guess > max){
            setMessage(`Please enter a number between ${min} and ${max}` , 'red');
          }

          // check if won

          if(guess === winningNum) {
              gameOver(true, `${winningNum} is correct, you win!`);
       
          
          } else {
            guessesLeft -= 1;
                if(guessesLeft === 0){
                    //game over
                   gameOver(false, ` Game over you LOST, the number was ${winningNum}`, 'red');
                } else {
                    // game cont
                    setMessage(`${guess} was not correct, ${guessesLeft} guesses left`, 'red');
                    guessInput.style.borderColor = 'red';
                    guessInput.value = '';
                }
          }
      });

      // game over
      function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red';
        guessInput.disabled = true;
        guessInput.style.borderColor = color;
        message.style.color = color;
            // let the player know they have wonb
        setMessage(msg);
        // play again
        guessBtn.value = 'Play again';
        guessBtn.className += 'play-again';
      }
      // get winning number
      function getRandomNum(min, max) {
        return (Math.floor(Math.random()*(max-min+1)+min));
      }
      // set message

      function setMessage(msg, color){
          message.style.color = color;
          message.textContent = msg;
         
      }

