import React from 'react';
import CardsPlace from "./CardsPlace";

const deckReact = [
    {
        question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        question: 'O React é __ ', answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: 'Componentes devem iniciar com __', answer: 'letra maiúscula'
    },
    {
        question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para __', answer: 'passar diferentes informações para componentes '
    },
    {
        question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
];

const deckBTS = [
    {
        question: 'Como é o nome do cachorro do J-Hope?', answer: 'Mickey'
    },
    {
        question: 'De onde o Suga é?', answer: 'Daegu'
    },
    {
        question: 'Como é o nome das lives de comida que o Jin faz?', answer: 'Eat Jin'
    },
    {
        question: 'Em que ano o RM estudou na Nova Zelândia?', answer: '2006'
    },
];

const deckStarwars = [
    {
        question: 'Quem QUASE matou Anakin?', answer: 'Obi Wan Kenobi'
    },
    {
        question: 'Quem matou Qui Gon?', answer: 'Darth Maul'
    },
    {
        question: 'Anakin já foi do bem?', answer: 'Sim, mas tinha ódio'
    },
    {
        question: 'Qual é melhor filme StarWars ?', answer: 'Rogue One'
    },
];

function shufflingDeck(deck) {
    return deck.sort(() => Math.random() - 0.5);
}

export default function PlayScreen({ restartPage, deck }) {
    //LOGIC
    function playDeck() {
        switch (deck) {
            case 'BTS':
                return shufflingDeck(deckBTS);
            case 'REACT':
                return shufflingDeck(deckReact);
            case 'STARWARS':
                return shufflingDeck(deckStarwars);
            default:
                return shufflingDeck(deckReact);
        }
    }
    //UI
    return (
        <>
            <div className="playScreen">
                <div className="playHeader">
                    <img src="assets/logo2.png" alt="Logo ZapRecall" />
                    <h1>ZapRecall</h1>
                </div>
                <CardsPlace deck={playDeck()} restartPage={restartPage} />
            </div>
        </>
    );
}