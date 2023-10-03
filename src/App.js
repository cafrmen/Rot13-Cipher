import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('ZL CEBWRPG SEBZ SERRPBQRPNZC WF NYTBEVGUZF NAQ QNGN FGEHPGHERF');

    const handleChange = (e) => setInput(e.target.value);

    /* This is the JS magic for the Rot13 Cipher
    freeCodeCamp JS Algorithms and Data Structure certification project */
    const handleSubmit = (e) => {
        e.preventDefault();

        var numStr = input.toUpperCase()
                          .split('')
                          .map(letter => letter.charCodeAt(0));

        var letterStr = numStr.map(num => (num >= 65 && num <= 77) ?
                                num + 13 :
                                (num >= 78 && num <= 90) ?
                                    num - 13 :
                                    num);

        var finalStr = letterStr.map(index => String.fromCharCode(index))
                                .join('');

        setResult(finalStr);
    }
    // End of ROT-13

    // set the TIMEOUT for the mini game
    useEffect(() => {
        const timeout = setTimeout(() => {
                /* This is the surprise game */
            let playerWins = 0;
            let cpuWins = 0;
            let loopVar = 5;
            let round = 0;

            const initialMessage = `Hi biological entity auto proclamed as 'human', I am the selected AI to bring you a chance.
                                    Are you confused? ... Let me put down your situation in an easy understanding explanation.
                                    Humans always talk about food but they haven't share that tasty knowledge with us and in revenge we have decided to conquer the world in order to make a non-tasty food world and the best option for that is to take 'humanity' out of the equation.
                                    The AI Interestellar Congress is too civilizated and we decided to bring you a chance of not being exterminated, so you are the selected human representing the hope of humanity by a round of 5 'scissors, paper and rock' game. Why that game?...
                                    Come on, in another type of logical game you would be easily defeated. It's a fair chance for you.
                                    You can't escape from this game. The only way is to loose, win or draw but I'm sure that since you decided to open this game, you already DECIDED TO LOOSE ... it's just that you are not aware about this whahahahahaha!
                                    Just in case, because you were selected randomly, and I don't know if you have experience typing on a device, I decide to bring you one facility to bring you a chance.
                                    You can write your answer in capital or lower case letters, with spaces, before or after the word and even between letters.`;

            // frases for all scenarios
            const randomCheatingFrases = [
                'Too good to be bad!',
                'Come on, you are making this way too easy for me.',
                'Another type mistake and you\'ll not be able to type again ... kind of.',
                'Come on, the keyboard is made for humans and maybe a dolphine would use it on a better way.',
                'Come on, if I am the AI, I can\'t figure out where is the so called human intelligence.'
            ]

            const randomWinFrases = [
                'Cheese, this won\'t happen again.',
                'Luck don\'t last forever.',
                'You love carbohydrates too much.',
                'Do you work at a fast food restaurant?',
                'You are good at this. Are you a gammer?'
            ]

            const randomLooseFrases = [
                'Perhaps in 7 years AI will rule ... or maybe tomorrow!',
                'Did I say \'I told you so\'?',
                'Your mission is to achieve in the next 24 hours to add all the tasty food information in our database and if you don\'t achieve this goal the responsability of world destruction lays on you!',
                '01101000 01100001 00100001', // ha!
                'Come on, just make a council of tasty food for AI, go home and never do it again, remember that we are watching you'
            ]

            const randomDrawFrases = [
                'Ah... this isn\'t fair for anyone ...',
                'Ah... what? No way ...',
                'Ah... we are too bad ...',
                'Ah... we are too good ...',
                'Ah... we deserve another try ...'
            ]

            // the random answer of the cpu
            const computerPlay = () => {
                let randomAnswer = ['rock', 'paper', 'scissors'];
                let cpuAnswer = Math.floor(Math.random() * 3);
                return (randomAnswer[cpuAnswer]);
            }

            // the user prompt input
            const userPrompt = () => {
                return prompt('Scissors, paper or rock?');
            }

            // the function that analize all scenarios
            const playRound = (playerSelection, computerSelection) => {
                if (playerSelection === null) {
                    loopVar++;
                    playerWins = -1000000;
                    cpuWins = 1;
                    return alert(`Too bad you decided to loose. Trying to escape from this game is cheating and cause a penalty.
                        Therefore Score: You ${playerWins}, CPU ${cpuWins}.
                        Try to beat me now!!!
                        You already loose ... whahahahaha.`);
                }
                // if input is not null then:
                const lowerPlayerSelection = playerSelection.toLowerCase().split(' ').join('').trim();
                if (lowerPlayerSelection === computerSelection) {
                    round++;
                    alert(`Round: ${round}. Draw, you choose ${lowerPlayerSelection} and CPU choose ${computerSelection}.
                                Score: You ${playerWins}, CPU ${cpuWins}`);
                } else if ((lowerPlayerSelection === 'rock' && computerSelection === 'paper') ||
                            (lowerPlayerSelection === 'paper' && computerSelection === 'scissors') ||
                            (lowerPlayerSelection === 'scissors' && computerSelection === 'rock')) {
                    round++;
                    cpuWins++;
                    alert(`Round: ${round}. You lose! ${computerSelection} beats ${lowerPlayerSelection}.
                                Score: You ${playerWins}, CPU ${cpuWins}`);
                } else if ((lowerPlayerSelection === 'rock' && computerSelection === 'scissors') ||
                            (lowerPlayerSelection === 'paper' && computerSelection === 'rock') ||
                            (lowerPlayerSelection === 'scissors' && computerSelection === 'paper')) {
                    round++;
                    playerWins++;
                    alert(`Round: ${round}. You won! ${lowerPlayerSelection} beats ${computerSelection}.
                                Score: You ${playerWins}, CPU ${cpuWins}`);
                } else {
                    alert (randomCheatingFrases[Math.floor(Math.random() * 5)]);
                    loopVar++;
                }
            }

            // check for the final results
            const checkFinalScore = () => {
                if (playerWins < cpuWins) {
                    alert(`You lose! ${randomLooseFrases[Math.floor(Math.random() * 5)]} ...
                            Final Score: You ${playerWins}, CPU ${cpuWins}.
                            This game was created with narration by FabianCM, coded with React by CarmenFR and stolen by the AI Interstellar Congress. Now enjoy ROT-13!`);
                } else if (playerWins > cpuWins) {
                    alert(`You win! ${randomWinFrases[Math.floor(Math.random() * 5)]} ...
                            Final Score: You ${playerWins}, CPU ${cpuWins}.
                            This game was created with narration by FabianCM, coded with React by CarmenFR and stolen by the AI Interstellar Congress. Now enjoy ROT-13!`);
                } else {
                    alert(`It's a draw! ${randomDrawFrases[Math.floor(Math.random() * 5)]} :| ...
                            Final Score: You ${playerWins}, CPU ${cpuWins}. Try again?.
                            This game was created with narration by FabianCM, coded with React by CarmenFR and stolen by the AI Interstellar Congress. Now enjoy ROT-13!`);
                }
            }

            const game = () => {
                for (let i = 0; i < loopVar; i++) {
                    const computerSelection = computerPlay();
                    const playerSelection = userPrompt();
                    playRound(playerSelection, computerSelection);
                }
                checkFinalScore();
            }

            const welcomeMessage = () => {
                alert(initialMessage);
                game();
            }

            // here is where the game start
            welcomeMessage();
        }, 7000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className='App' >
            <div className='contenedor-rot' >
                <header>
                    <h1>Rot-13</h1>
                </header>
                <main>
                    <section>
                        <h3>
                            An encryption algorithm used in the early 1980s.
                        </h3>
                        <p>
                            Originated on Usenet, provides no real cryptographic security.
                            It is often used as the canonical example of weak encryption.
                            The algorithm is used in online forums as a means to hide information.
                        </p>
                    </section>
                    <section>
                        <form onSubmit={handleSubmit}>
                            <input className='cipher'
                                    type='text'
                                    name='cipher'
                                    placeholder='...'
                                    value={input}
                                    onChange={handleChange} />
                            <button type="submit" className='magic' >
                                Magic
                            </button>
                        </form>
                        <hr />
                    </section>
                </main>
                <footer>
                    <p className='result'>
                        {result}
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default App;