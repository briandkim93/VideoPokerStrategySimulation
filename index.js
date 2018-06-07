const runButton = document.getElementById('run');
runButton.addEventListener('click', function() {
    const iterations = document.getElementById('iterations').value;
    const coin = parseInt(document.querySelector('input[name="coin"]:checked').value);
    if (iterations >= 1) {
        const simulationResults = simulation(iterations, coin);
        const percentageP = document.getElementById('percentageReturn');
        const coinP = document.getElementById('coinReturn');
        percentageP.innerText = 'After ' + iterations + ' iterations, there was a ' + simulationResults[0] + ' return.';
        coinP.innerText = 'Betting ' + coin + ' coins for each iteration, '  + 'this equates to ' + simulationResults[1] + ' coins.';
    }
}, false);