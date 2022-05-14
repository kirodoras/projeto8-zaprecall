export default function PlayFooter() {
    return (
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
    );
}