function playGame(userChoice) {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const computerChoice = Math.floor(Math.random() * 3);

    let result = '';

    if (userChoice === computerChoice) {
        result = 'Empate!';
    } else if ((userChoice === 0 && computerChoice === 2) || 
               (userChoice === 1 && computerChoice === 0) || 
               (userChoice === 2 && computerChoice === 1)) {
        result = 'Você ganhou!';
    } else {
        result = 'Você perdeu!';
    }

    console.log( `Você escolheu ${choices[userChoice]}, o computador escolheu ${choices[computerChoice]}. ${result}`);
    document.getElementById('result').textContent = `Você escolheu ${choices[userChoice]}, o computador escolheu ${choices[computerChoice]}. ${result}`;

    
    

}



 


