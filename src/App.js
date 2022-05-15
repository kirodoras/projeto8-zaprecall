import React from 'react';
import './styles/reset.css';
import './styles/style.css';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/playscreen/PlayScreen';

export default function App() {
    //LOGIC
    const [page, setPage] = React.useState(false);
    const [deck, setDeck] = React.useState("");

    function whichDeck(event) {
        if (event.target.value) {
            setDeck (event.target.value);
        }
    }
    //UI
    return (
        <>
            {(page && deck) ? <PlayScreen restartPage={() => setPage(false)} deck={deck} />
                : <HomeScreen changePage={() => setPage(true)} whichDeck ={whichDeck} />}
        </>
    );
}