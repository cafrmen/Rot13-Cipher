import { useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('ZL CEBWRPG SEBZ SERRPBQRPNZC WF NYTBEVGUZF NAQ QNGN FGEHPGHERF');

    const handleChange = (e) => setInput(e.target.value);

    /* This is the JS magic for the Rot13 Cipher */
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
