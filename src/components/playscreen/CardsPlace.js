import React from 'react';

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

export default function CardsPlace() {
    return (
        <div className="cardsPlace">
            {deckReact.map((value, index) => <Card
                question={value.question}
                answer={value.answer}
                cardNumber={index + 1}
                key={index} />)}
        </div>
    );
}

function Card(props) {
    //LOGIC
    const [seeQuestion, setSeeQuestion] = React.useState(false);
    //UI
    return (
        <>
            {
                seeQuestion ? <CardHidden question={props.question} answer={props.answer}/> :
                    <CardShow cardNumber={props.cardNumber} changeCard={() => setSeeQuestion(true)} />
            }
        </>
    );

}


function CardShow({ cardNumber, changeCard, color }) {
    //console.log(props)
    return (
        <div className="card" onClick={changeCard}>
            <h2 className={color}>Pergunta {cardNumber}</h2>
            <ion-icon class={color} name="play-outline"></ion-icon>
        </div>
    );
}

function CardHidden({question, answer}) {
    //LOGIC
    const [rotate, setRotate] = React.useState('');

    //UI
    return (
        <div className={`cardAnswer ${rotate}`}>
            <div className="frontCardAnswer">
                <span>{question}</span>
                <ion-icon name="reload-outline" onClick={() => setRotate('rotate')}></ion-icon>
            </div>
            <div className="backCardAnswer">
                <span>{answer}</span>
                <div className="answerButtons">
                    <button type="button">Não<br />lembrei</button>
                    <button type="button">Quase não<br />lembrei</button>
                    <button type="button">Zap!</button>
                </div>
            </div>
        </div>
    );
}