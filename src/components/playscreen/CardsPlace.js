export default function CardsPlace() {
    return (
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
        </div>
    );
}