import CardsPlace from "./CardsPlace";
import PlayFooter from "./PlayFooter";

export default function PlayScreen() {
    return (
        <>
            <div className="playScreen">
                <div className="playHeader">
                    <img src="assets/logo2.png" alt="Logo ZapRecall" />
                    <h1>ZapRecall</h1>
                </div>
                <CardsPlace />
            </div>
            <PlayFooter />
        </>
    );
}