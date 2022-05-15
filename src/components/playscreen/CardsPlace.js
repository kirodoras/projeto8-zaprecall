import React from 'react';
import PlayFooter from "./PlayFooter";

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

export default function CardsPlace({deck}) {
    //LOGIC
    const [iconList, setIconList] = React.useState([]);
    const [incorret, setIncorret] = React.useState(false);

    function addIcon(newicon) {
        const newIconList = [...iconList, newicon];
        setIconList(newIconList);
    }

    //UI
    return (
        <>
            <div className="cardsPlace">
                {deck.map((value, index) => <Card
                    question={value.question}
                    answer={value.answer}
                    cardNumber={index + 1}
                    key={index}
                    addIcon={addIcon}
                    setIncorret={setIncorret} />)}
            </div>
            <PlayFooter cardsLength={deck.length} iconsList={iconList} incorret={incorret} />
        </>
    );
}

function Card(props) {
    //LOGIC
    const [seeQuestion, setSeeQuestion] = React.useState(0);

    function renderCard() {
        switch (seeQuestion) {
            case 0:
                return <CardShow cardNumber={props.cardNumber}
                    changeCard={() => setSeeQuestion(1)} />
            case 1:
                return <CardHidden question={props.question}
                    answer={props.answer}
                    resultZap={() => {
                        setSeeQuestion(2);
                        props.addIcon({ color: 'play-green', name: 'checkmark-circle' });
                    }}
                    resultHalfZap={() => {
                        setSeeQuestion(3);
                        props.addIcon({ color: 'play-orange', name: 'help-circle' });
                    }}
                    resultNotZap={() => {
                        setSeeQuestion(4);
                        props.setIncorret(true);
                        props.addIcon({ color: 'play-red', name: 'close-circle' });
                    }} />
            case 2:
                return <CardShow cardNumber={props.cardNumber}
                    color="play-green" nameIcon="checkmark-circle" />
            case 3:
                return <CardShow cardNumber={props.cardNumber}
                    color="play-orange" nameIcon="help-circle" />
            case 4:
                return <CardShow cardNumber={props.cardNumber}
                    color="play-red" nameIcon="close-circle" />
            default:
                return <CardShow cardNumber={props.cardNumber}
                    changeCard={() => setSeeQuestion(1)} />
        }
    }

    //UI
    return (
        <>
            {
                renderCard()
            }
        </>
    );

}


function CardShow({ cardNumber, changeCard, color, nameIcon }) {
    //console.log(props)
    return (
        <div className="card" onClick={changeCard}>
            <h2 className={color}>Pergunta {cardNumber}</h2>
            <ion-icon class={color} name={nameIcon}></ion-icon>
        </div>
    );
}

function CardHidden({ question, answer, resultZap, resultNotZap, resultHalfZap }) {
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
                    <button type="button" onClick={resultNotZap}>Não<br />lembrei</button>
                    <button type="button" onClick={resultHalfZap}>Quase não<br />lembrei</button>
                    <button type="button" onClick={resultZap}>Zap!</button>
                </div>
            </div>
        </div>
    );
}

/*

function addNewDeck(newdeck) {
        const newDeck = [...newdeck];
        setShuffleDeck(newDeck);
    }
    addNewDeck(deckReact);
    .sort(() => { return Math.random() - 0.5 })*/