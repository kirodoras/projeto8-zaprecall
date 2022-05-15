import React from 'react';

export default function PlayFooter(props) {
    //LOGIC
    function renderResult() {
        if (props.iconsList.length === props.cardsLength) {
            if (props.incorret) {
                return <MessageResult img='assets/sad.png' title='Putz...' msg='Ainda faltam alguns... Mas não desanime!'></MessageResult>
            } else {
                return <MessageResult img='assets/party.png' title='Parabéns!' msg='Você não esqueceu de nenhum flashcard!'></MessageResult>
            }
        }
    }
    function renderRestartButton() {
        if (props.iconsList.length === props.cardsLength) {
            return <RestartButton restartPage = {props.restartPage}></RestartButton>
        }
    }
    //UI
    return (
        <div className="playFooter">
            {
                renderResult()
            }
            <span className="playCounter">{props.iconsList.length}/{props.cardsLength} CONCLUÍDOS</span>
            <span>
                {props.iconsList.map((value, index) => <ion-icon key={index} class={value.color} name={value.name}></ion-icon>)}
            </span>
            {
                renderRestartButton()
            }
        </div>
    );
}

function MessageResult(props) {
    return (
        <div className="message">
            <div className="messageHeader">
                <img src={props.img} alt="Party emote" />
                <span>{props.title}</span>
            </div>
            <div className="messageContent">
                {props.msg}
            </div>
        </div>
    );
}

function RestartButton(props) {
    return (
        <button type="button" onClick={props.restartPage}>REINICIAR RECALL</button>
    );
}