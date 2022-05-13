export default function PlayScreen() {
    return (
        <>
            <div className="playScreen">
                <div className="playHeader">
                    <img src="assets/logo2.png" alt="Logo ZapRecall" />
                    <h1>ZapRecall</h1>
                </div>
                <div className="cardsPlace">
                    <div className="cardAnswer rotate">
                        <div className="frontCardAnswer">
                            <span>O que é JSX?</span>
                            <ion-icon name="reload-outline"></ion-icon>
                        </div>
                        <div className="backCardAnswer">
                            <span>JSX é uma sintaxe para escrever HTML dentro do JS</span>
                            <div className="answerButtons">
                                <button type="button">Não<br />lembrei</button>
                                <button type="button">Quase não<br />lembrei</button>
                                <button type="button">Zap!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 2</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 3</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 4</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 2</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 3</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card">
                        <h2>Pergunta 4</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="playFooter">
                <div className="message hidden">
                    <div className="messageHeader">
                        <img src="assets/party.png" alt="Party emote" />
                        <span>Parabéns!</span>
                    </div>
                    <div className="messageContent">
                        Você não esqueceu de nenhum flashcard!
                    </div>
                </div>
                <div className="message">
                    <div className="messageHeader">
                        <img src="assets/sad.png" alt="Party emote" />
                        <span>Putz...</span>
                    </div>
                    <div className="messageContent">
                        Ainda faltam alguns... Mas não desanime!
                    </div>
                </div>
                <span className="playCounter">0/4 CONCLUÍDOS</span>
                <span>
                    <ion-icon class="play-orange" name="help-circle"></ion-icon>
                    <ion-icon class="play-red" name="close-circle"></ion-icon>
                    <ion-icon class="play-green" name="checkmark-circle"></ion-icon>
                </span>
            </div>
        </>
    );
}