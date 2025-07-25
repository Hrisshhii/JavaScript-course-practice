let compMove='';
        let result='';
        let score = JSON.parse(localStorage.getItem('SCORE')) || { wins: 0, losses: 0, ties: 0 };

        updateScore();

        function pickComputerMove(){
            const randomNum=Math.random();
            if(randomNum>=0 && randomNum<1/3){
                compMove='ROCK';
            }
            else if(randomNum>=1/3 && randomNum<2/3){
                compMove='PAPER';
            }
            else {
                compMove='SCISSORS';
            }
        }

        function playGame(playerMove){
            pickComputerMove();
            if(playerMove==='SCISSORS'){
                if(compMove==='ROCK'){
                    result='YOU LOSE!!';
                }
                else if(compMove==='PAPER'){
                    result='YOU WIN!!';
                }
                else{
                    result='DRAW';
                }
            }
            else if(playerMove==='ROCK'){
                if(compMove==='ROCK'){
                    result='DRAW';
                }
                else if(compMove==='PAPER'){
                    result='YOU LOSE!!';
                }
                else{
                    result='YOU WIN!!';
                }
            }
            else if(playerMove==='PAPER'){
                if(compMove==='ROCK'){
                    result='YOU WIN!!';
                }
                else if(compMove==='PAPER'){
                    result='DRAW';
                }
                else{
                    result='YOU LOSE!!';
                }
            }

            if(result==='YOU WIN!!'){
                score.wins+=1
            }
            else if(result==='YOU LOSE!!'){
                score.losses+=1
            }
            else if(result==='DRAW'){
                score.ties+=1
            }

            localStorage.setItem('SCORE',JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result')
            .innerHTML=result;

            document.querySelector('.js-moves')
            .innerHTML=`YOUR MOVE: <img src="Images/${playerMove}.png" class="mov-icon"> COMPUTER MOVE: <img src="Images/${compMove}.png" class="mov-icon">`;
        }

        function updateScore(){
            document.querySelector('.js-score')
            .innerHTML=`WINS:${score.wins} , LOSSES:${score.losses} , TIES:${score.ties}`;
        }