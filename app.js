var userScore = 0;
var  computerScore = 0;

const result_p = document.querySelector(".result > p") ; 
const userScore_span = document.getElementById("user-score") ; 
const computerScore_span = document.getElementById("computer-score") ; 
const rock_div = document.getElementById("r") ; 
const paper_div = document.getElementById("p") ; 
const scissor_div = document.getElementById("s") ; 

rock_div.addEventListener('click', () =>  game('r')  ) ; 
paper_div.addEventListener('click', () =>  game('p')  ) ; 
scissor_div.addEventListener('click', () => game('s')  ) ; 

function getComputerChoice()  {

    const choice = ['r', 'p', 's'] ;
    const randomNumber = Math.floor(Math.random() * 3); 
    
    return choice[randomNumber] ; 
}

function convertToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
        case "s":
            return "Scissor";
        case "p":
            return "Paper" ;

    }

}
function win(userChoice, computerChoice) {
    userScore ++ ;
   
    userScore_span.innerHTML = userScore ; 
    computerScore_span.innerHTML = computerScore ;
    
    const subscript_cpu = "(cpu)".fontsize(3).sub() ; 
    const subscript_user = "(user)".fontsize(3).sub() ; 
    const userChoice_div = document.getElementById(userChoice) ;

    result_p.innerHTML =  ` ${convertToWord(userChoice)}${subscript_user}   beats  ${convertToWord(computerChoice)}${subscript_cpu} . You win! ` ; 

    userChoice_div .classList.add('green-glow') ; // for adding a green glow to the element id that wins

    setTimeout( ()=> userChoice_div .classList.remove('green-glow') , 300); // rem,oves the green glow after 300 ms . 
    console.log("user wins") ;
}

function lose(userChoice, computerChoice) {
    computerScore++;
   
    userScore_span.innerHTML = userScore ;
    computerScore_span.innerHTML = computerScore ;
    
    const subscript_cpu = "(cpu)".fontsize(3).sub() ; 
    const subscript_user = "(user)".fontsize(3).sub() ; 
    const userChoice_div = document.getElementById(userChoice) ; 

    result_p.innerHTML =  ` ${convertToWord(computerChoice)}${subscript_cpu}   beats   ${convertToWord(userChoice)}${subscript_user} . You lose.` ;  // es6 for string concatenation
    
    
    userChoice_div .classList.add('red-glow') ; // for adding a red glow to the element id that wins
    setTimeout( () => userChoice_div .classList.remove('red-glow')  , 300); // removes the red glow after 300 ms . 
   
    console.log("user loses") ; 
}

function draw(userChoice, computerChoice) {
    
    const subscript_cpu = "(cpu)".fontsize(3).sub() ; 
    const subscript_user = "(user)".fontsize(3).sub() ; 
    const userChoice_div = document.getElementById(userChoice) ;

    result_p.innerHTML =  ` ${convertToWord(computerChoice)}${subscript_cpu}   equals   ${convertToWord(userChoice)}${subscript_user} . Draw.` ;
    
    userChoice_div .classList.add('gray-glow') ; // for adding a red glow to the element id that wins
    setTimeout(() => userChoice_div .classList.remove('gray-glow')  , 300); // removes the red glow after 300 ms . 
    console.log("draw") ; 
}

function game(userChoice) {

    const cpuChoice = getComputerChoice() ; 

    console.log("Computer Choice = " + cpuChoice);
    console.log("User Choice = " + userChoice);

    switch (userChoice + cpuChoice ) {
        case "rs":
        case "pr":
        case "sp":
       
           win(userChoice, cpuChoice);
            break ;
        case "sr":
        case "rs":
        case "ps":
            lose(userChoice, cpuChoice) ; 
            break ; 
            
        default: 
            draw(userChoice, cpuChoice) ;  
    }
}

