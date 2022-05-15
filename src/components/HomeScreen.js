import React from 'react';

export default function HomeScreen({ changePage, whichDeck }) { 
    //UI
    return (
        <div className="homeScreen">
            <img src="assets/logo1.png" alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <select onClick={whichDeck} defaultValue="">
                <option value="" disabled={true}>Escolha seu deck</option>
                <option value="STARWARS">Deck STARWARS</option>
                <option value="BTS">Deck BTS</option>
                <option value="REACT">Deck REACT</option>
            </select>
            <button type="button" onClick={changePage}>Iniciar Recall!</button>
        </div>
    );
}